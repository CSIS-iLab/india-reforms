import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/csis_logo.svg'
import SocialShare from '../components/SocialShare'

export default class Nav extends React.Component {
  render() {
    const { page } = this.props

    const headerContent = {
      archive: (
        <a href="/" className="link-reforms">
          <span>VISIT THE NEW SITE &#8594;</span>
          <span>Track reforms from the current administration</span>
        </a>
      ),
      homepage: <SocialShare page={page} />
    }

    return (
      <nav
        className={`site-header__nav site-header__nav--${page}`}
        role="navigation"
      >
        <a href="/" className="link-logo">
          <Logo />
        </a>

        {headerContent[page]}
      </nav>
    )
  }
}
