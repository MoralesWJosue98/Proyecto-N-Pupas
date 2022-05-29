import AddEmployeeReportForm from 'components/forms/add-report';
import { testEmployee } from 'data/tempObjects';
import { adminPages } from 'constants/strings';
import Head from 'next/head';

export default function NewEmployeeReportPage({ employee }) {
  const onSubmitForm = data => {
    alert(data.report);
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.newReport}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{adminPages.newReport}</h1>
      <h2 className='font-bold'>Para {employee.name}</h2>
      <AddEmployeeReportForm onSubmitHandler={onSubmitForm} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const employeeId = context.query;

  // Fetch para obtener empleado según id

  return {
    props: {
      employee: testEmployee,
    },
  };
}
