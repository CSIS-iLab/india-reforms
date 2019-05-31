const getMarkdownContent = (siteStructure, activePage, pageData) => {
  if (pageData) {
    if (pageData.sections) {
      let pageStructure = {}

      Object.keys(pageData.sections).forEach(section => {
        pageStructure[section] = {}

        Object.keys(pageData.sections[section]).forEach(component => {
          pageStructure[section][component] = {}

          pageStructure[section][component] =
            pageData.sections[section][component]
        })
      })

      siteStructure[activePage].content = pageStructure
    }
  }

  return siteStructure
}

const sortPageContent = (siteStructure, activePage, pageData) => {
  siteStructure = getMarkdownContent(siteStructure, activePage, pageData)

  if (siteStructure[activePage].content) {
    const indices = Object.keys(siteStructure[activePage].content).sort(
      (a, b) => {
        return (
          siteStructure[activePage].content[a].index -
          siteStructure[activePage].content[b].index
        )
      }
    )

    const orderedPageStructure = indices.map(index => {
      return { ...siteStructure[activePage].content[index], key: index }
    })

    siteStructure[activePage].content = orderedPageStructure
  }

  return siteStructure
}

export default function PageContent(siteStructure, page, pageData) {
  const siteContent = sortPageContent(siteStructure, page, pageData)

  return siteContent[page].content || []
}
