
import axios from 'axios';
import md5 from 'md5';

const publicKey = '8476d6898e118c5f3c01d3be22015dfe';
const privateKey = '49ffaa5bedd7a93ba54ff4665836b9248d8abd85';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`,
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  }
})
export default api;
