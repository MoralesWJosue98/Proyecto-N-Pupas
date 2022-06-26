import { CustomModal } from 'components/layout/modal/custom-modal';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReportECard from 'components/cards/report-card';
import { PupuseriaApi } from 'services/PupuseriaApi';
import { confirmAlert } from 'react-confirm-alert';
import { testComments } from 'data/tempObjects';
import { adminPages } from 'constants/strings';
import { branchCookie } from 'constants/data';
import { tokenCookie } from 'constants/data';
import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import toast from 'react-hot-toast';
import Head from 'next/head';

const pupuseriaApi = new PupuseriaApi();

const ReportesPages = ({ allEmployees }) => {
  const [employees, setEmployees] = useState(allEmployees);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const { token } = useAuthContext();
  const { branchID } = useBranchContext();

  console.log(allEmployees);

  useEffect(() => {
    const getEmployees = async () => {
      const employees = await pupuseriaApi.getAllEmployees(token, branchID);
      setEmployees(employees);
    };
    getEmployees();
  }, [deleteToggle]);

  const deleteReport = async id => {
    try {
      const deleted = await pupuseriaApi.deleteReport(token, branchID, id);
      if (deleted) {
        setDeleteToggle(!deleteToggle);
        toast.success('Reporte eliminado exitosamente');
      } else {
        toast.error('No se pudo eliminar el empleado');
      }
    } catch (e) {
      console.log(e);
      toast.error('Ocurrió un error interno');
    }
   
  };

  const onDeleteHandler = reportId => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomModal
            onClose={onClose}
            onConfirm={() => deleteReport(reportId)}
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

export async function getServerSideProps({ req, res }) {
  const token = getCookie(tokenCookie, { req, res });
  const branchID = getCookie(branchCookie, { req, res });

  try {
    const allEmployees = await pupuseriaApi.getAllEmployees(token, branchID);
    return {
      props: {
        allEmployees: allEmployees,
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
