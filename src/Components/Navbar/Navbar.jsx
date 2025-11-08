import React from 'react'
import { Container, Navbar as NavbarBS, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import img1 from '../../image/cart_icon.ico'
import style from '../Navbar/Navbar.module.css'
import { useShoppingCart } from '../../Context/ShoppingCart/ShoppingCartContext'

const Navbar = () => {
  const {openCart,cartQuantity}=useShoppingCart();
  return (
    <NavbarBS sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/Store">Store</Nav.Link>
          <Nav.Link as={NavLink} to='/Add'> Add</Nav.Link>
          <Nav.Link as={NavLink} to="/About">About</Nav.Link>
        </Nav>
        <Button type="button"  onClick={openCart} variant='Outline-primary class="rounded-circle"' 
        className={style.btn_img} >
          <img src={img1} alt='cart_image'/>
          <div className="badge text-bg-primary rounded-pill d-flex justify-content-center
          inlign-items-center" style={{position:'absolute', color:'white', height:"1.5rem",
            bottom:0,
            right:0,
            transform:"translate(25%,25%)"    
          }}>
            {cartQuantity}
          </div>
        </Button>

      </Container>
    </NavbarBS>
  )
}

export default Navbar
