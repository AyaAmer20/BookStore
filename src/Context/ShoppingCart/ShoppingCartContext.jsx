import { createContext, useContext, useState } from "react";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCart";

const ShoppingCartContext = createContext({});
// Provider
const ShoppingCartContextProvider = ({ children }) => {//prop
  const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
  const openCart =()=>{
    setIsOpen(true);
  }
  const closeCart =()=>{
    setIsOpen(false);
  }
  const  getItemsQuantity =(id)=>{
    return (cartItems.find((item)=> item.id===id)?.Quantity || 0
  );
  };
 const increaseQuantityItem =(id)=>{
  setCartItems((currentItems)=>{
    if(currentItems.find(
      item=> item.id===id
    )==null){
      return[...currentItems,{id,Quantity:1}];

    }
    else{
      return currentItems.map((item)=>{
        if(item.id===id){
          return{...item,Quantity:item.Quantity+1}
        }else{
          return item;
        }
      })
    }
  })
 }
  const decreaseQantityItem =(id)=>{
  setCartItems((currentItems)=>{
    if(currentItems.find(
      item=> item.id===id
    )==null){
      return currentItems.filter((item)=> item.id !==id);

    }
    else{
      return currentItems.map((item)=>{
        if(item.id===id){
          return{...item,quantity:item.Quantity-1}
        }else{
          return item;
        }
      })
    }
  })
 }
 const removeItemFromCart =(id)=>{
  setCartItems((currentItems)=>currentItems.filter((item)=>item.id!==id));

 }
 const cartQuantity=cartItems.reduce((Quantity,item)=>
  item.Quantity+Quantity,0
 )
  return (
    <ShoppingCartContext.Provider value={{ cartItems, setCartItems ,getItemsQuantity,
    increaseQuantityItem,decreaseQantityItem,removeItemFromCart,openCart,closeCart,cartQuantity}}>
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartContextProvider;
// Custom Hook علشان أستخدمه في أي Component
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

