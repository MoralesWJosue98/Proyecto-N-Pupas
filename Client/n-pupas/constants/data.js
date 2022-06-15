import { employeeRoutes, adminRoutes } from 'routes/routes';
import { employeePages, adminPages } from './strings';

export const tokenCookie = 'token';
export const roleCookie = 'role';
export const branchCookie = 'branch';

export const adminRole = 'Admin';
export const employeeRole = 'Employee';

export const employeeMenuOptions = [
  { title: employeePages.comments, route: employeeRoutes.comments },
  { title: employeePages.report, route: employeeRoutes.report },
];

export const adminMenuOptions = [
  { title: adminPages.sales, route: adminRoutes.sales },
  { title: adminPages.menu, route: adminRoutes.menu },
  { title: adminPages.employees, route: adminRoutes.employees },
  { title: adminPages.purchases, route: adminRoutes.purchases },
  { title: adminPages.reports, route: adminRoutes.reports },
  { title: adminPages.branches, route: adminRoutes.branches },
];

export const departments = [
  'San Salvador',
  'Morazán',
  'Cabañas',
  'San Miguel',
  'Chalatenango',
  'La Libertad',
  'Cuscatlán',
  'La Unión',
  'Ahuachapán',
  'Sonsonate',
  'Santa Ana',
  'San Vicente',
  'Usulután',
  'La Paz',
];
