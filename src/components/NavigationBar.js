import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="#">
        S&amp;T
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#event">Event</Nav.Link>
          <Nav.Link href="#rsvp">RSVP</Nav.Link>
          <Nav.Link href="#instagram">Tag Us</Nav.Link>
          <Nav.Link href="#story">Our Story</Nav.Link>
        </Nav>
        <Nav>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;