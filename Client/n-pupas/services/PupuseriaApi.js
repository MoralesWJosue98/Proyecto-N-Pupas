import { toFormData } from 'utils/utils';

export const BASE_URL = 'http://localhost:8080';
let instance;

export const PupuseriaApi = class {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  async registerAdmin(data) {
    const response = await fetch(`${BASE_URL}/auth/sign-up`, {
      method: 'POST',
      body: toFormData(data),
    });

    return response;
  }
};
