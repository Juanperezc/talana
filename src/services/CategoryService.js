
import axios from 'axios';

export default class CategoryService {

  static index() {
    console.log('url', process.env.VUE_APP_API + '/product-category')
    return axios.get(process.env.VUE_APP_API + '/product-category');
  }

}
