// shims-vue-router.d.ts
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    state?: any;
  }

  interface Route {
    state?: any;
  }
}
