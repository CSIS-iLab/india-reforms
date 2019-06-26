import React from 'react'
import MarkdownToSections from '../helpers/MarkdownToSections'
import GetData from '../helpers/GetData'
import ValueToJSX from '../helpers/ValueToJSX'
import PageHeader from '../layout/PageHeader'
import Isotope from 'isotope-layout'
import {
  Dropdown,
  Search,
  Button,
  Modal,
  Header,
  Label,
  Icon,
  Card,
  Rail,
  Ref,
  Segment,
  Sticky
} from 'semantic-ui-react'
import { Affix, Timeline, Icon as Ant } from 'antd'
const colorKey = {
  // not_started:"#9f4726",
  // incomplete:"#60666a"
  // completed:"#3f4a96"
  not_started: 'red',
  incomplete: 'grey',
  completed: 'blue'
}
class Page extends React.Component {
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

    const Controls = () => {
      return (
        <section id="controls">
          <label htmlFor="reform-search" className="visually-hidden">
            Search
          </label>
          {reforms.length ? (
            <Dropdown
              id="reform-search"
              clearable
              fluid
              search
              selection
              options={reforms.map(r => {
                return {
                  key: r.name,
                  value: r.name.toString(),
                  text: r.name
                }
              })}
              placeholder="Search"
              onChange={this.handleChange}
              value={value}
            />
          ) : (
            ''
          )}
          <div id="filters" className="button-group">
            <strong>Filter &nbsp;&nbsp;&nbsp; </strong>
            <button
              onClick={this.handleReset}
              className="btn dark"
              data-sectors="*"
            >
              All
            </button>
            {categories.map(c => (
              <button
                key={c}
                className="btn light"
                onClick={this.handleFilter}
                data-sectors={c}
              >
                {c}
              </button>
            ))}
          </div>
          <div id="sorts" className="button-group">
            <strong>Sort &nbsp;&nbsp;&nbsp; </strong>

            <Button.Group>
              <Button
                className="btn dark"
                onClick={this.handleSort}
                data-sort-by="status"
              >
                Status
              </Button>
              <Button.Or />
              <Button
                className="btn light"
                onClick={this.handleSort}
                data-sort-by="name"
              >
                Name
              </Button>
              <Button.Or />
              <Button
                className="btn light"
                onClick={this.handleSort}
                data-sort-by="difficulty"
              >
                Difficulty
              </Button>
            </Button.Group>
          </div>
        </section>
      )
    }
    return (
      <React.Fragment>
        <PageHeader pageContent={pageContent} page={page} />
        <main innerref={this.mainRef} className={page}>
          <Segment
            innerref={this.cardRef}
            style={
              window.innerWidth > 1080
                ? { boxShadow: 'none', border: 0, marginLeft: '300px' }
                : { boxShadow: 'none', border: 0 }
            }
          >
            {window.innerWidth > 1080 ? (
              <Rail
                style={window.innerWidth > 1080 ? { width: '250px' } : ''}
                dividing
                position="left"
              >
                <div
                  style={{
                    position: 'sticky',
                    top: 12
                  }}
                >
                  {Controls()}
                </div>
              </Rail>
            ) : (
              <div
                style={{
                  position: 'sticky',
                  top: 0,
                  zIndex: 1,
                  backgroundColor: 'white',
                  margin: '0 -20px',
                  padding: '1rem',
                  boxShadow: '0 46px 53px -34px rgba(0, 0, 0, 0.18)'
                }}
              >
                {Controls()}
              </div>
            )}

            <section id="cards" attached="bottom">
              {reforms && reforms.length
                ? reforms.map(d => {
                  return (
                    <Card
                      raised
                      key={d.name}
                      data-key={d.name}
                      data-sectors={d.sectors}
                      data-name={d.name}
                      data-status={d.status}
                      data-difficulty={d.difficulty}
                    >
                      <Card.Content>
                        <Card.Header>
                          <Label as="span" color={colorKey[d.status]} ribbon>
                            {d.steps[d.status].status}
                          </Label>
                          <h3>{d.name}</h3>
                        </Card.Header>
                        <Card.Meta>
                          <strong>{'difficulty'.toUpperCase()}:</strong>{' '}
                          {d.difficulty.toUpperCase()}
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content>
                        <Card.Description>
                          <p>{d.steps[d.status].description}</p>
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui two buttons">
                          <Button
                            basic
                            color="green"
                            onClick={this.show(true, d)}
                          >
                            <Icon name="hand point right" /> STEPS
                          </Button>
                        </div>
                      </Card.Content>
                    </Card>
                  )
                })
                : ''}
            </section>
          </Segment>
          {active ? (
            <Modal open={open} onClose={this.close} closeIcon>
              <Header icon="legal" content={active.name} />
              <Modal.Content>
                <Timeline>
                  {Object.keys(active.steps).map((step, index) => {
                    const number = Object.keys(active.steps).indexOf(
                      active.status
                    )

                    const checked = index <= number

                    return (
                      <Timeline.Item
                        key={step}
                        dot={
                          checked ? (
                            <Ant
                              type="check-circle-o"
                              style={{ fontSize: '18px' }}
                            />
                          ) : (
                            ''
                          )
                        }
                        color={checked ? 'green' : 'grey'}
                        style={{
                          fontSize: window.innerWidth < 768 ? '14px' : '18px'
                        }}
                      >
                        <h5
                          style={{ color: index === number ? 'black' : 'grey' }}
                        >
                          {active.steps[step].status}
                        </h5>
                        {ValueToJSX(active.steps[step].description)}
                        {checked && index !== 0 ? (
                          <p className="source">
                            <a href={active.steps[step].link}>
                              Source <Icon name="external alternate" />
                            </a>
                          </p>
                        ) : (
                          ''
                        )}
                      </Timeline.Item>
                    )
                  })}
                </Timeline>
              </Modal.Content>
              <Modal.Actions>
                <Button basic color="green" onClick={this.close}>
                  <Icon name="remove" /> CLOSE
                </Button>
              </Modal.Actions>
            </Modal>
          ) : (
            ''
          )}

          <Button
            aria-label="back to top"
            circular
            color="green"
            icon="angle double up"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              textAlign: 'right',
              position: 'fixed',
              bottom: '12px',
              right: '12px',
              zIndex: 2
            }}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default Page
