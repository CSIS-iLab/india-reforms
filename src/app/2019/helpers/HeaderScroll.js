let scrollPos = window.pageYOffset
let lastScrollPos = 0
let offsetScroll = true

export default function HeaderScroll() {
  const header = document.querySelector('.site-header')
  if (!header) return
  const header_height = header.offsetHeight + 5

  const minimal_class = 'site-header--minimal'
  const hidden_class = 'site-header--hidden'

  if (document.documentElement.classList.contains('js-no-scroll')) {
    return false
  }

  scrollPos = window.pageYOffset

  if (!offsetScroll) {
    scrollPos += header_height
  }

  if (scrollPos > header_height) {
    offsetScroll = false

    if (scrollPos < lastScrollPos) {
      header.classList.remove(hidden_class)
      header.classList.add(minimal_class)
    } else {
      header.classList.add(hidden_class)
    }
  } else {
    offsetScroll = true
    header.classList.remove(hidden_class)
    header.classList.remove(minimal_class)
  }

  lastScrollPos = scrollPos
}
