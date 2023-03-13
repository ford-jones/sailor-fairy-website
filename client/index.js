import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH_DOMAIN}
          clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
          redirectUri={`${window.location.origin}/Admin`}
          audience={process.env.REACT_APP_AUTH_AUDIENCE}
        >
            <Router>
              <App />
            </Router>
        </Auth0Provider>,
    document.getElementById('app')
  )
})