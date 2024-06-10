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
                  srcSet="https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_320/v1561989507/india-reforms/Prime_Minister_Modi_cabinet_President_Kovind.jpg  320w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_335/v1561989507/india-reforms/Prime_Minister_Modi_cabinet_President_Kovind.jpg  335w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_480/v1561989507/india-reforms/Prime_Minister_Modi_cabinet_President_Kovind.jpg  480w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_635/v1561989507/india-reforms/Prime_Minister_Modi_cabinet_President_Kovind.jpg  635w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,w_900/v1561989507/india-reforms/Prime_Minister_Modi_cabinet_President_Kovind.jpg  900w"
                  src="https://res.cloudinary.com/csisideaslab/image/upload/v1561989507/india-reforms/Prime_Minister_Modi_cabinet_President_Kovind.jpg"
                  alt="Prime Minister Narendra Modi and cabinet ministers stand with President of India Ram Nath Kovind after taking the oath of office at the President house in New Delhi on May 30, 2019."
                />
              </figure>
              <figcaption className="caption">
                Prime Minister Narendra Modi and cabinet ministers stand with
                President of India Ram Nath Kovind after taking the oath of
                office at the President house in New Delhi on May 30, 2019.{' '}
                <span className="caption__source">
                  Photo: PRAKASH SINGH/AFP/Getty Images
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
      </header>
    )
  }
}
