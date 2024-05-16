import React from 'react'
import ValueToJSX from '../helpers/ValueToJSX'
import Nav from './Nav'

export default class PageHeader extends React.Component {
  render() {
    const { pageContent, page } = this.props

    return (
      <header className="site-header">
        <Nav page={page} />
        <h1>
          {pageContent.title}
          <br />
          <span className="subtitle">{pageContent.subtitle}</span>
        </h1>
        <section className="credit">{pageContent.credit}</section>
        <section className="intro">
          <div className="intro__text">{ValueToJSX(pageContent.text)}</div>
          <div className="intro__video">
            <div className="video-wrapper">
              {ValueToJSX(pageContent.iframe)}
            </div>
            <figure className="component-image">
              <figure className="component-image__container">
                <img
                  sizes="(max-width: 320px) 320px,(max-width: 375px) 335px,(max-width: 480px) 440px,(max-width: 675px) 635px,900px"
                  srcSet="https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_320/v1715873262/india-reforms/China-Railway-Rolling-Stock-Corporation-1276x851.jpg  320w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_335/v1715873262/india-reforms/China-Railway-Rolling-Stock-Corporation-1276x851.jpg  335w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_480/v1715873262/india-reforms/China-Railway-Rolling-Stock-Corporation-1276x851.jpg  480w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_635/v1715873262/india-reforms/China-Railway-Rolling-Stock-Corporation-1276x851.jpg  635w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,w_900/v1715873262/india-reforms/China-Railway-Rolling-Stock-Corporation-1276x851.jpg  900w"
                  src="https://res.cloudinary.com/csisideaslab/image/upload/v1715873262/india-reforms/China-Railway-Rolling-Stock-Corporation-1276x851.jpg"
                  alt="China Railway Rolling Stock Corporation (CRRC) workers stand inside a carriage of India's first prototype driverless metro train at the Hebbagodi Bangalore Metro Rail Depot in Bengaluru on March 6, 2024."
                />
              </figure>
              <figcaption className="caption">
                China Railway Rolling Stock Corporation (CRRC) workers stand
                inside a carriage of India's first prototype driverless metro
                train at the Hebbagodi Bangalore Metro Rail Depot in Bengaluru
                on March 6, 2024.{' '}
                <span className="caption__source">
                  Photo by IDREES MOHAMMED/AFP via Getty Images
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
      </header>
    )
  }
}
