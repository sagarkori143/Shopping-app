import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product"
import {Toaster} from "react-hot-toast"
import error from "../components/error2.jpg"
import { motion } from "framer-motion";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [Loading,setLoading]= useState(false); 
  const [posts,setposts]=useState([]);

  async function fetchData(){
    try{
      setLoading(true);
      const res= await fetch(API_URL);
      const data = await res.json();
      setposts(data);
      setLoading(false);
    }
    catch(error){
    setLoading(false);
    console.log("Data nahi mila yaar!");
    setposts([]);
     
    }


  }
useEffect(()=>{
  fetchData();
},[])

return(
  <motion.div className="  w-screen grid place-items-center bg-white-200"
 
  >
    
    {
      Loading ? (<Spinner/>):
        posts.length>0?(
          <div className="border-4 border-slate-200 rounded-[5px] w-[70%]  place-items-center grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 mx-auto ">{
            posts.map((post)=>(
              
             <Product key={post.id} post={post}/> 
            ))
            }</div>
        ):
        <div className="h-screen">
        <img height="350px" width="1500px" src={error}/>
        </div>
    
    }
    
  </motion.div>
)
};

export default Home;
