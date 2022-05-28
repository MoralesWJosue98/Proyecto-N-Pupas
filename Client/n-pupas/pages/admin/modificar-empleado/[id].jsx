import AddEmployeeForm from 'components/forms/add-employee';
import { adminPages } from 'constants/strings';
import { testAdmin } from 'data/tempObjects';
import { fillWithZero } from 'utils/utils';
import Head from 'next/head';

export default function editEmployeePage({ employee }) {
  const onSubmitForm = (data) => {
    alert(data.name);
  }

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.editEmployee}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{adminPages.editEmployee}</h1>
      <AddEmployeeForm onSubmitHandler={onSubmitForm} id={fillWithZero(3)} employee={employee}/>
    </main>
  );
}

export async function getServerSideProps(context) {
    const employeeId = context.query;
  
    // Fetch para obtener producto según id
  
    return {
      props: {
        employee: testAdmin,
      },
    };
  }