import React from 'react';

const Banner = () => {
    return (
        <div>
        <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full h-4/5">
  <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider2-aero2-1920x933_1920x846.progressive.jpg?v=1519883603" class="w-full h-4/5 " />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full h-4/5">
  <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero2-1920x933_1920x846.progressive.jpg?v=1519883619" class="w-full h-4/5 " />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
  <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider3-aero2-1920x933_1920x846.progressive.jpg?v=1519883639" class="w-full " />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>




          
        </div>
    );
};

export default Banner;