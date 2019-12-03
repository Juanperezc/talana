
import axios from 'axios';

export default class StoreService {
  static store() {
    return axios.post(process.env.VUE_APP_API + '/product');
  }
  static show(id) {
    return axios.get(process.env.VUE_APP_API + '/product/' + id);
  }
}
