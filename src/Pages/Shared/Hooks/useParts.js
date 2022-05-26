const { useState, useEffect } = require("react")

const useParts= ()=>{
    const[products,setProducts]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return[products,setProducts]
}

export default useParts