import axios from "axios";

/* axios.defaults.baseURL = "https://imaku.uz/api"; */
axios.defaults.baseURL = "https://server.investup.uz/api";

axios.defaults.headers.common = {
    "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
};