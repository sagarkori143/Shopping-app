import Navbar from "./components/Navbar"
import {Routes} from "react-router-dom"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Toaster } from "react-hot-toast";

const App = () => {


  return(
    <div>
    <Toaster/>
    <div className="bg-slate-900 text-white">
      <Navbar/>
     </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
     

    </div>
  );
};

export default App;
