import { CustomModal } from 'components/layout/modal/custom-modal';
import SectionTitle from 'components/information/section-title';
import PageHeading from 'components/information/page-heading';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { adminPages, titles } from 'constants/strings';
import { confirmAlert } from 'react-confirm-alert';
import ProductCard from 'components/cards/product';
import { testProducts } from 'data/tempObjects';
import { adminRoutes } from 'routes/routes';
import toast from 'react-hot-toast';
import Head from 'next/head';

const MenuPage = ({ products }) => {
  const deleteProduct = () => {
    // Lógica para eliminar
    toast.success('Producto eliminado exitosamente');
  };

  const onDeleteHandler = productName => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomModal
            onClose={onClose}
            onConfirm={deleteProduct}
            text={`¿Segura/o que quieres eliminar "${productName}" del menú?`}
          />
        );
      },
    });
  };

  const food = [];
  const drinks = [];

  products.forEach(product => {
    product.type === 'food' ? food.push(product) : drinks.push(product);
  });

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.menu}</title>
      </Head>
      <PageHeading title={adminPages.menu} route={adminRoutes.newProduct} />

      <section className='flex flex-col gap-4'>
        <SectionTitle title={titles.groceries} />
        {food.map(product => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              onDeleteHandler={() => onDeleteHandler(product.name)}
            />
          );
        })}
      </section>

      <section className='flex flex-col gap-4'>
        <SectionTitle title={titles.drinks} />
        {drinks.map(product => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              onDeleteHandler={() => onDeleteHandler(product.name)}
            />
          );
        })}
      </section>
    </main>
  );
};

export default MenuPage;

export async function getServerSideProps() {
  return {
    props: {
      products: testProducts,
    },
  };
}
