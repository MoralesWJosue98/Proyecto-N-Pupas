import 'react-confirm-alert/src/react-confirm-alert.css';
import { adminPages } from 'constants/strings';
import Head from 'next/head';
import ReportECard from 'components/cards/report-card';
import { testComments } from 'data/tempObjects';


const ReportesPages = ({ }) => {
    const deleteReport = () => {
        // Lógica para eliminar
        toast.success('Reporte eliminado exitosamente');
    };
    
  return (
    <main className='p-6 flex flex-col gap-5'>
        <Head>
            <title>{adminPages.reportsEmployee}</title>
        </Head>
      <h1 className='font-bold text-2xl sm:text-3xl  md:my-3'>{adminPages.reportsEmployee}</h1>
      <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
      {testComments.map(comment => {
          return (
            <ReportECard
              comment={comment}
              key={comment.id}
              onDeleteHandler={() => onDeleteHandler(comment.name)}
            />
          );
        })}
      </div>
    </main>
  );

};

export default ReportesPages;
