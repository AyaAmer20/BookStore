import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatCurrency from '../Formatcurrency/FormatCurrency'
import { useShoppingCart } from '../../Context/ShoppingCart/ShoppingCartContext'
const Storeitem = ({id,price,name,imgUrl}) => {//prop 
  const {getItemsQuantity,increaseQuantityItem,decreaseQantityItem,removeItemFromCart}=useShoppingCart();
  //card.img خاص ب bootstrap 
  const   Quantity=getItemsQuantity(id);
  return (
    <Card className='h-100' >
      <Card.Img src={imgUrl} variant='top' style={{width:'100%' ,height:"500px" ,
        objectFit:"cover" }}/>
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-baseline'>
            <span className='fs-2'>{name}</span>
            <span className='text-muted ms-2'>{formatCurrency(price)}</span>
          </Card.Title>
          <div className='mt-auto'>
            {Quantity===0 ? <Button className='w-100' onClick={()=>increaseQuantityItem(id)}>Add to Cart</Button>: 
            <div className='d-flex , align-items-center flex-column ' style={{gap:'0.5rem' ,

            }} >
              <div className='d-flex ,align-items-center ,justify-content-center' 
              style={{gap:'0.5rem'}}>
                <Button onClick={()=>decreaseQantityItem(id)}>-</Button>
                <span className='fs-3'>{Quantity} in Cart </span>
                <Button onClick={()=>increaseQuantityItem(id)}>+</Button>
              </div>
              <Button variant='danger , size="sm"' onClick={()=>removeItemFromCart(id)}>Remove</Button>
              </div>}
          </div>

        </Card.Body>
    </Card>
  
   
  
  )
}

export default Storeitem;
