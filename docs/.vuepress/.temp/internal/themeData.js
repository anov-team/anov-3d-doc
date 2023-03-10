export const themeData = JSON.parse("{\"repo\":\"\",\"search\":true,\"searchMaxSuggestions\":8,\"navbar\":[{\"text\":\"指南\",\"link\":\"/guide/\"},{\"text\":\"插件\",\"link\":\"/plug/\"}],\"sidebarDepth\":1,\"sidebar\":{\"/guide/\":[{\"text\":\"指南\",\"children\":[\"/guide/README.md\",\"/guide/file.md\"]}],\"/plug/\":[{\"text\":\"插件\",\"children\":[\"/plug/README.md\",\"/plug/file.md\"]}]},\"editLink\":false,\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
