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
          </div>
        </section>
      </header>
    )
  }
}
