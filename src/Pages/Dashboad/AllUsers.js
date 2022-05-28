import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const AllUsers = ({user,refetch}) => {
    const{_id,email,role}=user
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method : 'PUT',
        })
        .then(res =>res.json())
        .then(data =>{
           refetch() 
            console.log(data)})
      }
    return (
        <tr>

        <th>1</th>
        <td>{email}</td>
        <td>{role}</td>
        <td><button onClick={makeAdmin} class="btn btn-xs">Make Admin</button></td>
       
      </tr>
    );
};

export default AllUsers;