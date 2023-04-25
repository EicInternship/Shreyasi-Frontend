// react snippets using
//rfc- create react functional component

import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import  { Component } from 'react'
import OrderlistServices from '../services/OrderlistServices'

// class OrderComponet extends Component {

//     constructor(){
//         order:[];
//     }
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }


 function OrderComponet() {

    const [order , setOrder]=useState([])

    useEffect(() => {
       getOrder()
    }, [])

    const getOrder = () => {
        OrderlistServices.getOrderlist().then((response) => {
            setOrder(response.data)
            console.log(response.data)
        }
        );
    };

  return (
    <div>
    <div className="container mt-5 px-2">
    
    <div className="mb-2 d-flex justify-content-between align-items-center">
        
        <div className="position-relative">
            <span className="position-absolute search"><i className="fa fa-search"></i></span>
            <input className="form-control w-100" placeholder="Search by orderid, date..."/>
        </div>
        
       
        
    </div>
    <div className="table-responsive"/>
    <table className="table table-responsive table-borderless">
        
      <thead>
        <tr className="bg-light">
          <th scope="col" width="5%"><input className="form-check-input" type="checkbox"/></th>
          <th scope="col" width="5%">id</th>
          <th scope="col" width="20%">date</th>
          <th scope="col" width="10%">status</th>
          <th scope="col" width="20%">total</th>
         
          
        </tr>
      </thead>
      </table>
    <div>
      {
        order.map(
            order =>
            <tr key={order.id}>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.total}</td>
            </tr>
            
        )
      }
    </div>
    </div>
    </div>
  )
}

export default OrderComponet
