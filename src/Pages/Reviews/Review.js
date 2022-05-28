import React from 'react';

const Review = ({review}) => {
    const {name,picture,comment,rating} = review
    return (
        <div class="card  bg-base-100 shadow-xl">
      <div class="avatar">
  <div class="w-24 rounded-full">
    <img src={picture} />
  </div>
</div>
  <div class="card-body">
     <p className='card-title'> Rating:{rating}</p>
    <h2 class="card-title">{name}</h2>
    <p>{comment}</p>
   
  </div>
</div>
    );
};

export default Review;