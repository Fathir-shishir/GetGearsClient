const { useState, useEffect } = require("react")

const useParts= ()=>{
    const[products,setProducts]= useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return[products,setProducts]
}

export default useParts