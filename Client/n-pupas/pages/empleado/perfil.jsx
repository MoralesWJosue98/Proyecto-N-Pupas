import { CustomModal } from 'components/layout/modal/custom-modal';
import SecondaryButton from 'components/buttons/secondary';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { profilePageName } from 'constants/strings';
import { confirmAlert } from 'react-confirm-alert';
import ProfileCard from 'components/cards/profile';
import { testEmployee } from 'data/tempObjects';
import Head from 'next/head';

const EmployeeProfilePage = () => {
  const router = useRouter();

  const logout = () => {
    // Lógica para cerrar sesión
    router.push(loginRoute);
  };

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
      <ProfileCard employee={testEmployee} />
      <div className='flex justify-center mt-4'>
        <SecondaryButton text='Cerrar sesión' onClickHandler={handleOnLogout} isRed={true} />
      </div>
    </main>
  );
};

export default EmployeeProfilePage;
