import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function ProductDetails() {
  const [product, setProduct] = useState([])
  let {pro_id}=useParams();
  useEffect(()=>{
    fetch( `https://fakestoreapi.com/products/${pro_id}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))


  },[])

  return (
    <>
    <h1 className='text-center'>Product Details</h1>
    <div className="container">        
        <div className="container">
            <div className="row">
            <div className="col-3">
            <img className='card-img-top' src={product.image} alt="" />
            </div>
            <div className="col">
                <h2 className='text-center'>Title:{product.title} </h2>
                <h2>Description: </h2> {product.description}
                <h2>Price: $ {product.price} </h2>
                <div>
                                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                        <button type="button" className="btn btn-danger m-1">Cancel</button>
                                    </div>
            </div>
            
                
            </div>
            
        </div>
    </div>
    {/* <div className="container">
                <h1 className='text-center bg-warning my-2 p2'>All Products</h1>
                <div className="row">
                    {product.map((pro) => (
                        <div className="col-md-3 d-flex my-3">
                        <div className="row" key={pro.id}>
                        <div className="card" style={{ width: '18rem' }}>
                        
                            <div key={pro.id}>
                                <img src={pro.image} className="card-img-top" alt={pro.title} />
                                <div className="card-body">
                                    <p>Name: {pro.title}</p>
                                    <p>Description: {pro.description}</p>
                                    <p>Price: $ {pro.price}</p>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                        <button type="button" className="btn btn-danger m-1">Cancel</button>
                                    </div>

                                </div>
                                

                            </div>
                                
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div> */}
      
    </>
  )
}

export default ProductDetails
