import React from 'react'
import GetData from '../helpers/GetData'
import PageHeader from '../layout/PageHeader'
import PageHeader2019 from '../2019/layout/PageHeader'
import ReformCard from '../components/ReformCard'
import ReformDetail from '../components/ReformDetail'
import html2pdf from 'html2pdf.js'
import Stickyfill from 'stickyfilljs'
import { Button, Modal } from 'semantic-ui-react'
import {html2canvas} from 'html2canvas'
import { jsPDF } from 'jspdf'

export default class Page extends React.Component {
  constructor(props) {
    super(props)
    const { page } = this.props

    const pageContent = GetData(page)

    this.state = {
      cards: null,
      page,
      pageContent,
      title: GetData(page).title,
      open: false,
      active: null,
      sort: 'status'
    }
  }

  resetControl = target => {
    let buttons = Array.from(target.parentNode.querySelectorAll('button'))

    buttons.forEach(b => {
      b.classList.remove('dark')
    })

    target.classList.add('dark')

    window.scrollTo(0, 900)
  }

  handleReset = e => {
    this.state.cards.arrange({ filter: '*' })
    this.resetControl(e.target)
    this.setState({ value: '' })
  }

  handleSort = e => {
    this.state.cards.arrange({
      sortBy: e.target.dataset.sortBy
    })

    this.setState({ sort: 'status' })
    this.resetControl(e.target)
  }

  handleFilter = e => {
    const value = e.target.dataset.sectors
    value === '*'
      ? this.state.cards.arrange({ filter: value })
      : this.state.cards.arrange({
        filter: card => card.dataset.sectors.indexOf(value) > -1
      })
    this.resetControl(e.target)
  }

  componentDidMount() {
    require('../../assets/scss/scorecard.scss')
    const elements = document.querySelectorAll('.sticky')
    Stickyfill.add(elements)
  }
  componentDidUpdate() {
    if (!this.props.reforms.length) return

    if (!this.state.cards) {
      this.setState({
        cards: new window.Isotope(document.querySelector('#cards'), {
          itemSelector: '.card',
          layoutMode: 'fitRows',
          sortBy: this.state.sort,

          getSortData: {
            name: '[data-name]',
            status: '[data-status]',
            difficulty: '[data-difficulty]'
          }
        })
      })
    } else {
      this.state.cards.reloadItems()
      this.state.cards.layout()
    }
  }

  componentWillUnmount() {
    delete require.cache[require.resolve('../../assets/scss/scorecard.scss')]

    window.scrollTo(0, 0)
  }

  close = () => this.setState({ open: false })
  show = (open, d) => () => this.setState({ open: true, active: d })

  handlePrint = () => {
    fetch(
      'https://cdn.statically.io/gh/CSIS-iLab/india-reforms/9f12098/src/assets/scss/base/_print.scss'
    )
      .then(promise => promise.text())
      .then(text => {
        let printStyle = Object.assign(document.createElement('style'), {
          id: 'print-styles',
        })
        document.head.appendChild(printStyle)

        let printStyleSheet = printStyle.sheet

        const regEx = new RegExp(/\n\n/)

        const rules = text.split(regEx).filter((rule) => rule.trim())

        rules.forEach((rule) =>
          printStyleSheet.insertRule(rule.replace(/([\r\n]+)/g, ''))
        )

        window.scrollTo(0, 0)
        // html2pdf()
        //   .set({
        //     margin: [15, 0, 15, 0],
        //     pagebreak: {
        //       avoid: [
        //         '.header',
        //         '.description.current',
        //         '.meta',
        //         'footer section',
        //         'p',
        //         'li',
        //         'h2'
        //       ]
        //     }
        //   })
        //   .from(document.querySelector('#root'))
        //   .save('csis-india-reforms.pdf')
        //   .then(function() {
        //     window.location.reload()
        //   })

        // const pdfRef = document.querySelector('#root')
        // const input = pdfRef
        // html2canvas(pdfRef).then(() => {
        //   const pdf = new jsPDF('p', 'mm', 'a4', true)
        //   pdf.save('test.pdf')
        // })

        var doc = new jsPDF()

        // Source HTMLElement or a string containing HTML.
        var elementHTML = document.querySelector('#root')

        doc.html(elementHTML, {
          callback: function (doc) {
            // Save the PDF
            doc.save('csis-india-reforms.pdf')
          },
          margin: [15, 0, 15, 0],
          autoPaging: 'text',
          x: 0,
          y: 0,
          width: 190, //target width in the PDF document
          windowWidth: 675, //window width in CSS pixels
        })
          .then(function() {
            window.location.reload()
          })
      })
  }

  handleChange = (e, { value }) => {
    if (!value) {
      this.setState({ value: '' })
      this.state.cards.arrange({ filter: '*' })
      return
    }

    let buttons = Array.from(document.querySelectorAll('#filters button'))

    buttons.slice(1, buttons.length).forEach(b => {
      b.classList.remove('dark')
      b.classList.add('light')
    })

    buttons[0].classList.add('dark')
    buttons[0].classList.remove('light')
    this.state.cards.arrange({ filter: '*' })

    setTimeout(
      () =>
        this.state.cards.arrange({
          filter: card => card.dataset.name === value
        }),
      100
    )

    this.setState({ value })
  }

  render() {
    const { pageContent, page, open, active, sort } = this.state
    const { reforms } = this.props
    // console.log(this.props)

    return (
      <React.Fragment>
        {page === 'homepage' ? (
          <PageHeader pageContent={pageContent} page={page} />
        ) : (
          <PageHeader2019 pageContent={pageContent} page={page} />
        )}
        <main className={page}>
          <section id="controls" className="sticky">
            <div className="wrapper">
              <div className="icon-sort sort">
                <span className="icon-sort__text" />

                <Button.Group basic>
                  {['Status', 'Name', 'Difficulty'].map((sortBy) => (
                    <Button
                      onClick={this.handleSort}
                      data-sort-by={sortBy.toLowerCase()}
                      key={sortBy}
                      className={sortBy.toLowerCase() === sort ? 'dark' : ''}
                    >
                      {sortBy}
                    </Button>
                  ))}
                </Button.Group>
              </div>

              <button
                onClick={this.handlePrint}
                className="icon-download-doc hidden"
                // className={
                //   page === 'homepage'
                //     ? 'icon-download-doc hidden'
                //     : 'icon-download-doc'
                // }
              >
                <span>Download</span>
                <span>All Reform Information</span>
              </button>
            </div>
          </section>
          <Button
            aria-label="back to top"
            className="back-to-top sticky"
            icon="angle double up"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <section id="cards" attached="bottom">
            {reforms && reforms.length
              ? reforms.map((d) => {
                return <ReformCard reform={d} key={d.name} show={this.show} />
              })
              : ''}
          </section>

          <button onClick={this.handlePrint} className="icon-download-doc">
            <span>Download</span>
            <span>All Reform Information</span>
          </button>
          {active ? (
            <Modal open={open} onClose={this.close} closeIcon>
              <h3>{active.name}</h3>
              <ReformDetail active={active} />
            </Modal>
          ) : (
            ''
          )}
        </main>
      </React.Fragment>
    )
  }
}
