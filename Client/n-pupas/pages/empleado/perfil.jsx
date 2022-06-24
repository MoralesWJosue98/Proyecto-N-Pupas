import ProfileCardEmployee from 'components/cards/profile-employee';
import { CustomModal } from 'components/layout/modal/custom-modal';
import SecondaryButton from 'components/buttons/secondary';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { PupuseriaApi } from 'services/PupuseriaApi';
import { profilePageName } from 'constants/strings';
import { confirmAlert } from 'react-confirm-alert';
import useAuthContext from 'context/AuthContext';
import { tokenCookie } from 'constants/data';
import { getCookie } from 'cookies-next';
import Head from 'next/head';

const pupuseriaApi = new PupuseriaApi();

const EmployeeProfilePage = ({ employee }) => {
  const { logout } = useAuthContext();

  const handleOnLogout = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomModal
            onClose={onClose}
            onConfirm={logout}
            text={`¿Segura/o que quieres cerrar sesión?`}
            confirmText='Confirmar'
          />
        );
      },
    });
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{profilePageName}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{profilePageName}</h1>
      <ProfileCardEmployee employee={employee} />
      <div className='flex justify-center mt-4'>
        <SecondaryButton text='Cerrar sesión' onClickHandler={handleOnLogout} isRed={true} />
      </div>
    </main>
  );
};

export default EmployeeProfilePage;

export async function getServerSideProps({ req, res }) {
  const token = getCookie(tokenCookie, { req, res });

  try {
    const employeeInfo = await pupuseriaApi.getEmployeeInfo(token);
    return {
      props: {
        employee: employeeInfo,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      redirect: {
        destination: '/500',
      },
    };
  }
}
