import { CustomModal } from 'components/layout/modal/custom-modal';
import PageHeading from 'components/information/page-heading';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { PupuseriaApi } from 'services/PupuseriaApi';
import { confirmAlert } from 'react-confirm-alert';
import BranchCard from 'components/cards/branch';
import { adminPages } from 'constants/strings';
import { tokenCookie } from 'constants/data';
import { adminRoutes } from 'routes/routes';
import { getCookie } from 'cookies-next';
import toast from 'react-hot-toast';
import Head from 'next/head';

const pupuseriaApi = new PupuseriaApi();

const BranchesPage = ({ branches }) => {
  const deleteBranch = () => {
    // Lógica para eliminar
    toast.success('Sucursal eliminada exitosamente');
  };

  const onDeleteHandler = branchName => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomModal
            onClose={onClose}
            onConfirm={deleteBranch}
            text={`¿Segura/o que quieres eliminar la sucursal "${branchName}"?`}
          />
        );
      },
    });
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.branches}</title>
      </Head>
      <PageHeading title={adminPages.branches} route={adminRoutes.newBranch} />
      <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
        {branches.map(branch => {
          return (
            <BranchCard
              branch={branch}
              key={branch.id}
              onDeleteHandler={() => onDeleteHandler(branch.name)}
            />
          );
        })}
      </div>
    </main>
  );
};

export default BranchesPage;

export async function getServerSideProps({ req, res }) {
  const token = getCookie(tokenCookie, { req, res });

  try {
    const allBranches = await pupuseriaApi.getAllBranches(token);
    return {
      props: {
        branches: allBranches,
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
