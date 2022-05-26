import React from 'react';
import useReviews from '../Shared/Hooks/useReviews';
import Review from './Review';

const Reviews = () => {
    const[reviews,setReviews]=useReviews([])
    return (
        <div className='grid lg:grid-cols-3 gap-3'>
           {
               reviews.map(review =><Review
                review={review}>
               
               </Review>)
           }
            
        </div>
    );
};

export default Reviews;