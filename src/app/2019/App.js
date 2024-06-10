import React, { Component } from 'react'
import Footer from './layout/Footer'
import Page from './pages/Page'
import Archive from './pages/Archive'
import { Route } from 'react-router-dom'
import SmoothScroll from 'smooth-scroll'
// import reforms from './reforms.json'
import reforms from './india-reforms.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      reforms: []
    }
  }

  updateCharts = (input, value) => {
    let filteredSheetData, filteredCategories
    switch (input) {
    case 'search':
      filteredSheetData = this.state.reforms.filter(data =>
        JSON.stringify(data)
          .toLowerCase()
          .includes(value.toLowerCase())
      )

      break

    case 'clear':
      filteredSheetData = this.state.reforms
      break
    default:
    }
    this.setState({ filteredSheetData })
  }

  componentDidMount() {
    this.setState(
      {
        reforms: reforms.reforms,
        filteredSheetData: reforms.reforms,
      }
      // () => console.log(this.state)
    )

    new SmoothScroll('a[href*="#"]', {
      header: '.site-header',
      speed: 500
    })
  }

  render() {
    const { reforms } = this.state

    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => (
            <Page
              {...props}
              reforms={reforms}
              page="homepage"
            />
          )}
        />
        <Route
          exact
          path="/2014reforms"
          render={props => <Archive page="archive" />}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
