import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useShoppingCart } from '../../Context/ShoppingCart/ShoppingCartContext';
import CartItem from '../CartItems/CartItems';
import formatCurrency from '../Formatcurrency/FormatCurrency';
import Storeitems from '../../Data/Storeitems';

const ShoppingCart = ({ isOpen }) => {
  const { cartItems, closeCart } = useShoppingCart();

  //  احسبي المجموع الكلي
  const total = cartItems.reduce((total, cartItem) => {
    const item = Storeitems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.Quantity;
  }, 0);

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty 🛒</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} id={item.id} Quantity={item.Quantity} />
            ))}
            <div className="mt-3 d-flex justify-content-between fw-bold fs-5">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
