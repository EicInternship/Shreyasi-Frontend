import axios from 'axios';

const Orderlist_REST_API_URL = 'http://localhost:8080/order';

class OrderlistServices{
    getOrderlist(){
        return axios.get(Orderlist_REST_API_URL);
    }
}
// eslint-disable-next-line 
export default new OrderlistServices();