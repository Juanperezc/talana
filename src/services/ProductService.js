
import axios from 'axios';

export default class ProductService {
  static index() {
    return axios.get(process.env.VUE_APP_API + '/product');
  }
  static show(id) {
    return axios.get(process.env.VUE_APP_API + '/product/' + id);
  }
}
