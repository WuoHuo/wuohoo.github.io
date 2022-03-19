import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-5d059c92","/theme-reco/api.html",{"title":"api"},["/theme-reco/api","/theme-reco/api.md"]],
  ["v-17e89c27","/theme-reco/home.html",{"title":"theme-reco"},["/theme-reco/home","/theme-reco/home.md"]],
  ["v-33d17713","/theme-reco/plugin.html",{"title":"plugin"},["/theme-reco/plugin","/theme-reco/plugin.md"]],
  ["v-0d897d83","/theme-reco/theme.html",{"title":"theme"},["/theme-reco/theme","/theme-reco/theme.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-01560935","/timeline/",{"title":""},["/timeline/index.html"]],
  ["v-03d52fd3","/posts/1/",{"title":""},["/posts/1/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
