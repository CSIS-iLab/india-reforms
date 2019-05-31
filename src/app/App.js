import React, { Component } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Page from './pages/Page'
import SiteMap from './SiteMap'
import { Route } from 'react-router-dom'
import SmoothScroll from 'smooth-scroll'
import sheetData from './reforms.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      siteStructure: SiteMap,
      categories: [],
      sheetData: []
    }
  }

  updateCharts = (input, value) => {
    let filteredSheetData, filteredCategories

    switch (input) {
    case 'search':
      filteredSheetData = this.state.sheetData.filter(data =>
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
      filteredSheetData = this.state.sheetData
      break

    case 'category':
      filteredCategories = this.state.filteredCategories

      filteredCategories = filteredCategories.includes(value)
        ? filteredCategories.filter(
          cat => cat.toLowerCase() !== value.toLowerCase()
        )
        : [...filteredCategories, value]

      filteredSheetData = this.state.sheetData
      this.state.sheetData.map(data => {
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
        sheetData.map(data => data.sectors).reduce((a, b) => a.concat(b))
      )
    ]
    this.setState(
      {
        sheetData,
        categories,
        filteredSheetData: sheetData,
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
    const { siteStructure, sheetData, categories } = this.state

    return (
      <div className="wrapper">
        <Header siteStructure={siteStructure} />
        <Route
          exact
          path="/"
          render={props => (
            <Page
              {...props}
              sheetData={sheetData}
              categories={categories}
              siteStructure={siteStructure}
              page="homepage"
            />
          )}
        />
        <Footer siteStructure={siteStructure} />
        <div className="content-overlay" />
      </div>
    )
  }
}

export default App
