import { homePageName } from 'constants/strings';
import HomeMenu from 'components/menu/menu';
import Head from 'next/head';

const EmployeeHomePage = () => {
  const testPupuseriaName = 'La bendición';
  const testBranchName = 'Peatonal UCA';

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{homePageName}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{homePageName}</h1>
      <section>
        <h2 className='text-primary-500 font-bold text-lg'>{`Pupusería ${testPupuseriaName}`}</h2>
        <p>{`Sucursal ${testBranchName}`}</p>
      </section>
      <HomeMenu />
    </main>
  );
};

export default EmployeeHomePage;
