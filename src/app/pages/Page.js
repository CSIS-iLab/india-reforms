import React from 'react'
import GetData from '../helpers/GetData'
import PageHeader from '../layout/PageHeader'
import ReformCard from '../components/ReformCard'
import ReformDetail from '../components/ReformDetail'
import Isotope from 'isotope-layout'
import { Button } from 'semantic-ui-react'

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
      active: null
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
  }
  componentDidUpdate() {
    if (!this.props.reforms.length) return

    if (!this.state.cards) {
      this.setState({
        cards: new Isotope(document.querySelector('#cards'), {
          itemSelector: '.card',
          layoutMode: 'fitRows',
          sortBy: 'status',
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
    const { pageContent, page, open, active, value } = this.state
    const { reforms, categories } = this.props
    let cardRef = React.createRef()
    let mainRef = React.createRef()

    return (
      <React.Fragment>
        <PageHeader pageContent={pageContent} page={page} />
        <main className={page}>
          <section id="cards" attached="bottom">
            {reforms && reforms.length
              ? reforms.map(d => {
                return <ReformCard reform={d} key={d.name} show={this.show} />
              })
              : ''}
          </section>
          {active ? (
            <ReformDetail active={active} open={open} onClose={this.close} />
          ) : (
            ''
          )}

          <Button
            aria-label="back to top"
            className="back-to-top"
            icon="angle double up"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </main>
      </React.Fragment>
    )
  }
}
