import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import Storeitems from '../../Data/Storeitems'
import formatCurrency from '../Formatcurrency/FormatCurrency';
import { useShoppingCart } from '../../Context/ShoppingCart/ShoppingCartContext';
const CartItems = ({id, Quantity}) => {
    const {removeItemFromCart}=useShoppingCart();
    const item=Storeitems.find((i)=>i.id===id);
    if(item==null) return null;
  return (
    <>
    <Stack direction='herizontal' gap={2} >
      <div className="d-flex flex-row gap-3 mb-3" >
        <img src={item.imgUrl} alt='Cart-img'  variant='top' style={{width:'50%' ,height:"100px" ,
        objectFit:"cover" }}/>
        <div className='mt-aut'>
          <div>
            {item.name}{''}
            {Quantity>1 && <span className='text-muted' style={{fontSize:'0.65rem'}}>X{Quantity}</span>}

          </div>
          <div className='text-muted ' style={{fontSize:'0.75rem'}}>
            {formatCurrency(item.price)}
          </div>
          <div >
             {formatCurrency(item.price*Quantity)}
          </div>
          <Button variant='outline-danger' size='sm' onClick={()=>removeItemFromCart(id)}>Delet</Button>
        </div>
        </div>


    </Stack>
    </>
  )
}

export default CartItems