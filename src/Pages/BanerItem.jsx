import React from 'react';
import './Baner.css'
const BanerItem = ({slide}) => {
    const {image,prev,id,next}= slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
    <div className='carousel-img'>
          <img src={image} alt='' className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform  -translate-y-1/2 left-24 top-1/4">
     <h5 className='text-6xl font-bold text-white'>
        Affordable <br />
        Pricing for  Car <br />
        Servicing 
     </h5>
    </div>
    <div className="absolute flex justify-end transform w-2/5  -translate-y-1/2 left-24 top-1/2">
     <p className=  'text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore perferendis iste, porro quis suscipit .</p>
    </div>
    <div className="absolute flex justify-start  transform   -translate-y-1/2 left-24 top-3/4">
    <button className="btn btn-success text-white rounded-lg mr-5">Success</button>
    <button className="btn btn-outline rounded-lg  btn-warning">Warning</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`}  className="btn btn-circle mr-12">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default BanerItem;