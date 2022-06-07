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
  { id: 1, category: 'Pupusas' },
  { id: 2, category: 'Bebidas' },
  { id: 3, category: 'Otros' },
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
  {
    id: 2,
    name: 'Peatonal UCA',
    address: 'Urb.Cumbres de Cuscatlan, Col. Las Margaritas.',
    date: '1/05/2022',
  },
  {
    id: 3,
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
  {
    id: 2,
    name: 'Elsa Frozen 2',
    date: '02/10/2021',
    salary: 450,
  },
  {
    id: 2,
    name: 'Elsa Frozen 2',
    date: '02/10/2021',
    salary: 450,
  },
  {
    id: 3,
    name: 'Elsa Frozen 3',
    date: '02/10/2021',
    salary: 450,
  },
  {
    id: 4,
    name: 'Elsa Frozen 4',
    date: '02/10/2021',
    salary: 450,
  },
];

export const testProducts = [
  {
    id: 1,
    name: 'Pupusa revuelta',
    price: 0.8,
    type: 1,
  },
  {
    id: 2,
    name: 'Pupusa de queso',
    price: 0.9,
    type: 1,
  },
  {
    id: 3,
    name: 'Pupusa de queso y loroco ',
    price: 0.9,
    type: 1,
  },
  { id: 4, name: 'Horchata', price: 1.0, type: 2 },
  { id: 5, name: 'Curtido', price: 0.75, type: 3 },
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
  {
    id: 2,
    name: 'Pupusa revuelta ',
    amount: 2,
    price: 0.55,
    total: 0.55,
    date: '02/10/2021 18:00',
  },
  {
    id: 3,
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
    dough: 1,
    product: {
      id: 1,
      name: 'Pupusa revuelta',
      price: 0.8,
      type: 1,
    },
    date: '02/10/2021 18:00',
  },
  {
    id: 2,
    amount: 2,
    total: 1.8,
    dough: 2,
    product: {
      id: 2,
      name: 'Pupusa de queso',
      price: 0.8,
      type: 1,
    },
    date: '02/10/2021 18:00',
  },
  {
    id: 3,
    amount: 3,
    total: 3.0,
    dough: null,
    product: {
      id: 3,
      name: 'Horchata',
      price: 1.0,
      type: 2,
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
