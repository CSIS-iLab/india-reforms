import './web.config'
// import 'react-app-polyfill/ie9'
// import '@babel/polyfill'
import 'react-app-polyfill/stable'

import 'semantic-ui-css/components/button.min.css'
import 'semantic-ui-css/components/card.min.css'
import 'semantic-ui-css/components/dimmer.min.css'
import 'semantic-ui-css/components/icon.min.css'
import 'semantic-ui-css/components/label.min.css'
import 'semantic-ui-css/components/modal.min.css'

import './assets/scss/main.scss'

import * as serviceWorker from './serviceWorker'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app/App'
import { render } from 'react-snapshot'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
