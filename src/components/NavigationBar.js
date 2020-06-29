import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'; //Recall this is not performant
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }

  .navbar-toggler #basic-navbar-nav {
    color: green;
  }
`;

 export const NavigationBar = () => (
   <Styles>
     <Navbar expand='lg'>
       <Navbar.Brand href="/dashboard">Code Life</Navbar.Brand>
       <Navbar.Toggle aria-controls='basic-navbar-nav' />
       <Navbar.Collapse id='basic-navbar-nav'>
         <Nav className='ml-auto' >
           <Nav.Item><Nav.Link href='/dashboard'>Home</Nav.Link></Nav.Item>
           <Nav.Item><Nav.Link href='/contact'>Contact</Nav.Link></Nav.Item>
           <Nav.Item><Nav.Link href='/'>Login</Nav.Link></Nav.Item>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
   </Styles>
 )