import { CustomModal } from 'components/layout/modal/custom-modal';
import PageHeading from 'components/information/page-heading';
import 'react-confirm-alert/src/react-confirm-alert.css';
import EmployeeCard from 'components/cards/employee';
import { testEmployeeAdmin } from 'data/tempObjects';
import { confirmAlert } from 'react-confirm-alert';
import { adminPages } from 'constants/strings';
import { adminRoutes } from 'routes/routes';
import toast from 'react-hot-toast';
import Head from 'next/head';

const EmployeesPage = () => {
  const deleteEmployee = () => {
    // Lógica para eliminar
    toast.success('Empleado eliminado exitosamente');
  };

  const onDeleteHandler = employee => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomModal
            onClose={onClose}
            onConfirm={deleteEmployee}
            text={`¿Segura/o que quieres eliminar al empleado "${employee}"?`}
          />
        );
      },
    });
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.employees}</title>
      </Head>

      <div className='flex flex-wrap gap-3 justify-between mb-2 items-center'>
        <h1 className='font-bold text-2xl sm:text-3xl'>{adminPages.employees}</h1>
        <div className='flex gap-5'>
         <EditButton route={adminRoutes.reportEmployee} />
          <AddButton route={adminRoutes.newEmployee} />  
        </div>
      </div>
    
      <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
        {testEmployeeAdmin.map(employee => {
          return (
            <EmployeeCard
              employee={employee}
              key={employee.id}
              onDeleteHandler={() => onDeleteHandler(employee.name)}
            />
          );
        })}
      </div>
    </main>
  );
};

export default EmployeesPage;
