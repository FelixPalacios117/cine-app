import axios from "axios";

const axiosCliente=axios.create({
    baseURL:'http://localhost:9090'
}); 
export default axiosCliente