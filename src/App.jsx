import React from 'react'
import { PrimaryLayout } from './component/common/layouts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/pages/private/About/About'
import Projects from './component/pages/private/Projects/Projects'
import Contact from './component/pages/private/Contact/Contact'
import Header from './component/common/ui/Header/Header'
// import Routes from './routes/Routes'

function App() {
  return (<>
  <PrimaryLayout/>
  {/* <Header/> */}
  </>
    
  )
}

export default App
