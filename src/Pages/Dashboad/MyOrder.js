import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
const MyOrder = () => {
    const [user]=useAuthState(auth)
    const [myOrder,setMyOrder]=useState([])
    useEffect(()=>{
      if(user){
        fetch(`http://localhost:5000/orderDetails?email=${user.email}`)
        .then(res=>res.json())
        .then(data => setMyOrder(data))
      }
    },[user])
    return (
        <div>
            <h1>my order : {myOrder.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>UserName</th>
        <th>eamil</th>
        <th>Phone Number</th>
        <th>ProductName</th>
        <th>Quantity</th>
        <th>Total Price</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        myOrder.map((data,index)=>
            <tr>

        <th>{index+1}</th>
        <td>{data.userName}</td>
        <td>{data.email}</td>
        <td>{data.PhoneNumber}</td>
        <td>{data.productName}</td>
        <td>{data.quantity}</td>
        <td>{data.totalPrice}</td>
        <td>{!data.paid} <Link></Link></td>
      </tr>)
      }
      
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;