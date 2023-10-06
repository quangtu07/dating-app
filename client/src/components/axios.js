import axios from 'axios'

const instance = axios.create({
    baseURL: "https://dating-app-m3me.onrender.com"
})

export default instance