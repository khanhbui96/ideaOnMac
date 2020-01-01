import axios from 'axios';

const callApi = (method, endpoint, data)=>{
    return axios({
        method,
        data,
        url: `http://80.211.189.66/api${endpoint}`
    }
    )
};

export default callApi