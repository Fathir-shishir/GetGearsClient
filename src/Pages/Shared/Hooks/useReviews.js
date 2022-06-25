const { useState, useEffect } = require("react")

const useReviews= ()=>{
    const[reviews,setReviews]= useState([])
    useEffect(()=>{
        fetch('https://protected-hamlet-28459.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return[reviews,setReviews]
}

export default useReviews