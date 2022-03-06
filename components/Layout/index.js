
import React, { Fragment } from 'react'
import MainNav from '../MainNav'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <Fragment>
      <MainNav />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
