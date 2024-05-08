import React from 'react'
// import htmlContent from '../archive/archive.html'
import htmlContent from '../archive/archive.html'
import Nav from '../layout/Nav'

class Archive extends React.Component {
  componentDidMount() {
    require('../../../assets/scss/archive.scss')

    // init Isotope
    var container = new window.Isotope(
      document.querySelector('.policycontainer'),
      {
        itemSelector: '.policy',
        layoutMode: 'fitRows',
        sortBy: 'status',
        getSortData: {
          name: '.name',
          status: '.status',
          difficulty: '.difficulty'
        }
      }
    )

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
    window.scrollTo({
      top: 0
    })
  }

  render() {
    const { page } = this.props
    return (
      <React.Fragment>
        <Nav page={page} />
        <div
          className="archive"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </React.Fragment>
    )
  }
}

export default Archive
