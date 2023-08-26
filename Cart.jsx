import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";




const Cart = () => {
  function checkoutHandler(){
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=9917870933@paytm" />
  }
    
const {cart}=useSelector((state)=>state);
const [totalAmount,settotalAmount]=useState(0);
useEffect(()=>{
settotalAmount(Math.floor(cart.reduce((acc,curr)=> acc+curr.price,0)));
},[cart])
  return (
    <div>
  {
    cart.length > 0 ? (
      <div className="flex flex-row">
        <div className="w-2/3 border">
          {cart.map((item, index) => ( 
            <CartItem item={item} key={index} />
          ))}
        </div>

        <div className="flex  flex-col items-center w-1/3 border border-green-600">
            <div className="">
             <div className="font-bold text-[25px]">Your Cart</div>
             <div>Summary</div>
             <p>
              <span>Total Items: {cart.length}</span>
             </p>
            </div>
        
            <div>
              <p className="text-[20px] text-gray-800">Total Amount: {totalAmount}</p>
             <button onClick={checkoutHandler} className="fixed bottom-0  bg-green-500 px-[80px] mx-[-17px]  py-[10px] mb-[10px] rounded-[15px]">
               Checkout Now!
             </button>
            </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col h-screen items-center  justify-center">
        <h1>No Items Found...</h1>
        <NavLink to="/">
          <div>
            <button className="bg-green-400 px-[100px] py-[15px] rounded-[20px]">Shop Now</button>
          </div>
        </NavLink>
      </div>
    )
  }
</div>

  )
};

export default Cart;
