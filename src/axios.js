import axios from "axios";

const instance = axios.create({
    //the API (cloud function) URL
    baseURL: 'https://us-central1-clone-225eb.cloudfunctions.net/api'
    //'http://localhost:5001/clone-225eb/us-central1/api'
});

export default instance;