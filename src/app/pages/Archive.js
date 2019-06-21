import React from 'react'
import MarkdownToSections from '../helpers/MarkdownToSections'
import PageContent from '../helpers/PageContent'
import GetData from '../helpers/GetData'
import CloseMenu from '../helpers/CloseMenu'
import ValueToJSX from '../helpers/ValueToJSX'
import htmlContent from '../archive/archive.html'
import Isotope from 'isotope-layout'

class Archive extends React.Component {
  componentDidMount() {
    require('../../assets/scss/archive.scss')

    document.querySelector(
      '.copyright-year'
    ).innerText = new Date().getFullYear()

    // init Isotope
    var container = new Isotope(document.querySelector('.policycontainer'), {
      itemSelector: '.policy',
      layoutMode: 'fitRows',
      sortBy: 'status',
      getSortData: {
        name: '.name',
        status: '.status',
        difficulty: '.difficulty'
      }
    })

    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function(e) {
        var number = e.target.querySelector('.number').innerText
        return parseInt(number, 10) > 50
      },
      // show if name ends with -ium
      ium: function(e) {
        var name = e.target.querySelector('.name').innerText
        return name.match(/ium$/)
      }
    }

    // bind filter button click
    document.querySelector('#filters').addEventListener('click', function(e) {
      if (e.target.tagName !== 'BUTTON') return

      var filterValue = e.target.dataset.filter
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue
      container.arrange({
        filter: filterValue
      })
    })
    // bind sort button click
    document.querySelector('#sorts').addEventListener('click', function(e) {
      if (e.target.tagName !== 'BUTTON') return

      var sortByValue = e.target.dataset.sortBy
      container.arrange({
        sortBy: sortByValue
      })
    })
    // change is-checked class on buttons
    document.querySelectorAll('.button-group').forEach(function(buttonGroup) {
      buttonGroup.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') return

        buttonGroup.querySelector('.is-checked').classList.remove('is-checked')
        e.target.classList.add('is-checked')
      })
    })
  }

  componentWillUnmount() {
    const triggers = Array.from(
      document.querySelectorAll('.menu-trigger.is-active')
    )
    triggers.forEach(trigger => {
      const target = document.querySelector(trigger.dataset.target)
      CloseMenu(trigger, target)
    })

    window.scrollTo({
      top: 0
    })
  }

  render() {
    return (
      <div
        className="archive"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )
  }
}

export default Archive
