import instance from "../axiosConfig";
import {useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import CardQuant from "../components/CardQuant";
import { useEcom } from "../context/Ecom";
function SingleProduct() {



  const {id}=useParams(); // to get the dynamic part of the URL. 
  const [product,setProduct]=useState({});
  // const {cart,handleAddToCart} = useContext(ecomcontext);
  const {cart,handleAddToCart} = useEcom();


useEffect(()=>{
  fetchData(id);
},[id]);

async function fetchData(id){
  const response=await instance(`/products/${id}`);
  setProduct(response.data);
}



  return (
    <>
    {Object.keys(product).length > 0 ? (
      <div className="singleProduct">
      <div className="left">
        <img src={product.image} alt="Product Image" />
      </div>
      <div className="right">
        <h2>{product.title}</h2>
        <p className="category">Category:- {product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        {
          cart.find((item)=>item.id===product.id)!==undefined ? (<CardQuant id={product.id} />) : (<div><Link
          className="addToCart"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(product);

          }}
        >
          Add To Cart
        </Link></div>)
        }
      </div>
    </div>
    ):(
      <div>Loading...</div>
    )} 
    </>
  )
}

export default SingleProduct