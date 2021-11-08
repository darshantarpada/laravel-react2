import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user-info'));
    const logout = () => {
        localStorage.clear();
        history.push('/login');
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Nav className="me-auto nav_bar">
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to="/add">add Product</Link>
                                    <Link to="/update">update product</Link>
                                </>
                                :
                                <>
                                    <Link to="/login">login</Link>
                                    <Link to="/register">register</Link>
                                </>
                        }


                    </Nav>
                </Container>
                {localStorage.getItem('user-info') ?
                    <Nav>

                        <NavDropdown title={user.name}>
                            <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null
                }
            </Navbar>
        </div>
    );
}
export default Header;