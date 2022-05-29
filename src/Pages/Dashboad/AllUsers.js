import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = ({user,refetch}) => {
    const{_id,email,role}=user
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method : 'PUT',
        })
        .then(res =>res.json())
        .then(data =>{
            toast("successful");
           refetch() 
            })
      }
    const deleteUser=()=>{
        fetch(`http://localhost:5000/admin/${email}`,{
            method : 'DELETE',
        })
        .then(res =>res.json())
        .then(data =>{
            toast("successful");
           refetch() 
            console.log(data)})
      }
    return (
        <tr>

        <th>1</th>
        <td>{email}</td>
        <td>{role}</td>
        <td><button onClick={makeAdmin} class="btn btn-xs">Make Admin</button></td>
        <td><button onClick={deleteUser} class="btn btn-xs">Delete User</button></td>
       
      </tr>
    );
};

export default AllUsers;