import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://10.0.118.156:8000/api',
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
    }
  }) 
}