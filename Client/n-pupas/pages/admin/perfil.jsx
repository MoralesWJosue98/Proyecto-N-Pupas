import SecondaryButton from 'components/buttons/secondary';
import { profilePageName } from 'constants/strings';
import ProfileCard from 'components/cards/profile';
import { testAdmin } from 'data/tempObjects';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loginRoute } from 'routes/routes';

const EmployeeProfilePage = () => {
    const router = useRouter();

    const handleOnLogout = () => {
        router.push(loginRoute);
    };

    return (
        <main className='p-6 flex flex-col gap-5'>
            <Head>
                <title>{profilePageName}</title>
            </Head>
            <h1 className='font-bold text-2xl sm:text-3xl'>{profilePageName}</h1>
            <ProfileCard employee={testAdmin} />
            <div className='flex justify-center mt-4'>
                <SecondaryButton
                    text='Cerrar sesión'
                    onClickHandler={handleOnLogout}
                    isRed={true}
                />
            </div>
        </main>
    );
};

export default EmployeeProfilePage;