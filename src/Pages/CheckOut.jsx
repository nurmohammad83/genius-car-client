import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contex/AuthProvider';

const CheckOut = () => {
    const {title,price,_id} = useLoaderData([])
    const {user} = useContext(AuthContext)
    const handelCheckout= e=>{
      e.preventDefault()
      const form = e.target;
      const name =`${form.first.value} ${form.last.value}`
      const email=user?.email || 'unregister'
      const phone = form.phone.value;
      const message= form.message.value;

      const orders ={
        service:_id,
        serviceName: title,
        price,
        email,
        customer:name,
        phone,message

      }
  
      fetch('http://localhost:4000/orders',{
        method:'POST',
        headers:{
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('genius-token')}`
        },
        body:JSON.stringify(orders)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.acknowledged){
          alert('Orders added successfully')
          form.reset()
        }
      })
    }
    return (
      <form onSubmit={handelCheckout}>
        <h2 className='text-3xl'>{title}</h2>
        <h2 className='text-2xl'>{price}</h2>
      <div className='grid grid-cols-2'>
      <input type="text" name='first' placeholder="First name" className="input input-bordered my-4 w-full max-w-xs" />
      <input type="text" name='last' placeholder="Last name" className="input input-bordered my-4 w-full max-w-xs" />
      <input type="text" name='phone' placeholder="Phone" className="input input-bordered my-4 w-full max-w-xs" />
      <input type="email" name='email' placeholder="Email" defaultValue={user.email} className="input input-bordered my-4 w-full max-w-xs" />
      </div>
      <textarea name='message' className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
      <div className='py-2 text-center border border-red-500 my-4 btn btn-ghost'><input type="submit" value="Submit" /></div>
    </form>
    );
};

export default CheckOut;