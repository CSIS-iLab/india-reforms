import React from "react";

export default class SocialShare extends React.Component {
  render() {
    const { job, location } = this.props;

    return (
      <ul className={location === "footer" ? "post-footer__nav-menu" : ""}>
        <li>
          <a
            className="icon icon-facebook"
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
          <a
            className="icon icon-twitter"
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
            className="icon icon-linkedin"
            href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${
              window.location.href
            }&amp;summary=${job.title["#cdata-section"]}&amp;source=CSIS`}
            rel="noopener noreferrer"
            target="_blank"
            title="Share on Linkedin"
          >
            <span className="visually-hidden">Share on Linkedin</span>
          </a>
        </li>
        <li>
          <i
            tabIndex="0"
            className="icon icon-email"
            href={`mailto:?subject=${job.title["#cdata-section"]}&amp;body=${
              window.location.href
            }`}
            title="Email"
          >
            <span className="visually-hidden">Email</span>
          </i>
        </li>
        <li>
          <i
            tabIndex="0"
            className="icon icon-printer"
            onClick={() => window.print()}
          >
            <span className="visually-hidden">Share on Facebook</span>
          </i>
        </li>
        <li className="list-item__copy">
          <i
            tabIndex="0"
            className="icon icon-copy-link"
            onClick={this.handleCopy}
            onMouseOut={this.handleCopied}
            title="Copy"
          >
            <span className="visually-hidden">Copy</span>
          </i>

          <span className="copy-text">Copied!</span>
        </li>
      </ul>
    );
  }
}
