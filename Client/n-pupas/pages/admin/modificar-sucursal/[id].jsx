import AddBranchForm from 'components/forms/add-branch';
import { adminPages } from 'constants/strings';
import { getCookie } from 'cookies-next';
import { tokenCookie } from 'constants/data';
import { PupuseriaApi } from 'services/PupuseriaApi';
import toast from 'react-hot-toast';
import Head from 'next/head';
import React from 'react';

const pupuseriaApi = new PupuseriaApi();

export default function editBranchPage({ branch }) {
  const onSubmitForm = data => {
    //alert(data.address);
    toast.success('Cambios guardados con éxito');
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.editBranch}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-center md:my-3'>
        {adminPages.editBranch}
      </h1>
      <AddBranchForm onSubmitHandler={onSubmitForm} branch={branch} />
    </main>
  );
}

export async function getServerSideProps({ query, req, res }) {
  const token = getCookie(tokenCookie, { req, res });
  const branchId = query.id;

  try {
    const branch = await pupuseriaApi.getOneBranch(token, branchId);
    return {
      props: {
        branch: branch,
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
