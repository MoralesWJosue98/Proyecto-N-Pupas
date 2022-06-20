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
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: toFormData(body),
  });

  return response.ok;
};

const deleteData = async (path, token) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.ok;
};

const putData = async (path, token, body) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: toFormData(body),
  });

  return response.ok;
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
    return postData('/pupuserias/branches/', token, body);
  }

  deleteBranch(token, id) {
    return deleteData(`/pupuserias/branches/${id}`, token);
  }

  updateBranch(token, id, body) {
    return putData(`/pupuserias/branches/${id}`, token, body);
  }

  getTodayPurchases(token, branchID) {
    return getData(`/pupuserias/branches/${branchID}/purchases/today`, token);
  }

  getAllPurchases(token, branchID) {
    return getData(`/pupuserias/branches/${branchID}/purchases`, token);
  }

  getOnePurchase(token, branchID, purchaseID) {
    return getData(`/pupuserias/branches/${branchID}/purchases/${purchaseID}`, token);
  }

  createPurchase(token, branchID, body) {
    return postData(`/pupuserias/branches/${branchID}/purchases`, token, body);
  }

  deletePurchase(token, branchID, purchaseID) {
    return deleteData(`/pupuserias/branches/${branchID}/purchases/${purchaseID}`, token);
  }

  updatePurchase(token, branchID, purchaseID, body) {
    return putData(`/pupuserias/branches/${branchID}/purchases/${purchaseID}`, token, body);
  }


  createEmployee(token, branchID, body) {
    return postData(`/pupuserias/branches/${branchID}/employees`, token, body);
  }
  
  getAllEmployees(token, branchID) {
    return getData(`/pupuserias/branches/${branchID}/employees`, token);
  }

  deleteEmployee(token, branchID, id) {
    return deleteData(`/pupuserias/branches/${branchID}/employees/${id}`, token);
  }

  getOneEmployee(token, branchID, employeeID) {
    return getData(`/pupuserias/branches/${branchID}/employees/${employeeID}`, token);
  }

  updateEmployee(token, branchID, employeeID, body) {
    return putData(`/pupuserias/branches/${branchID}/employees/${employeeID}`, token, body);
  }

};
