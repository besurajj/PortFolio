import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrimaryLayout } from '../component/common/layouts'
import About from '../component/pages/private/About/About'
import Projects from '../component/pages/private/Projects/Projects'

const routes = () => {
  return (
<Routes>
  {/* Parent Route */}
  <Route path="/" element={<PrimaryLayout />}>
    {/* Child Routes (Remove leading `/` from path) */}
    <Route path="about" element={<About />} />
    <Route path="projects" element={<Projects />} />
  </Route>
</Routes>

  )
}

export default routes