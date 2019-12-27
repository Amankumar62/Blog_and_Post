import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';



axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-type'] =  'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    //Edit the request before returning it.
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});



axios.interceptors.response.use(response => {
    console.log(response);
    //Edit request config before returning it.
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();


