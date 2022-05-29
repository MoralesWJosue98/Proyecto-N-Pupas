export const testEmployee = {
  name: 'Susana Dolores de Cabezas',
  username: 'sussy123',
  // Lo de pupusería es para mientras
  pupuseria: 'Pupusería bendición',
  branch: 'Peatonal UCA',
  role: 'Empleado',
  hiring: '12/09/2020',
  salary: 400,
};

export const testAdmin = {
  name: 'José Antonio Cerritos',
  username: 'jac2000',
  // Lo de pupusería es para mientras
  pupuseria: 'Pupusería bendición',
  branch: 'Peatonal UCA',
  role: 'Admin',
  hiring: '12/09/2020',
  salary: 350,
  openingDate: '10/09/2019',
};

export const testComments = [
  {
    id: 1,
    name: 'Alan Britto',
    date: '12/03/2022',
    body: 'Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo ',
  },
  {
    id: 2,
    name: 'Alan Britta',
    date: '12/04/2022',
    body: 'Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo ',
  },
];

export const testComment = {
  name: 'Alan Britto',
  date: '12/03/2022',
  body: 'Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo Excelente trabajo ',
};

export const categories = [
  { id: 1, category: 'Alimento' },
  { id: 2, category: 'Bebida' },
];

export const branches = [
  {
    id: 1,
    name: 'Peatonal UCA',
    address: 'Alguna dirección',
    openingDate: '3/05/2021',
    pupuseriaId: 2,
  },
  {
    id: 2,
    name: 'Antiguo',
    address: 'Alguna dirección x2',
    openingDate: '5/01/2022',
    pupuseriaId: 2,
  },
];

export const testBranch = [
  {
    id: 1,
    name: 'Peatonal UCA',
    address: 'Urb.Cumbres de Cuscatlan, Col. Las Margaritas.',
    date: '1/05/2022',
  },
];

export const testEmployeeAdmin = [
  {
    id: 1,
    name: 'Elsa Frozen',
    date: '02/10/2021',
    salary: 450,
  },
];

export const testProducts = [
  {
    id: 1,
    name: 'Pupusa revuelta',
    price: 0.8,
    type: 'food',
  },
  {
    id: 2,
    name: 'Pupusa de queso',
    price: 0.9,
    type: 'food',
  },
  { id: 3, name: 'Horchata', price: 1.0, type: 'drink' },
];

export const testHistoryAdmin = [
  {
    id: 1,
    name: 'Pupusa revuelta ',
    amount: 2,
    price: 0.55,
    total: 0.55,
    date: '02/10/2021 18:00',
  },
];

export const testSaleDetails = [
  {
    id: 1,
    amount: 3,
    total: 2.4,
    product: {
      id: 1,
      name: 'Pupusa revuelta',
      price: 0.8,
    },
    date: '02/10/2021 18:00',
  },
  {
    id: 2,
    amount: 2,
    total: 1.8,
    product: {
      id: 2,
      name: 'Pupusa de queso',
      price: 0.8,
    },
    date: '02/10/2021 18:00',
  },
  {
    id: 3,
    amount: 3,
    total: 3.0,
    product: {
      id: 3,
      name: 'Horchata',
      price: 1.0,
    },
    date: '02/10/2021 18:00',
  },
];

export const testPurchases = [
  {
    id: 1,
    purchase_date: '12/05/2022',
    concept: 'Tortillas',
    amount: 2.0,
    branch_id: 3,
  },
  {
    id: 2,
    purchase_date: '10/03/2022',
    concept: 'Quesillo',
    amount: 5.99,
    branch_id: 3,
  },
];