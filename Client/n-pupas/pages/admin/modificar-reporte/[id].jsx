import AddEmployeeReportForm from 'components/forms/add-report';
import { testComments } from 'data/tempObjects';
import { adminPages } from 'constants/strings';
import toast from 'react-hot-toast';
import Head from 'next/head';

export default function editReport({ report }) {
  const onSubmitForm = (data) => {
    //alert(data.name);
    toast.success('Cambios guardados con éxito');
  }

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.editReport}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-center md:my-3'>{adminPages.editReport}</h1>
      <AddEmployeeReportForm onSubmitHandler={onSubmitForm} report={report}/>
    </main>
  );
}

export async function getServerSideProps(context) {
  const reportId = context.query;

  // Fetch para obtener producto según id

  return {
    props: {
      product: testComments[0],
    },
  };
}