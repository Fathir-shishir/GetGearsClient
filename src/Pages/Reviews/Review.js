import React, { useState } from 'react';
import useCollapse from 'react-collapsed'

const Review = ({review}) => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    const {name,picture,comment,rating} = review
    const narray = [...Array(rating)]
   
    
    return (
        <div class="bg-base-100 shadow-xl  w-11/12">
      <div class="avatar">
  <div class="w-24  rounded-full">
    <img className='mx-auto' src={picture} />
  </div>
</div>
  <div class="card-body">
     <p className='card-title'> Rating:
     {narray.map((star)=>{
      return <i class="fas fa-star"/>
     })} </p>
    <h2 class="card-title">{name}</h2>
   { !isExpanded && <p>{comment.slice(0,200)}...</p>} 
    <section {...getCollapseProps()}>{comment}</section>
    <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'ReadLess' : 'Read More'}
      </button>
     
   
  </div>
</div>
    );
};

export default Review;