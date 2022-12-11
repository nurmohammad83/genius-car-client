import React, { useEffect, useState } from 'react';

const Ordersrow = ({order,handelDelete,handelUpdate}) => {
    const{title, _id,service, serviceName,status, price} = order
    const [orderService, setOrderService] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:4000/services/${service}`)
        .then(res=>res.json())
        .then(data=>setOrderService(data))
    },[service])
    
    return (
        <tr>
        <th>
          <label>
           <button onClick={()=>handelDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
               { orderService?.img &&
               
               <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{serviceName}</div>
            </div>
          </div>
        </td>
        <td>
          {title}
          <br/>
          <span className="badge badge-ghost badge-sm">{price}</span>
        </td>
        <th>
          <button onClick={()=>handelUpdate(_id)} className="btn btn-ghost btn-xs">{status?status:'pending'}</button>
        </th>
      </tr>
    );
};

export default Ordersrow;