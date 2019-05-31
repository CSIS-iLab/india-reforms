import React from 'react'
import SocialShare from '../components/SocialShare'
import CloseMenu from '../helpers/CloseMenu'

export default class PostFooterNav extends React.Component {
  componentDidMount() {
    const triggers = Array.from(document.querySelectorAll('.menu-trigger'))

    triggers.forEach(trigger => {
      const target = document.querySelector(trigger.dataset.target)

      trigger.addEventListener('click', function() {
        if (target.classList.contains('is-active')) {
          CloseMenu(trigger, target)
        } else {
          target.classList.add('is-active')
          this.setAttribute('aria-expanded', 'true')
          this.classList.add('is-active')
        }
      })
    })
  }

  render() {
    const { job } = this.props

    return (
      <div className="post-footer">
        <div className="share">
          <button
            className="post-footer__nav-trigger menu-trigger dark btn-share"
            aria-expanded="false"
            aria-label="Toggle Share Menu"
            data-target=".post-footer__nav-menu"
          >
            <span className="visually-hidden">Toggle Share Menu</span>
          </button>
          <SocialShare job={job} location="footer" />
        </div>
        <button
          className="dark btn-back-to-top"
          aria-expanded="false"
          aria-label="Toggle Menu"
          data-target=".post-footer__nav-menu"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        >
          <span className="visually-hidden">Back to Top</span>
        </button>
      </div>
    )
  }
}
