import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../layout.css';


const Header = () => {
    return (

        <div>
            <Navbar className='bg-header' collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <br />
                    <Navbar.Collapse id="responsive-navbar-nav" className='mt-2 justify-content-end'>
                        <Nav className='text-header '>
                            <Nav.Link className='text-green link-header' href="#deets">Inicio</Nav.Link>
                            <Nav.Link className='text-green link-header' href="#deets">Portafolio</Nav.Link>
                            <Nav.Link className='text-green link-header' eventKey={2} href="#memes">
                                Contacto
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;