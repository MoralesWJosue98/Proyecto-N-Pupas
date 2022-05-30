import AddEmployeeForm from 'components/forms/add-employee';
import { adminPages } from 'constants/strings';
import { fillWithZero } from 'utils/utils';
import toast from 'react-hot-toast';
import Head from 'next/head';

export default function NewEmployeePage() {
  const onSubmitForm = data => {
    //alert(data.name);
    toast.success('Empleado agregado existosamente');
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.newEmployee}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{adminPages.newEmployee}</h1>
      <AddEmployeeForm id={fillWithZero(3)} onSubmitHandler={onSubmitForm} />
    </main>
  );
}
