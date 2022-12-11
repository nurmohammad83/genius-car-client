import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl text-orange-300 font-medium">Service</p>
                <h2 className="text-4xl font-semibold">Our Services</h2>
                <p className="text-base">The majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {

            services.map(service=><ServiceCart
            key={service._id}
            service={service}
            />)
        }
            </div>
        </div>
    );
};

export default Services;