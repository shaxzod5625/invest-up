import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://server.investup.uz/api',
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
    }
  }) 
}