import  React, {  useEffect, useState } from "react";
import OrderlistServices from '../services/OrderlistServices'
// import { Component } from 'react'


function Orderlist(){

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
    
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Order List</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home </a></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a></li>
                                
                                      </ul> 
                                        
                                            </div>
                                            </nav>
                                        
                
                <div className="container mt-5 px-2">
    
    <div className="mb-2 d-flex justify-content-between align-items-center">
        
        <div className="position-relative">
            <span className="position-absolute search"><i className="fa fa-search"></i></span>
            <input className="form-control w-100" placeholder="Search by orderid, date..."/>
        </div>
        
       
        
    </div>
    <div className="table-responsive">
    <table className="table table-responsive table-borderless">
        
      <thead>
        <tr className="bg-light">
          <th scope="col" width="5%"></th>
          <th scope="col" width="5%">id</th>
          <th scope="col" width="20%">date</th>
          <th scope="col" width="10%">status</th>
          <th scope="col" width="20%">total</th>
         
          
        </tr>
      </thead>
  <tbody>
  {
        order.map(
            order =>
            <tr key={order.id}>
                <td><input className="form-check-input" type="checkbox"/></td>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.total}</td>
            </tr>
            
        )
      }
  </tbody>
</table>
  
  </div>
</div>
            </div>
        )
    }


export default Orderlist;