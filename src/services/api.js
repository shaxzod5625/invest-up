import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://192.168.0.157:8000/api',
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
    }
  }) 
}