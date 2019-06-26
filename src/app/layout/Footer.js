import React from 'react'
import GetData from '../helpers/GetData'
import { ReactComponent as Logo } from '../../assets/images/csis_logo-long.svg'
import ValueToJSX from '../helpers/ValueToJSX'
import SocialShare from '../components/SocialShare'

export default class Footer extends React.Component {
  render() {
    const footerContent = GetData('footer')

    return (
      <footer>
        <section className="page-footer">
          <section className="page-footer__methodology">
            <h3>{footerContent.methodology_title}</h3>
            {ValueToJSX(footerContent.methodology)}
          </section>
          <section className="page-footer__feedback">
            <h3>{footerContent.feedback_title}</h3>
            {ValueToJSX(footerContent.feedback, 'feedback')}
            {ValueToJSX(footerContent.feedback_instruction, 'instructions')}
            <a
              className="btn"
              href={`mailto:indiareforms@csis.org?subject=${document.title}`}
            >
              {footerContent.feedback_form}
            </a>
          </section>
        </section>
        <section className="site-footer">
          <Logo />
          {ValueToJSX(footerContent.about, 'about')}

          <section className="site-footer__connect">
            <SocialShare />
            {ValueToJSX(footerContent.address)}
          </section>

          {ValueToJSX(footerContent.copyright, 'copyright')}
        </section>
      </footer>
    )
  }
}
