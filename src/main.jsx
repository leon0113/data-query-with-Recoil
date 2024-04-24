import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App.jsx'
import './index.css'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
