import PageHeading from 'components/information/page-heading';
import EmployeeCard from 'components/cards/employee';
import { testEmployeeAdmin } from 'data/tempObjects';
import { adminPages } from 'constants/strings';
import { adminRoutes } from 'routes/routes';
import Head from 'next/head';

const EmployeesPage = () => {
    return (
        <main className='p-6 flex flex-col gap-5'>
            <Head>
                <title>{adminPages.employees}</title>
            </Head>
            <PageHeading title={adminPages.employees} route={adminRoutes.newEmployee} />
            <div>
                {testEmployeeAdmin.map(employee => {
                    return <EmployeeCard employee={employee} key={employee.id} />;
                })}
            </div>
        </main>
    );
};

export default EmployeesPage;