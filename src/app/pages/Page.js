import React from 'react'
import GetData from '../helpers/GetData'
import PageHeader from '../layout/PageHeader'
import ReformCard from '../components/ReformCard'
import ReformDetail from '../components/ReformDetail'
import html2pdf from 'html2pdf.js'
import Stickyfill from 'stickyfilljs'
import { Button, Modal } from 'semantic-ui-react'

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

  toggle = target => {
    target.classList.contains('dark')
      ? target.classList.remove('dark')
      : target.classList.add('dark')

    target.classList.contains('light')
      ? target.classList.remove('light')
      : target.classList.add('light')
  }

  resetControl = (target, all) => {
    let buttons = Array.from(target.parentNode.querySelectorAll('button'))

    buttons = all ? buttons : buttons.slice(0, 1)

    buttons.forEach(b => {
      b.classList.remove('dark')
      b.classList.add('light')
    })
  }

  handleReset = e => {
    this.state.cards.arrange({ filter: '*' })
    this.resetControl(e.target, true)
    this.toggle(e.target)
    this.setState({ value: '' })
  }

  handleSort = e => {
    this.state.cards.arrange({
      sortBy: e.target.dataset.sortBy
    })

    this.setState({ sort: 'status' })
    this.resetControl(e.target, true)
    this.toggle(e.target)
  }

  handleFilter = e => {
    const value = e.target.dataset.sectors
    value === '*'
      ? this.state.cards.arrange({ filter: value })
      : this.state.cards.arrange({
        filter: card => card.dataset.sectors.indexOf(value) > -1
      })
    this.resetControl(e.target, true)
    this.toggle(e.target)
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

    window.scrollTo({
      top: 0
    })
  }

  close = () => this.setState({ open: false })
  show = (open, d) => () => this.setState({ open: true, active: d })

  handlePrint = () => {
    addPrintStyles()
    window.scrollTo({
      top: 0
    })
    html2pdf()
      .set({
        pagebreak: { avoid: ['span', '.description', '.meta', 'li', 'h2'] }
      })
      .from(document.querySelector('#root'))
      .save('csis-india-reforms.pdf')
      .then(function() {
        window.location.reload()
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

    return (
      <React.Fragment>
        <PageHeader pageContent={pageContent} page={page} />
        <main className={page}>
          <section id="controls" className="sticky">
            <div className="wrapper">
              <div className="icon-sort sort">
                <span>SORT</span>

                <Button.Group basic>
                  {['Status', 'Name', 'Difficulty'].map(sortBy => (
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
              <button onClick={this.handlePrint} className="icon-download-doc">
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
              ? reforms.map(d => {
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

function addPrintStyles() {
  let printStyle = Object.assign(document.createElement('style'), {
    id: 'print-styles'
  })
  document.head.appendChild(printStyle)
  let printStyleSheet = printStyle.sheet

  const rules = [
    '*, *::before, *::after { color: #000 !important; text-shadow: none !important; background: transparent !important; background-image: none !important; box-shadow: none !important; filter: none !important; }',
    'a:link, a:visited { color: #000 !important; }',
    'html { font-size: 12px; }',
    '#root { max-width: 170mm; margin: 25mm auto; }',
    'h1 { margin: 2rem auto !important; padding: 0 !important; }',
    'h2, h3 { break-after: avoid; }',
    'nav, header a, #controls, .intro__video, .share, .credit, button, .btn, svg, img { display: none !important; }',
    'h1, section, .ui.card, footer { width: 100% !important; max-width: 100% !important; }',
    ' #cards { display: block !important; height: unset !important; }',
    '#cards .ui.ribbon.label { left: calc(-2rem - 2em) !important; color: #000 !important; background-color: #fff !important; border: 1px solid #ccc !important; }',
    '#cards .ui.ribbon.label::after { border-right-color: #ccc !important; }',
    '.ui.card { position: static !important; height: unset !important; margin-right: 0 !important; margin-left: 0 !important; border: 0 !important; }',
    '.ui.card .content > * { flex-basis: 100% !important; }',
    '.ui.card .content > *.description.progress { display: block !important; }',
    '.ui.card .content > *.description.current { display: none !important; }',
    '.ui.card .content:nth-child(2) { padding: 0 !important; }',
    '.ui.card .content:nth-child(3) { margin-bottom: 0 !important; }',
    'footer > section { padding: 1rem 0 0 !important; }',
    'footer .page-footer, footer .site-footer__content { flex-wrap: wrap; }',
    'footer .page-footer__methodology, footer .page-footer__feedback { flex-basis: 100%; padding: 0; }'
  ]

  rules.forEach(rule => printStyleSheet.insertRule(rule))
}
