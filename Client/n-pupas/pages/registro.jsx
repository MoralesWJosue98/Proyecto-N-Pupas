import { registerPageName } from 'constants/strings';
import RegisterForm from 'components/forms/register';
import Head from 'next/head';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const onSubmitForm = data => {
    toast.success('Cuenta creada exitosamente');
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
