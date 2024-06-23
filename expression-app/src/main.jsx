import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import JokeFetcher from './JokeFetcher.jsx'
import './index.css'
import ProfileFetcher from './ProfileFetcher.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JokeFetcher />
    <ProfileFetcher />
  </React.StrictMode>,
)
