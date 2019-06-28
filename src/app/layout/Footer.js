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
            <p>{footerContent.feedback_instruction}</p>
            <a
              className="btn"
              href={`mailto: IndiaChair@csis.org?subject=${document.title}`}
            >
              {footerContent.feedback_form}
            </a>
          </section>
        </section>
        <section className="site-footer">
          <Logo />

          <div className="site-footer__content">
            {ValueToJSX(footerContent.about, 'about')}

            <section className="site-footer__content-connect">
              <SocialShare />
              {ValueToJSX(footerContent.address)}
            </section>
          </div>
          {ValueToJSX(footerContent.copyright, 'copyright')}
        </section>
      </footer>
    )
  }
}
