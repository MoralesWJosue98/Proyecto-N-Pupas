import AddEmployeeForm from 'components/forms/add-employee';
import { adminPages } from 'constants/strings';
import { fillWithZero } from 'utils/utils';
import toast from 'react-hot-toast';
import Head from 'next/head';
import useAuthContext from 'context/AuthContext';
import { PupuseriaApi } from 'services/PupuseriaApi';
import { getCookie } from 'cookies-next';
import { branchCookie } from 'constants/data';
import { useRouter } from 'next/router';
import { branches } from 'data/tempObjects';
import { adminRoutes } from 'routes/routes';


export default function NewEmployeePage() {

  const pupuseriaApi = new PupuseriaApi();
  const branchID = getCookie(branchCookie);
  const { token } = useAuthContext();
  const router = useRouter();

  
  const onSubmitForm = async data => {
    try {
      const created = await pupuseriaApi.createEmployee(token, branchID, data);

      if (created) {
        toast.success('Empleado creado exitosamente');
        router.push(adminRoutes.employees);
      } else {
        toast.error('No se pudo crear el empleado');
      }
    } catch (e) {
      console.log(e);
      toast.error('Ocurrió un error interno');
    }
  };
  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.newEmployee}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-center md:my-3'>{adminRoutes.newEmployee}</h1>
      <AddEmployeeForm id={fillWithZero(3)} onSubmitHandler={onSubmitForm} />
    </main>
  );
}
