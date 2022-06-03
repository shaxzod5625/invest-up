import axios from 'axios'

export default () => {
  axios.create({
    baseURL: 'http://192.168.0.157:8000/api',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": true,
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
    }
  })
}