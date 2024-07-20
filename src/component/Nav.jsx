import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



function Nav() {
    const [nav, setNav] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>setNav(data))

        }, []);
    

  return (
    <>
    
    
    <div className="container">
    <div className="row bg-secondary text-light d-flex">
                    {nav.map((category) => (
                        <div className="col-2">                            
                            <Link to={`/category/${category}`}><h5>{category}</h5></Link>
                        </div>
                    ))}
                    <div>
                </div>
            </div>
            </div>
      
    </>
  )
}

export default Nav
