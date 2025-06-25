import axios from 'axios'
const BaseUrl='https://8060-106-51-65-165.ngrok-free.app'

export const register =async(payload)=>{
const response =await axios.post(`${BaseUrl}/auth/register`,payload)
return response.data
}

export const login =async(payload)=>{
    const response =await axios.post(`${BaseUrl}/auth/admin/login`,payload)
    return response.data
}