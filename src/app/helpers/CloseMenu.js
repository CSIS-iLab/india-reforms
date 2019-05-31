import scroll from '@threespot/freeze-scroll'

export default function CloseMenu(trigger, target) {
  const overlay = document.querySelector('.content-overlay')

  trigger.setAttribute('aria-expanded', 'false')
  trigger.classList.remove('is-active')
  target.classList.remove('is-active')

  overlay.classList.remove('is-active')
  scroll.unfreeze()
}
