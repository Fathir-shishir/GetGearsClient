import React from 'react';
import { Link } from 'react-router-dom';
import useParts from '../Shared/Hooks/useParts';
import useReviews from '../Shared/Hooks/useReviews';
import Product from '../Products/Product';
import Review from '../Reviews/Review';
import Banner from './Banner';
import Summery from './Summery';


const Home = () => {
    const[products,setProducts]= useParts([])
    const sampleProducts = products.slice(0,3)
    const[reviews,setReviews]=useReviews([])
    const sampleReviews = reviews.slice(0,3)
    return (
        <div>
           <Banner></Banner>
           <h1 className='text-5xl text-center text-bold mt-5'>Products</h1>
          <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 justify-items-center'>
              {
                sampleProducts.map(product=><Product
                  product={product}
                ></Product>)
              }
              
          </div>
          <div className='text-center my-3'>
          <Link  to="/products" class="btn btn-primary w-1/4 justify-center text-center text-xl">See All</Link> 
          </div>
       {/* comment */}
            <h1 className='text-5xl text-center text-bold my-7'>Reviews</h1>
          <div className='grid lg:grid-cols-3 gap-3'>
                {
                    sampleReviews.map(review=> <Review
                     review={review}
                    >

                    </Review>)
                }
          </div>
          <Summery></Summery>


          
        </div>
    );
};

export default Home;