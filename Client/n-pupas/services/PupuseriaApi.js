import { toFormData } from 'utils/utils';

export const BASE_URL = 'http://localhost:8080';
let instance;

const getData = async (token, path) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.json();
  return data;
};

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

  async login(credentials) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      body: toFormData(credentials),
    });

    const user = await response.json();
    return user;
  }

  getAllBranches(token) {
    const branches = getData(token, '/pupuserias/branches/me');
    return branches;
  }
};
