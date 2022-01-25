import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css';
import CartWidget from './CartWidget';


function NavBar () {
    return (
        <Navbar>
        <Container fluid>
          <Nav>
            <NavLink className="navLink" to="/"><img
                                                       alt="logo"
                                                       src={'https://github.com/TobiasPrieto/OSIRISJS/blob/master/images/pngosirisrecortadoredondo.png?raw=true'}
                                                       width="30"
                                                       height="30"
                                                       className="d-inline-block align-top logo-nav"
                                                   />
                                                   OSIRIS SHOES
            </NavLink>
            <NavLink to="/categoria/nike" className="navLink" activeClassName="active">Nike</NavLink>
            <NavLink to="/categoria/adidas" className="navLink" activeClassName="active">Adidas</NavLink>
            <NavLink to="/categoria/converse" className="navLink" activeClassName="active">Converse</NavLink>
                          
            </Nav>
             <NavLink to="/cart" className="navLink"><CartWidget/></NavLink>
           
       
        </Container>
      </Navbar>
    )
}
export default NavBar;