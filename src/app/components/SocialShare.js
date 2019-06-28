import React from 'react'

export default class SocialShare extends React.Component {
  render() {
    return (
      <ul className="share">
        <li>
          <a
            className="icon-social icon-twitter"
            href={`https://twitter.com/intent/tweet?text=Winning at the WTO&amp;url=${
              window.location.href
            }&amp;via=CSIS&amp;related=CSIS`}
            rel="noopener noreferrer"
            target="_blank"
            title="Share on Twitter"
          >
            <span className="visually-hidden">Share on Twitter</span>
          </a>
        </li>
        <li>
          <a
            className="icon-social icon-facebook"
            href={`https://www.facebook.com/sharer.php?u=${
              window.location.href
            }`}
            rel="noopener noreferrer"
            target="_blank"
            title="Share on Facebook"
          >
            <span className="visually-hidden">Share on Facebook</span>
          </a>
        </li>

        <li>
          <i
            tabIndex="0"
            className="icon-social icon-mail"
            href={`mailto: IndiaChair@csis.org?subject=${document.title}`}
            title="Email"
          >
            <span className="visually-hidden">Email</span>
          </i>
        </li>
      </ul>
    )
  }
}
