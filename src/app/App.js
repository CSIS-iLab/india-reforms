import React, { Component } from 'react'
import Footer from './layout/Footer'
import Archive2019 from './2019/App'
import Page from './pages/Page'
import Archive from './pages/Archive'
import { Route } from 'react-router-dom'
import SmoothScroll from 'smooth-scroll'
// import reforms from './reforms.json'
import reforms from './india-reforms.json'
import reforms2019 from './india-reforms-2019.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      reforms: [],
      reforms2019: []
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
        reforms2019: reforms2019.reforms,
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
    const { reforms2019 } = this.state

    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => (
            <Page {...props} reforms={reforms} page="homepage" />
          )}
        />
        <Route
          exact
          path="/2019reforms"
          render={(props) => (
            <Page {...props} reforms={reforms2019} page="homepage2019" />
          )}
          // render={(props) => <Archive2019 page="homepage" />}
        />
        <Route
          exact
          path="/2014reforms"
          render={(props) => <Archive page="archive" />}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
