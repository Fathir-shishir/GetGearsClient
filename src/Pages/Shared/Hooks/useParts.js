const { useState, useEffect } = require("react")

const useParts= ()=>{
    const[products,setProducts]= useState([])
    useEffect(()=>{
        fetch('https://protected-hamlet-28459.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return[products,setProducts]
}

export default useParts