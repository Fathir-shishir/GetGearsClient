import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Shared/Hooks/useAdmin';

const Dashboad = () => {
  const[user]=useAuthState(auth)
  const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    {/* <!-- Page content here --> */}
    <h1 className='text-3xl font-bold'> My dashboad</h1>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboad"> My Order</Link></li>
      <li><Link to="/dashboad/myProfile"> My Profile</Link></li>
      {admin && <li><Link to="/dashboad/allUsers"> All Users</Link></li>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboad;