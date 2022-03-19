import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/myPrograms/wohuo.github.io/node_modules/@vuepress-reco/style-default/lib/client/layouts/404.vue")),
  "Categories": defineAsyncComponent(() => import("D:/myPrograms/wohuo.github.io/node_modules/@vuepress-reco/style-default/lib/client/layouts/Categories.vue")),
  "Layout": defineAsyncComponent(() => import("D:/myPrograms/wohuo.github.io/node_modules/@vuepress-reco/style-default/lib/client/layouts/Layout.vue")),
  "Post": defineAsyncComponent(() => import("D:/myPrograms/wohuo.github.io/node_modules/@vuepress-reco/style-default/lib/client/layouts/Post.vue")),
  "Timeline": defineAsyncComponent(() => import("D:/myPrograms/wohuo.github.io/node_modules/@vuepress-reco/style-default/lib/client/layouts/Timeline.vue")),
}
