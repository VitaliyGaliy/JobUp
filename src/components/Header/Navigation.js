import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import classes from './Header.scss'

export const Navigation = () => (
  <Navbar className={classes['navbar-nav']}>
    <Navbar.Header>
      <Navbar.Brand>
        <IndexLink to='/'>
          Daxx Online
        </IndexLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to='/insta/gallery'>
          <NavItem eventKey={2.1}>
            Instamood
          </NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to='/help'>
          <NavItem eventKey={3} href='/help'>Help</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
