// import axios from "axios"
import instance from '../axiosConfig'
import { useEffect, useState } from "react";
import Product from "../components/Product"

function First() {
  const [products, setProducts] = useState([])
  async function getData() {
    const response = await instance.get("/products")
    // console.log(response);
    setProducts(response.data)
  }

  useEffect(() => {
    getData()
  })
  return (

    <>
      {products.length > 0 ? (
        <div id="Items">
          {products.map((product) => {
            return <Product key={product.id} product={product} />
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>

  )
}

export default First