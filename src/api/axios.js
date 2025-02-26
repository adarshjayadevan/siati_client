import axios from "axios";

const adminInstance=axios.create({
    baseURL:import.meta.env.VITE_API_URL
})


adminInstance.interceptors.request.use((config)=>{
    const adminToken=localStorage.getItem('token');
    if(adminToken){
        config.headers.Authorization=`Bearer ${adminToken}`
    }
    return config
},(error)=>{
    return Promise.reject(error)
})




export default adminInstance;