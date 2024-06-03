import React from 'react'

export default class SocialShare extends React.Component {
  render() {
    return (
      <ul className="share">
        <li>
          <a
            className="icon-social icon-twitter"
            href={'https://x.com/CSISIndiaChair'}
            rel="noopener noreferrer"
            target="_blank"
            title="Visit us on Twitter"
          >
            <span className="visually-hidden">Visit us on Twitter</span>
          </a>
        </li>
        <li>
          <a
            className="icon-social icon-linkedin-circled"
            href={'https://www.linkedin.com/company/csis-india-chair'}
            rel="noopener noreferrer"
            target="_blank"
            title="Visit us on  Linkedin"
          >
            <span className="visually-hidden">Visit us on Linkedin</span>
          </a>
        </li>

        <li>
          <a
            className="icon-social icon-mail"
            href="mailto:IndiaChair@csis.org?subject=India's Economic Reform Agenda"
            title="Email"
          >
            <span className="visually-hidden">Email</span>
          </a>
        </li>
      </ul>
    )
  }
}