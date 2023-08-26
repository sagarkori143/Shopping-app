import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { toast } from "react-hot-toast";
import {remove,add} from "../redux/Slices/CartSlice"
import { motion } from "framer-motion";


const Product = ({post}) => {
    const {cart}=useSelector((state)=>state)
    const dispatch=useDispatch();
    

    const addItem=()=>{
      
      dispatch(add(post));
      toast.success("Item added to Cart !")
    }

    const removeItem=()=>{
      dispatch(remove(post.id));
      toast.error("Item removed from Cart !")
    }

  return <motion.div className="relative flex border flex-col w-[200px] m-10 px-3 h-[400px] bg-transparent rounded-[10px] hover:scale-105 transition duration-300 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] "
  animate={{y:1,opacity:1}}
  initial={{y:50,opacity:0.1}}
  transition={{duration:0.3}}
  >
   
   <div>
    <p className="text-[15px] font-semibold ">{post.title.substring(0,17)+".."}</p>
   </div>
   
   <div className="mt-4 mb-1 flex items-center justify-center h-[200px]">
    <img src={post.image} height="100px" width="130px" />
   </div>
   

   <div className="mt-[10px]">
    <p className="text-[13px]">{post.description.substring(0,100)}</p>
   </div>
   
   <div className="absolute bottom-1.5 leftt-1.5">
    <p className="text-green-500">{post.price}$</p>
   </div>
   <div className="absolute bottom-1.5 right-1.5">{
    
     
    cart.some((p)=>p.id===post.id)?
    (<button onClick={removeItem}
      className="bg-red-400 text-[14px] border rounded-[20px] 
      px-[6px] py-[4px]  "
    >Remove Item</button>):(<button onClick={addItem}
      className="bg-green-400 text-[14px] border rounded-[20px] 
     px-[6px] py-[4px]  "
    >Add to Cart</button>)
     
   }
   </div>

  </motion.div>;
};

export default Product;
