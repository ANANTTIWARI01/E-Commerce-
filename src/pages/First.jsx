import { useEffect, useState } from "react"
import Product from '../components/Product.jsx'
import instance from '../axiosConfig.js'


function First() {
const [products, setProducts]=useState([])

async function fetchData(){
    const response=await instance(`/products`);
    setProducts(response.data);
}

useEffect(()=>{
    fetchData()
},[])


  return (
    <>
    {products.length>0 ? (
        <div id="products">
            {products.map((product)=>{
                return<Product key={product.id} product={product} />;
            })}
        </div>
    ):(
        <div>Loading ...</div>
    )}
    </>
  )
}

export default First