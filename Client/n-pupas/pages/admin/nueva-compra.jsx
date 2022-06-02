import AddPurchaseForm from 'components/forms/add-purchase';
import { adminPages } from 'constants/strings';
import toast from 'react-hot-toast';
import Head from 'next/head';
import React from 'react';

export default function NewPurchasePage() {
  const onSubmitForm = data => {
    //alert(data.concept);
    toast.success('Compra agregada existosamente');
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.newPurchase}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-center md:my-3'>{adminPages.newPurchase}</h1>
      <AddPurchaseForm onSubmitHandler={onSubmitForm} />
    </main>
  );
}
