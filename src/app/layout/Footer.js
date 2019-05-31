import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr />

        <div id="method">
          <p>
            <strong>Methodology:</strong>To establish this list, CSIS first
            conducted a literature review, looking for the frequency that
            individual reforms were listed by business associations, prominent
            economists, and government agencies. To refine the list, CSIS
            organized a series of workshops featuring experts from outside the
            Indian government who further refined the list and helped determine
            the difficulty of enacting. Feedback is welcome.
          </p>

          <p>
            <a href="20180625_india_reforms.pdf">
              Download a list of the reforms
            </a>
          </p>
        </div>
        <div id="copyright">
          <p>
            India Reforms is a product of the{' '}
            <a
              href="https://www.csis.org/programs/dracopoulos-ideas-lab"
              target="_blank"
            >
              Andreas C. Dracopoulos iDeas Lab
            </a>, the in-house digital, multimedia, and design agency at the
            Center for Strategic and International Studies.
          </p>

          <p>
            © The Center for Strategic and International Studies{' '}
            <span className="copyright-year">2019</span> |{' '}
            <a
              href="https://www.csis.org/privacy-policy"
              target="_blank"
              rel="nofollow"
            >
              Privacy Policy
            </a>
            | <a href="#">Back to top</a>
          </p>
        </div>
      </footer>
    )
  }
}
