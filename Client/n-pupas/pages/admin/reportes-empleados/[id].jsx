import { CustomModal } from 'components/layout/modal/custom-modal';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReportECard from 'components/cards/report-card';
import { PupuseriaApi } from 'services/PupuseriaApi';
import { confirmAlert } from 'react-confirm-alert';
import { adminPages } from 'constants/strings';
import { branchCookie } from 'constants/data';
import { tokenCookie } from 'constants/data';
import { getCookie } from 'cookies-next';
import toast from 'react-hot-toast';
import Head from 'next/head';

const pupuseriaApi = new PupuseriaApi();

const ReportesPages = ({ employee }) => {
  console.log(employee);
  const deleteReport = () => {
    // Lógica para eliminar
    toast.success('Reporte eliminado exitosamente');
  };

  const onDeleteHandler = report => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomModal
            onClose={onClose}
            onConfirm={deleteReport}
            text={`¿Segura/o que quieres eliminar el reporte de "${report}"?`}
          />
        );
      },
    });
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.reportsEmployee}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl  md:my-3'>Reportes a {employee.user.name}</h1>
      <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
        {employee.reports.map(report => {
          return (
            <ReportECard
              comment={report}
              key={report.id}
              onDeleteHandler={() => onDeleteHandler(report.name)}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ReportesPages;

export async function getServerSideProps({ query, req, res }) {
  const token = getCookie(tokenCookie, { req, res });
  const branchID = getCookie(branchCookie, { req, res });
  const employeeID = query.id;

  try {
    const employee = await pupuseriaApi.getOneEmployee(token, branchID, employeeID);
    return {
      props: {
        employee: employee,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/500',
      },
    };
  }
}
