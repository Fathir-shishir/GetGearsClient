import React from 'react';
import { Link } from 'react-router-dom';
import useParts from '../../Hooks/useParts';
import Product from '../Products/Product';
import Banner from './Banner';


const Home = () => {
    const[products,setProducts]= useParts([])
    const sampleProducts = products.slice(0,3)
    return (
        <div>
           <Banner></Banner>
           <h1 className='text-5xl text-center text-bold mt-5'>Products</h1>
          <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-3'>
              {
                sampleProducts.map(product=><Product
                  product={product}
                ></Product>)
              }
              
          </div>
          <div className='text-center my-3'>
          <Link  to="/products" class="btn btn-primary w-1/4 justify-center text-center text-xl">See All</Link> 
          </div>
          
        </div>
    );
};

export default Home;