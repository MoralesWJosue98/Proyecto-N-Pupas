import AddEmployeeForm from 'components/forms/add-employee';
import { adminPages } from 'constants/strings';
import { fillWithZero } from 'utils/utils';
import Head from 'next/head';

export default function NewEmployeePage() {
  const onSubmitForm = data => {
    alert(data.name);
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
