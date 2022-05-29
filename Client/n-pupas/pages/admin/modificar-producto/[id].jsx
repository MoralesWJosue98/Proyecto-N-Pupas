import AddProductForm from 'components/forms/add-product';
import { testProducts } from 'data/tempObjects';
import { adminPages } from 'constants/strings';
import toast from 'react-hot-toast';
import Head from 'next/head';

export default function editProductPage({ product }) {
  const onSubmitForm = (data) => {
    //alert(data.name);
    toast.success('Cambios guardados con éxito');
  }

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.editProduct}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{adminPages.editProduct}</h1>
      <AddProductForm onSubmitHandler={onSubmitForm} product={product} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const productId = context.query;

  // Fetch para obtener producto según id

  return {
    props: {
      product: testProducts[0],
    },
  };
}
