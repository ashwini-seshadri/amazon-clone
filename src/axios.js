import axios from "axios";

const instance = axios.creat({
    //the API (cloud function) URL
    baseURL: 'http://localhost:5001/clone-225eb/us-central1/api'
});

export default instance;