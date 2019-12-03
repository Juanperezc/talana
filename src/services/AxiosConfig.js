import axios from 'axios';

export default () => {

  axios.defaults.headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }

  axios.interceptors.request.use((config) => {
 
   /*  if (UserService.token()) {
      config.headers.authorization = 'Bearer ' + UserService.token();
    } */
    return config;
  }, function (error) {
    console.error(error);
    return Promise.reject(error);
  });

  axios.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    console.error(error);
 /*    if (error.response && error.response.status === 401 && UserService.token()) {
      setTimeout(() => {
        if (UserService.token() != null){
          UserService.setToken(null);
          UserService.setUser(null);
          UserService.setTime(null);
          AlertService.error('la sesión ha caducado', 'Ingrese nuevamente sus credenciales para continuar').then(() => {
              vue.$router.push("/login");
         });
      }}, 1000);
    } */
    return Promise.reject({ ...error });
  });
};



