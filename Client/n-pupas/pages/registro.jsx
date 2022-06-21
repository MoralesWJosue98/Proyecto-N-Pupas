import { registerPageName } from 'constants/strings';
import RegisterForm from 'components/forms/register';
import { PupuseriaApi } from 'services/PupuseriaApi';
import { adminRoutes } from 'routes/routes';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Head from 'next/head';
import useAuthContext from 'context/AuthContext';

const RegisterPage = () => {
  const pupuseriaApi = new PupuseriaApi();
  const router = useRouter();
  const { login } = useAuthContext();

  const onSubmitForm = async data => {
    delete data.password_repeat;

    try {
      const response = await pupuseriaApi.registerAdmin(data);

      if (!response.ok) {
        const errorObj = await response.json();
        toast.error(errorObj.message);
      } else {
        toast.success('Usuario registrado existosamente');
        login({ username: data.username, password: data.Password });
      }
    } catch (e) {
      toast.error('Ocurrió un error');
    }
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{registerPageName}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-center md:my-3'>{registerPageName}</h1>
      <RegisterForm onSubmitHandler={onSubmitForm} />
    </main>
  );
};

export default RegisterPage;
