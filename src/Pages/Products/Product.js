import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const{img,name,discription,minimumOrderQuantity,price,_id}=product
    const navigate = useNavigate()
   const  redirectPurchase =(id)=>{
        navigate(`/puschase/${id}`)
   }
    return (
    <div class="card  bg-base-100 shadow-xl">
     <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{discription}</p>
    <p> Price : {price}</p>
    <p> Minimun Order Quentity : {minimumOrderQuantity}</p>
    <div class="flex justify-center mt-2 ">
      <button onClick={()=> redirectPurchase(_id)} class="btn btn-primary" > Buy Now</button>
    </div>
  </div> 
</div>
    );
};

export default Product;