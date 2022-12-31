import { stringify } from 'querystring'
import Vue from 'vue'

import {
  getMatchedComponents,
  promisify
} from './utils.js'

import { createApp, NuxtError } from './index.js'
import NuxtLink from './components/nuxt-link.server.js' // should be included after ./index.js

// Component: <NuxtLink>
Vue.component(NuxtLink.name, NuxtLink)

const noopApp = () => new Vue({ render: h => h('div') })

function urlJoin () {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/')
}

const createNext = ssrContext => (opts) => {
  ssrContext.redirected = opts
  // If nuxt generate
  if (!ssrContext.res) {
    ssrContext.nuxt.serverRendered = false
    return
  }
  opts.query = stringify(opts.query)
  opts.path = opts.path + (opts.query ? '?' + opts.query : '')
  const routerBase = '/'
  if (!opts.path.startsWith('http') && (routerBase !== '/' && !opts.path.startsWith(routerBase))) {
    opts.path = urlJoin(routerBase, opts.path)
  }
  // Avoid loop redirect
  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false
    return
  }
  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  })
  ssrContext.res.end()
}

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default async (ssrContext) => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false
  ssrContext.next = createNext(ssrContext)
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = []
  // Nuxt object (window{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = { layout: 'default', data: [], error: null, serverRendered: true }
  // Create the app definition and the instance (created for each request)
  const { app, router } = await createApp(ssrContext)
  const _app = new Vue(app)

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta()

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, { Components, nuxtState: ssrContext.nuxt })))
  }

  const renderErrorPage = async () => {
    // Load layout for error page
    const layout = (NuxtError.options || NuxtError).layout
    const errLayout = typeof layout === 'function' ? layout.call(NuxtError, app.context) : layout
    ssrContext.nuxt.layout = errLayout || 'default'
    await _app.loadLayout(errLayout)
    _app.setLayout(errLayout)

    await beforeRender()
    return _app
  }
  const render404Page = () => {
    app.context.error({ statusCode: 404, path: ssrContext.url, message: 'This page could not be found' })
    return renderErrorPage()
  }

  const s = Date.now()

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(router.match(ssrContext.url))

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : NuxtError.layout
  if (typeof layout === 'function') {
    layout = layout(app.context)
  }
  await _app.loadLayout(layout)
  if (ssrContext.nuxt.error) {
    return renderErrorPage()
  }
  layout = _app.setLayout(layout)
  ssrContext.nuxt.layout = _app.layoutName

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page()
  }

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp()
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage()
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender()

  return _app
}
