import axios from 'axios';
let service= axios.create ({
    method: 'GET',
    baseURL:"http://localhost:3000/",
    timeout:3000
})
export default service