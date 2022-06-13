import { adminRole, employeeRole, roleCookie } from 'constants/data';
import { adminRoutes, employeeRoutes } from 'routes/routes';
import { getCookie } from 'cookies-next';
import { NextResponse } from 'next/server';

export const middleware = (req, res) => {
  let { pathname } = req.nextUrl;
  const role = getCookie(roleCookie, { req, res });

  if (role) {
    if (pathname.startsWith('/admin') && role !== adminRole) {
      const url = req.nextUrl.clone();
      url.pathname = employeeRoutes.home;
      return NextResponse.redirect(url);
    } else if (pathname.startsWith('/empleado') && role !== employeeRole) {
      const url = req.nextUrl.clone();
      url.pathname = adminRoutes.home;
      return NextResponse.redirect(url);
    }
  }
};
