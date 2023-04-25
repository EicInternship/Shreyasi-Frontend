import React, { useEffect, useState } from "react";
import axios from 'axios';
import {link} from 'react-router-dom';

function orderlist()
{
    const [loading, setLoading]= useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{

        let isMounted = true;
        document.title = "Orders";

        axios.get('/api/view-product').then(res=>{ 
            //varti data ghetoi from database
        if(isMounted)
        {
            if(res.data.status ===200)
            {
                setProduct(res.data.products);
                setLoading(false);
            }
        }
    }

    );
    return() =>{
        isMounted = false
    };
   
}, []);



export default orderlist;