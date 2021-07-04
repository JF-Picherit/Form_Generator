import AbstractService from "./AbstractService";

class FormService extends AbstractService {
  //There is no id since we use a fake API
  getById() {
    const formData = require("../assets/form.json");
    return this.getFakeRequest(formData, true);
  }
}

const formService = new FormService();
export default formService;
