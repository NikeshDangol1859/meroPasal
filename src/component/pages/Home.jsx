import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Home() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        // Fetching product data
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setApiData(data))
            
    }, []);
  return (
    <>
    <div className="container">
                <h1 className='text-center bg-warning my-2 p2'>All Products</h1>
                <div className="row">
                    {apiData.map(product => (
                        <Link className="col-md-3 d-flex my-3" to={`productdetail/${product.id}`}>
                        <div className="row" key={product.id}>
                        <div className="card" style={{ width: '18rem' }}>
                        
                            <div key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <p>Name: {product.title}</p>
                                    <p>Description: {product.description}</p>
                                    <p>Price: $ {product.price}</p>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                        <button type="button" className="btn btn-danger m-1">Cancel</button>
                                    </div>

                                </div>
                                

                            </div>
                                
                        </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
      
    </>
  )
}

export default Home
