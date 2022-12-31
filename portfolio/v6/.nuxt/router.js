import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e0974a46 = () => interopDefault(import('../pages/legal.vue' /* webpackChunkName: "pages/legal" */))
const _1c226da8 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _7ae163dc = () => interopDefault(import('../pages/speaking.vue' /* webpackChunkName: "pages/speaking" */))
const _3866b53c = () => interopDefault(import('../pages/support-me.vue' /* webpackChunkName: "pages/support-me" */))
const _69172e66 = () => interopDefault(import('../pages/timeline.vue' /* webpackChunkName: "pages/timeline" */))
const _3ac92714 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/legal/",
    component: _e0974a46,
    pathToRegexpOptions: {"strict":true},
    name: "legal"
  }, {
    path: "/privacy/",
    component: _1c226da8,
    pathToRegexpOptions: {"strict":true},
    name: "privacy"
  }, {
    path: "/speaking/",
    component: _7ae163dc,
    pathToRegexpOptions: {"strict":true},
    name: "speaking"
  }, {
    path: "/support-me/",
    component: _3866b53c,
    pathToRegexpOptions: {"strict":true},
    name: "support-me"
  }, {
    path: "/timeline/",
    component: _69172e66,
    pathToRegexpOptions: {"strict":true},
    name: "timeline"
  }, {
    path: "/",
    component: _3ac92714,
    pathToRegexpOptions: {"strict":true},
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
