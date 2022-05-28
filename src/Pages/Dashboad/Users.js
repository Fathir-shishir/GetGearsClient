import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AllUsers from './AllUsers';

const Users = () => {

    const {data:users,isLoading,refetch}=useQuery("users",()=>fetch('http://localhost:5000/user').then(res=>res.json()))

    if(isLoading){
        return <h1>Loading</h1>
    }
    

    // const [allUsers,setallUsers]=useState([])
    // useEffect(()=>{
        
    //       fetch('http://localhost:5000/user')
    //       .then(res=>res.json())
    //       .then(data => setallUsers(data))
        
    //   },[])
    //  console.log(allUsers.email)
      
    return (
        <div>
            <h1>hello users: {users.length}</h1>
            <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>eamil</th>
        <th>role</th>
        <th>Add Role</th>
        <th>Delete a Role</th>
        
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        users.map((user)=><AllUsers
        key={users._id}
        user={user}
        refetch={refetch}
        >

        </AllUsers>)
      }
      
    
     
    </tbody>
  </table>
        </div>
    );
};

export default Users;