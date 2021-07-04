export default class AbstractService {
  constructor() {
    if (this.constructor === AbstractService) {
      throw new TypeError(
        'Abstract class "AbstractService" cannot be instantiated directly'
      );
    }
  }

  // Return a promise with fakeResponse argument after a short time to simulate a request
  getFakeRequest(fakeResponse, success) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (success) {
          resolve(fakeResponse);
        } else {
          reject(fakeResponse);
        }
      }, Math.floor(Math.random() * 1500 + 300));
    });
  }
}
