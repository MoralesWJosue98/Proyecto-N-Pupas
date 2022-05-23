import { adminPages, loginPageName } from 'constants/strings';
import SecondaryButton from 'components/buttons/secondary';
import { adminRoutes, registerRoute } from 'routes/routes';
import LoginForm from 'components/forms/login';
import { useRouter } from 'next/router';
import logo from 'public/n-pupas.png';
import Image from 'next/image';
import Head from 'next/head';

const LoginPage = () => {
  const router = useRouter();

  const redirectToRegister = () => {
    router.push(registerRoute);
  };

  const onSubmitForm = (data) => {
    // Validaciones de credenciales
    router.push(adminRoutes.home);
  }

  return (
    <main className='w-5/6 max-w-[550px] m-auto flex flex-col justify-center gap-6 min-h-screen'>
      <Head>
        <title>{loginPageName}</title>
      </Head>

      <div className='flex flex-col items-center'>
        <Image src={logo} width={70} height={70} alt='N Pupas logo' />
        <h1 className="text-lg sm:text-xl font-bold mt-4">{loginPageName}</h1>
      </div>
      <LoginForm onSubmitHandler={onSubmitForm}/>
      <div className='flex flex-col items-center gap-4 mt-12'>
        <p className="font-bold">¿No tienes una cuenta?</p>
        <SecondaryButton text='Regístrate' onClickHandler={redirectToRegister} />
      </div>
    </main>
  );
};

export default LoginPage;
