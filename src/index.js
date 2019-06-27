import './web.config'
import 'react-app-polyfill/ie9'
import '@babel/polyfill'

import 'semantic-ui-css/components/button.min.css'
import 'semantic-ui-css/components/card.min.css'
import 'semantic-ui-css/components/dimmer.min.css'
import 'semantic-ui-css/components/icon.min.css'
import 'semantic-ui-css/components/label.min.css'
import 'semantic-ui-css/components/modal.min.css'

import './assets/scss/main.scss'

import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app/App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.body
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
