import React, { Fragment, useState } from 'react'
import Link from 'next/link';
import { APP_NAME } from '../../config';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md" >
        <Link href="/">
          <NavLink className="font-weight-bold" style={{color: 'grey'}}>{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{alignItems: 'center'}} className="ml-auto" navbar>
            <Fragment>
              <NavItem>
                <Link href="/">
                  <NavLink style={{ cursor: 'pointer' }}>HOME</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/classes">
                  <NavLink style={{ cursor: 'pointer' }}>CLASSES</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/timetable">
                  <NavLink style={{ cursor: 'pointer' }}>TIMETABLE</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about">
                  <NavLink style={{ cursor: 'pointer' }}>ABOUT</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact">
                  <NavLink style={{ cursor: 'pointer' }}>CONTACT</NavLink>
                </Link>
              </NavItem>
            </Fragment>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MainNav
