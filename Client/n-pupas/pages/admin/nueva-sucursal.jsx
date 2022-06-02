import AddBranchForm from 'components/forms/add-branch';
import { adminPages } from 'constants/strings';
import toast from 'react-hot-toast';
import Head from 'next/head';
import React from 'react';

export default function NewBranchPage() {
  const onSubmitForm = data => {
    //alert(data.address);
    toast.success('Sucursal agregada existosamente');
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.newBranch}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-center md:my-3'>{adminPages.newBranch}</h1>
      <AddBranchForm onSubmitHandler={onSubmitForm} />
    </main>
  );
}
