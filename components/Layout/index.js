import React, { Fragment } from 'react'
import MainNav from '../MainNav'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <Fragment>
      <MainNav />
      <Header
        title="Test"
      />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
