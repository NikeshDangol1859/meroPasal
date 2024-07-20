import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function CategoryApi() {
    let [cat,setcat] = useState([])
    let {cat_name} = useParams();
    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${cat_name}`)
            .then(res=>res.json())
            .then(data=>setcat(data))    
        }, [cat_name] )   
  return (
    <>
    
    <div className="container">
        
                <h1 className='text-center bg-warning my-2'>{cat_name}</h1>
                <div className="row">
                    {cat.map((category) => 
                    <Link className="col-md-3 d-flex my-3" to={`productdetail/${category.id}`}>
                        <div className="col-md-3 d-flex my-3">
                        <div className="row">
                        <div className="card" style={{ width: '18rem' }}>
                        
                            <div key={category.id}>
                                <img src={category.image} className="card-img-top" alt={category.title} />
                                <div className="card-body">
                                    <p>Name: {category.title}</p>
                                    <p>Description: {category.description}</p>
                                    <p>Price: $ {category.price}</p>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                        <button type="button" className="btn btn-danger m-1">Cancel</button>
                                    </div>

                                </div>
                                

                            </div>
                                
                        </div>
                        </div>
                    </div>
                    </Link>
                    )}
                </div>
            </div>
      
    </>
  )
}

export default CategoryApi
