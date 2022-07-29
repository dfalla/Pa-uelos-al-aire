import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'; 


 
const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Container>
                
                <Navbar.Brand as={NavLink} to="/">PAÑUELOS AL AIRE</Navbar.Brand>
               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link as={NavLink} to="/">Dashboard</Nav.Link>
                        <NavDropdown title="Alumnos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/alumnos">Alumnos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/alumnos/crear-alumno">
                                Crear Alumnos
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/comprar">Accesorios</Nav.Link>
                        <Nav.Link as={NavLink} to="/registro-pagos">Asistencia</Nav.Link>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link as={NavLink} to="/cuenta">Cuenta</Nav.Link>  */}
                        <NavDropdown title="Cuenta" id="basic-nav-dropdown">
                            <NavDropdown.Item> 
                                Configuración
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Cerrar sesión
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation