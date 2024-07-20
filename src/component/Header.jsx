import React,{useEffect, useState} from 'react'
import { Link, json } from 'react-router-dom'

function Header() {
    let [title, setTitle] = useState([])
    let [search, setSearch]=useState("")

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(data=>setTitle(data))
    },[])

  
  let searchData = title.filter((sd)=>sd.title.includes(search))
  console.log(searchData)  
  let getSearch=(e)=>{      
      setSearch(e.target.value)
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MeroPasal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={getSearch} />
        <button className="btn btn-outline-success" type="submit" >Search</button>
        
      </form>
     
      
    
  </div>
</nav>
{searchData.map((t, id) =>
                    <div className="row border-bottom border-danger py-1" key={id} >
                        <div className="col">{t.title}</div>
                    </div>
                )}

      
    </>
  )
}

export default Header
