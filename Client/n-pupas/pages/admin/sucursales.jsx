import { CustomModal } from 'components/layout/modal/custom-modal';
import PageHeading from 'components/information/page-heading';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import BranchCard from 'components/cards/branch';
import { adminPages } from 'constants/strings';
import { testBranch } from 'data/tempObjects';
import { adminRoutes } from 'routes/routes';
import toast from 'react-hot-toast';
import Head from 'next/head';

const BranchesPage = () => {
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
        {testBranch.map(branch => {
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
