import { toFormData } from 'utils/utils';

export const BASE_URL = 'http://localhost:8080';
let instance;

const getData = async (path, token) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.json();
  return data;
};

const postData = async (path, token, body) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: toFormData(body),
  });

  return response;
};

const deleteData = async (path, token) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
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
    const branches = getData('/pupuserias/branches/me', token);
    return branches;
  }

  getOneBranch(token, id) {
    const branch = getData(`/pupuserias/branches/${id}`, token);
    return branch;
  }

  createBranch(token, body) {
    const response = postData('/pupuserias/branches/', token, body);
    return response.ok;
  }

  deleteBranch(token, id) {
    const response = deleteData(`/pupuserias/branches/${id}`, token);
    return response.ok;
  }
};