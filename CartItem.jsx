import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { toast,Toaster } from "react-hot-toast";
import {remove} from "../redux/Slices/CartSlice"

const CartItem = ({item,index}) => {
  const dispatch=useDispatch()
  const removeItem=()=>{
   dispatch(remove(item.id))
   toast.error("Item removed from Cart !")
  }
  return(
    <div className="w-full ">
      
    <div className="w-full flex flex-row  py-5 ">
      <div className="flex items-center px-5 justify-center w-[1/3] ">
        <img src={item.image} height="100px" width="200px" className="hover:scale-110 transition duration-300"/>
      </div>

      <div className="flex flex-col w-2/3 px-5 py-5 items-center ">
        <p className="font-bold">{item.title}</p>
        <p className="text-[15px]">{item.description}</p>
        <div className="flex justify-between w-[100%]  my-[40px] px-[20px]">
          <p className="text-green-500 font-semibold">{item.price} $</p>
          <div className="text-[30px] cursor-pointer" onClick={removeItem}>
          <FcDeleteDatabase/>
          </div>
        </div>
      </div>
    </div> 

    </div>
  );
};

export default CartItem;
