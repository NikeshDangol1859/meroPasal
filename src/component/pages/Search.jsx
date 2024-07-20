import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Search() {

  let [title, setTitle] = useState([])
    let [search, setSearch]=useState("")
    let [error, setError]=useState("")

    useEffect(()=>{
      // fetch('https://fakestoreapi.com/products')
      //         .then(res=>res.json())
      //         .then(data=>setTitle(data))

      axios.get("https://fakestoreapi.com/products")
      .then(response => setTitle(response.data))
      .catch((err)=>{setError(err.message)})
    },[])

  
  let searchData = title.filter((sd)=>sd.title.includes(search))
  console.log(searchData)  
  let getSearch=(e)=>{      
      setSearch(e.target.value)
  }
  return (
    <>
    <div className="container py-5">
      <h1>{error}</h1>
                <div className="row">
               
                    <div className="col">                        
                        <input type="text"  name="txtsearch" onChange={getSearch}/>
                    </div>
                </div>
                {searchData.map((t, id) =>
                    <div className="row border-bottom border-danger py-1" key={id} >
                        <div className="col">{t.title}</div>
                    </div>
                )}


            </div>
      
    </>
  )
}

export default Search
