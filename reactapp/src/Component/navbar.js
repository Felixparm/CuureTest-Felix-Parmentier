import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../App.css';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id='allnavbar'>
      <Navbar light expand="md">
        <NavbarBrand href="/"><img src='../logoBAK.jpeg' id='imgNav' /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
              <Link to="/Accueil" className='linkNav' >Acceuil</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
             <Link to='/Vente' className='linkNav'>Vente</Link>
             </NavLink>
            </NavItem> 
            <NavItem>
             <NavLink> <Link to='/recherche'className='linkNav'>Recherche</Link></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Profil
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink ><Link to='/Achete' className='linkNav'> Articles achetés</Link></NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink > <Link to='/Vendu' className='linkNav'> Articles Vendus</Link></NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink><Link to='/information' className='linkNav'>  Informations personelles</Link></NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink href='/'> Log Out</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;