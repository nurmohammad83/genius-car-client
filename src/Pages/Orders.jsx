import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contex/AuthProvider';
import Ordersrow from './Ordersrow';

const Orders = () => {
    const {user,logout} = useContext(AuthContext)
    const [orders, setOrders] =useState([])

  useEffect(()=>{
    const url = `http://localhost:4000/orders?email=${user?.email}`
    fetch(url,{
      headers:{
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      }
    })
    .then(res=>{
      if(res.status === 401|| res.status === 403){
         return logout()
      }
     return res.json()})
    .then(data=>setOrders(data))
  },[user?.email,logout])

  const handelDelete=(id)=>{
    const proceed= window.confirm('Are you sure for delete ')
    if(proceed){
       fetch(`http://localhost:4000/orders/${id}`,{
        method:'DELETE',
        headers:{
          authorization: `Bearer ${localStorage.getItem('genius-token')}`
        }
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
            alert('Delete Successfully')
            const remaning = orders.filter(odr => odr._id !== id )
            setOrders(remaning)
        }
       })
       
    }
  }
  const handelUpdate = id =>{
    fetch(`http://localhost:4000/orders/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json',
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      body:JSON.stringify({status : 'Approved'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount){
        const remaining = orders.filter(odr=>odr._id !== id)
        const approving = orders.find(odr=>odr._id === id)
        approving.status = 'Approved'
        const newOrders = [approving,...remaining]
        setOrders(newOrders)
      }
    })
  }
    return (
        <div>
            <h2 className="text-lg">Your have orders: {orders.length}</h2>
            <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        orders.map(order=><Ordersrow
        key={order._id}
        order={order}
        handelDelete={handelDelete}
        handelUpdate={handelUpdate}
        />)
     } 
    </tbody>
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Orders;