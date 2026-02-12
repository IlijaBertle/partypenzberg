import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx' // Importiere das Layout
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <App /> {/* Hier können auch deine anderen Seiten/Routen stehen */}
    </Layout>
  </React.StrictMode>,
)