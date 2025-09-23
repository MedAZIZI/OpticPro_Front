import 'vue-router'

declare module 'vue' {
  interface ComponentCustomProperties {
    $route: import('vue-router').RouteLocationNormalizedLoaded
    $router: import('vue-router').Router
  }
}
