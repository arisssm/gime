import logo from '../../assets/logo.png'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
const NavbarComponent = () => {
    return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
            <img alt="logo" src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/news">News</Nav.Link>
                    <Button>Login</Button>
                </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarComponent