import 'react-confirm-alert/src/react-confirm-alert.css';
import { adminPages } from 'constants/strings';
import Head from 'next/head';

const ReportesPages = ({ }) => {
 
  return (
    <main className='p-6 flex flex-col gap-5'>
        <Head>
            <title>{adminPages.reportsEmployee}</title>
        </Head>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-center md:my-3'>{adminPages.reportsEmployee}</h1>
      <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
      </div>
    </main>
  );

};

export default ReportesPages;
