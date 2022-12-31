import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'

import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_workbox_ae21a8f8 from 'nuxt_plugin_workbox_ae21a8f8' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_32700c40 from 'nuxt_plugin_nuxticons_32700c40' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_axios_a6ad9f30 from 'nuxt_plugin_axios_a6ad9f30' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_googleanalytics_7aa95284 from 'nuxt_plugin_googleanalytics_7aa95284' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_compositionapi_a8f56dd4 from 'nuxt_plugin_compositionapi_a8f56dd4' // Source: ../plugins/composition-api.js (mode: 'all')
import nuxt_plugin_vuescrollreveal_ec80152e from 'nuxt_plugin_vuescrollreveal_ec80152e' // Source: ../plugins/vue-scroll-reveal.client (mode: 'client')
import nuxt_plugin_polyfills_0bed8d2a from 'nuxt_plugin_polyfills_0bed8d2a' // Source: ../plugins/polyfills.client (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"__dangerouslyDisableSanitizers":["script"],"titleTemplate":function anonymous(c
) {
return c ? `${c} - Lichter.io` : 'Lichter.io - Alexander Lichter'
},"script":[{"type":"application\u002Fld+json","innerHTML":"{\"@context\":\"http:\u002F\u002Fschema.org\",\"@type\":\"Person\",\"address\":{\"@type\":\"PostalAddress\",\"addressCountry\":\"DE\",\"addressLocality\":\"Leipzig\",\"addressRegion\":\"Sachsen\",\"postalCode\":\"04289\",\"streetAddress\":\"Corotweg 15\"},\"name\":\"Alexander Lichter\",\"image\":\"https:\u002F\u002Flichter.io\u002Fimg\u002Fme@2x.jpg\",\"email\":\"mailto:hello@lichter.io\",\"telephone\":\"+49 17670625208\",\"jobTitle\":\"Founder of Developmint\",\"url\":\"https:\u002F\u002Flichter.io\",\"sameAs\":[\"https:\u002F\u002Ftwitter.com\u002FTheAlexLichter\",\"https:\u002F\u002Fgithub.com\u002FmanniL\",\"https:\u002F\u002Fwww.developmint.de\u002F\",\"https:\u002F\u002Fstackoverflow.com\u002Fusers\u002F3975480\u002Fmannil\",\"https:\u002F\u002Flinkedin.com\u002Fin\u002Falexanderlichter\"]}"}],"meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Lichter.io - Alexander Lichter"},{"hid":"author","name":"author","content":"Alexander Lichter"},{"hid":"description","name":"description","content":"The personal website and online CV of Alexander Lichter, a passionate developer"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Lichter.io - Alexander Lichter"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Lichter.io - Alexander Lichter"},{"hid":"og:description","name":"og:description","property":"og:description","content":"The personal website and online CV of Alexander Lichter, a passionate developer"},{"hid":"og:url","name":"og:url","property":"og:url","content":"https:\u002F\u002Fwww.lichter.io"},{"hid":"og:image","name":"og:image","property":"og:image","content":"https:\u002F\u002Fwww.lichter.io\u002Fassets\u002Ficons\u002Ficon_512.7144fb.png"},{"hid":"og:image:width","name":"og:image:width","property":"og:image:width","content":512},{"hid":"og:image:height","name":"og:image:height","property":"og:image:height","content":512},{"hid":"og:image:type","name":"og:image:type","property":"og:image:type","content":"image\u002Fpng"},{"hid":"twitter:card","name":"twitter:card","property":"twitter:card","content":"summary"},{"hid":"twitter:site","name":"twitter:site","property":"twitter:site","content":"@TheAlexLichter"},{"hid":"twitter:creator","name":"twitter:creator","property":"twitter:creator","content":"@TheAlexLichter"}],"link":[{"rel":"manifest","href":"\u002Fassets\u002Fmanifest.49a2e54c.json"},{"rel":"shortcut icon","href":"\u002Fassets\u002Ficons\u002Ficon_64.7144fb.png"},{"rel":"apple-touch-icon","href":"\u002Fassets\u002Ficons\u002Ficon_512.7144fb.png","sizes":"512x512"}],"style":[],"htmlAttrs":{"lang":"en"}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error('inject(key, value) has no value provided')
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_ae21a8f8 === 'function') {
    await nuxt_plugin_workbox_ae21a8f8(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_32700c40 === 'function') {
    await nuxt_plugin_nuxticons_32700c40(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_a6ad9f30 === 'function') {
    await nuxt_plugin_axios_a6ad9f30(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_7aa95284 === 'function') {
    await nuxt_plugin_googleanalytics_7aa95284(app.context, inject)
  }

  if (typeof nuxt_plugin_compositionapi_a8f56dd4 === 'function') {
    await nuxt_plugin_compositionapi_a8f56dd4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollreveal_ec80152e === 'function') {
    await nuxt_plugin_vuescrollreveal_ec80152e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_polyfills_0bed8d2a === 'function') {
    await nuxt_plugin_polyfills_0bed8d2a(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
