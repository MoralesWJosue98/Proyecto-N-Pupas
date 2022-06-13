import BranchSelect from 'components/forms/branchSelect';
import { PupuseriaApi } from 'services/PupuseriaApi';
import { homePageName } from 'constants/strings';
import { tokenCookie } from 'constants/data';
import HomeMenu from 'components/menu/menu';
import useBranchContext from 'context/BranchContext';
import { getCookie } from 'cookies-next';
import { useEffect } from 'react';
import Head from 'next/head';

const pupuseriaApi = new PupuseriaApi();

const AdminHomePage = ({ branches }) => {
  const { branchID, setBranchID } = useBranchContext();

  useEffect(() => {
    if (!branchID) {
      setBranchID(branches[0].id);
    }
  }, [branches, branchID, setBranchID]);

  const changeBranch = id => {
    setBranchID(id);
  };

  const testPupuseriaName = 'La bendición';

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{homePageName}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{homePageName}</h1>
      <section className='mb-4'>
        <h2 className='text-primary-500 font-bold text-lg mb-3'>{`Pupusería ${testPupuseriaName}`}</h2>
        <BranchSelect onChangeHandler={changeBranch} branches={branches} value={branchID} />
      </section>
      <HomeMenu isAdmin={true} />
    </main>
  );
};

export default AdminHomePage;

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
