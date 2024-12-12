import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { ecomContext } from "../App";
import { useContext } from "react";


function SingleProduct() {
  const { handleAddToCart } = useContext(ecomContext)

  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    getData(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function getData(id) {
    const response = await axios.get("https://fakestoreapi.com/products/" + id)
    setProduct(response.data)

  }




  return (
    <>

      <div className="singleProduct">
        <div className="left">
          <img src={product.image} alt="Product Image" />
        </div>
        <div className="right">
          <h2 > {product.title}</h2>
          <p className="category">Category:{product.category} </p>
          <p className="description">{product.description} </p>
          <p className="price">{product.price} </p>
          <Link className="addToCart" onClick={(()=>handleAddToCart(product))}>
            Add To Cart
          </Link>

        </div>

      </div>
    </>
  )
}

export default SingleProduct