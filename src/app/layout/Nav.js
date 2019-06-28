import React from 'react'
import { ReactComponent as LogoLong } from '../../assets/images/csis_logo-long.svg'
import { ReactComponent as LogoShort } from '../../assets/images/csis_logo-short.svg'
import SocialShare from '../components/SocialShare'

export default class Nav extends React.Component {
  render() {
    const { page } = this.props

    const headerContent = {
      archive: (
        <a href="/" className="link-reforms nav-link">
          <span>VISIT THE NEW SITE &#8594;</span>
          <span>Track reforms from the current administration</span>
        </a>
      ),
      homepage: (
        <React.Fragment>
          <SocialShare page={page} />
          <LogoShort className="link-home__logo-short" />
        </React.Fragment>
      )
    }

    return (
      <nav
        className={`site-header__nav site-header__nav--${page}`}
        role="navigation"
      >
        <div className="link-home link-home--desktop nav-link">
          <LogoLong className="link-home__logo-long" />
        </div>

        <div className="link-home link-home--mobile nav-link">
          <span>India Reforms Scorecard</span>
        </div>

        {headerContent[page]}
      </nav>
    )
  }
}
