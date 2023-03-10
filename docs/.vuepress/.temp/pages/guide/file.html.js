export const data = JSON.parse("{\"key\":\"v-55846971\",\"path\":\"/guide/file.html\",\"title\":\"页面的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题\",\"description\":\"页面的描述\"},\"headers\":[{\"level\":2,\"title\":\"指南测试页面2\",\"slug\":\"指南测试页面2\",\"link\":\"#指南测试页面2\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/file.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
