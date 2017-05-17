import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:1337';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
