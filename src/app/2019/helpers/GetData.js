import grayMatter from 'gray-matter'
const webpackRequireContext = require.context(
  '!raw-loader!../../../content',
  false,
  /\.md$/
)

let files = {}
webpackRequireContext.keys().forEach(map => {
  const markdown = webpackRequireContext(map).default
  if (map.substring(0, 2) === './') {
    map = map.substr(2)
  }
  files[map] = markdown
})

export default function GetData2019(page) {
  console.log('Im here')
  const file = files[`${page}.md`]
  return grayMatter(file).data
}
