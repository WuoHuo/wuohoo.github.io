
module.exports = {
    base: '/wuohoo.github.io/',
    title: '秘密花园',
    dest: 'docs/.vuepress/dist',
    head: [
        // ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    // themeConfig,
    markdown: {
        lineNumbers: true
    },
    // plugins: ['@/vuepress/medium-zoom', 'flowchart']
}