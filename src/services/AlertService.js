import Swal from "sweetalert2";

export default class AlertService {

  static get confirmButtonColor() {
    return "#3085d6";
  }

  static get cancelButtonColor() {
    return "#d33";
  }

  static get customClass() {
    return "custom-sweet";
  }

  /**
   * @description
   */
  static async delete(title, text, options = {}) {
    options = Object.assign({
      type: "warning",
      title,
      text,
      showCancelButton: true,
      confirmButtonColor: AlertService.confirmButtonColor,
      cancelButtonColor: AlertService.cancelButtonColor,
      confirmButtonText: "SI",
      cancelButtonText: "NO",
      customClass: AlertService.customClass
    }, options)
    return await Swal.fire(options);
  }

  static async question(title, text, options = {}) {
    options = Object.assign({
      type: "warning",
      title,
      text,
      showCancelButton: true,
      confirmButtonColor: AlertService.confirmButtonColor,
      cancelButtonColor: AlertService.cancelButtonColor,
      confirmButtonText: "SI",
      cancelButtonText: "NO",
      customClass: AlertService.customClass
    }, options)
    return await Swal.fire(options);
  }

  static async questionText(title, text, options = {}) {
    options = Object.assign({
      type: "warning",
      input: 'text',
      title,
      text,
      showCancelButton: true,
      confirmButtonColor: AlertService.confirmButtonColor,
      cancelButtonColor: AlertService.cancelButtonColor,
      confirmButtonText: "SI",
      cancelButtonText: "NO",
      customClass: AlertService.customClass
    }, options)
    return await Swal.fire(options);
  }

  static async info() {
    return await Swal.fire({
      title: "Operacion exitosa",
      customClass: AlertService.customClass
    });
  }

  static async error(title, text) {
    if (!Swal.isVisible()){
      return await Swal.fire({
        title: title,
        text: text,
        type: "error",
      });
    }

  }

}
