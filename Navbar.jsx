import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "./logo.png"
const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return(
    <div className=" ">
      <nav className="fles justify-between items-center h-20 max-w-6xl mx-auto">
    <div className="flex flex-row justify-between">
    <NavLink to="/"><img src={logo} width="130px"/></NavLink>
    <div className="flex flex-row my-auto mx-7 ">
      <NavLink to="/"><p className="text-[22px] text-slate-100 relative top-1 right-10">Home</p></NavLink>
      <NavLink to="/Cart"><div className="mx-3 text-[22px] relative top-2"><FaShoppingCart/>
      
      {cart.length>0?(<span className="absolute bottom-4 right-0 text-[12px] bg-green-400 rounded-full w-[15px] h-[15px] text-center mb-1 pb-4 animate-bounce text-black font-bold">{cart.length}</span>):("")
}</div></NavLink>
    </div>
    </div>
    </nav>
    </div>
  );
};

export default Navbar;
