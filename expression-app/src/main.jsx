import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx'
import JokeFetcher from './JokeFetcher.jsx'
import './index.css'
import ProfileFetcher from './ProfileFetcher.jsx'
import Profile from './Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JokeFetcher />
    <Profile />
  </React.StrictMode>,
)
