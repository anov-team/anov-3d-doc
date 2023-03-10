import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'ANOV-3D',
    description: '这是一个有关ANOV-3D的帮助文档',
    theme: defaultTheme({
        //logo: "favicon.ico",
        repo: "",
        search: true,  //开启搜索
        searchMaxSuggestions: 8,
        navbar: [
            {
                text: "指南",
                link: "/guide/",
            },
            {
                text: "插件",
                link: "/plug/",
            }
        ],
        sidebarDepth: 1, //0 来禁用所有级别的页面标题  1 来包含 <h2> 标题  2 来包含 <h2> 和 <h3> 标题
        sidebar: {
            "/guide/": [
                {
                    text: "指南",
                    children: [
                        "/guide/README.md",
                        "/guide/file.md",
                    ],
                },
            ],
            "/plug/": [
                {
                    text: "插件",
                    children: [
                        "/plug/README.md",
                        "/plug/file.md",
                    ],
                },
            ],
        },
        editLink: false, //是否启用 编辑此页 链接
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
    })
})