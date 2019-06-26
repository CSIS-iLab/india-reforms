import React, { Component } from 'react'
import Footer from './layout/Footer'
import Page from './pages/Page'
import Archive from './pages/Archive'
import { Route } from 'react-router-dom'
import SmoothScroll from 'smooth-scroll'
import reforms from './reforms.json'

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

      filteredCategories = [
        ...new Set(
          filteredSheetData
            .map(data => data.sectors)
            .reduce((a, b) => a.concat(b))
        )
      ]

      break

    case 'clear':
      filteredCategories = this.state.categories
      filteredSheetData = this.state.reforms
      break

    case 'category':
      filteredCategories = this.state.filteredCategories

      filteredCategories = filteredCategories.includes(value)
        ? filteredCategories.filter(
          cat => cat.toLowerCase() !== value.toLowerCase()
        )
        : [...filteredCategories, value]

      filteredSheetData = this.state.reforms
      this.state.reforms.map(data => {
        data.hide = data.sectors.some(t => filteredCategories.includes(t))
          ? false
          : true
        return data
      })
      break
    default:
    }
    this.setState({ filteredSheetData, filteredCategories })
  }

  componentDidMount() {
    const categories = [
      ...new Set(
        reforms.map(data => data.sectors).reduce((a, b) => a.concat(b))
      )
    ]
    this.setState(
      {
        reforms,
        categories,
        filteredSheetData: reforms,
        filteredCategories: categories
      }
      // () => console.log(this.state)
    )

    new SmoothScroll('a[href*="#"]', {
      header: '.site-header',
      speed: 500
    })
  }

  render() {
    const { reforms, categories } = this.state

    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => (
            <Page
              {...props}
              reforms={reforms}
              categories={categories}
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
