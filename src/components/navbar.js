import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'
const Barra = () => {
  return (
    <>
    <Navbar bg="dark" expand='lg' variant='dark'>
      <Container fluid>
      <Navbar.Brand href='/src/pages/Inicio.js'>PeliSite</Navbar.Brand>
      <Navbar.Brand href='/src/pages/Inicio.js'>Tendencia</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
        <Navbar.Collapse id='navbarScroll'>
          <Nav
          className='me-auto my-2 my-lg-3'
          style={{maxHeight: '100px'}} navbarScroll
          ></Nav>

          <Form className='d-flex'>
          <FormControl type='search' placeholder='movie Search'className='me-2' aria-label='search' name=''>
          </FormControl>
          <Button variant='secondary' type='submit'>Buscar</Button>
          </Form>



        </Navbar.Collapse>
      
      </Container>
    </Navbar>
    
    </>
  )
}

export default Barra