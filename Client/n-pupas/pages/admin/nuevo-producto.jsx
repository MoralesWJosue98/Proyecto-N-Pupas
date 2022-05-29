import AddProductForm from 'components/forms/add-product';
import { adminPages } from 'constants/strings';
import Head from 'next/head';

export default function NewProductPage() {
  const onSubmitForm = data => {
    alert(data.name);
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.newProduct}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{adminPages.newProduct}</h1>
      <AddProductForm onSubmitHandler={onSubmitForm} />
    </main>
  );
}
