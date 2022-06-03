import axios from "axios";

/* axios.defaults.baseURL = "https://imaku.uz/api"; */
axios.defaults.baseURL = "http://192.168.0.157:8000/api";

axios.defaults.headers.common = {
    "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
};