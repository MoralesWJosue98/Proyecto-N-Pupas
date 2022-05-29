import AddBranchForm from 'components/forms/add-branch';
import { adminPages } from 'constants/strings';
import Head from 'next/head';
import React from 'react';

export default function NewBranchPage() {
  const onSubmitForm = data => {
    alert(data.address);
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.newBranch}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{adminPages.newBranch}</h1>
      <AddBranchForm onSubmitHandler={onSubmitForm} />
    </main>
  );
}
