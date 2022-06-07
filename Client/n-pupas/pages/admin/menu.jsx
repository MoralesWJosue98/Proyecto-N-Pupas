import MenuProductsSection from 'components/sections/menu-products';
import { CustomModal } from 'components/layout/modal/custom-modal';
import PageHeading from 'components/information/page-heading';
import { categories, testProducts } from 'data/tempObjects';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { adminPages } from 'constants/strings';
import { confirmAlert } from 'react-confirm-alert';
import { adminRoutes } from 'routes/routes';
import toast from 'react-hot-toast';
import Head from 'next/head';

const MenuPage = ({ products, categories }) => {
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

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.menu}</title>
      </Head>
      <PageHeading title={adminPages.menu} route={adminRoutes.newProduct} />

      {categories.map(category => {
        return (
          <MenuProductsSection
            key={category.id}
            products={products}
            category={category}
            onDeleteHandler={onDeleteHandler}
          />
        );
      })}
    </main>
  );
};

export default MenuPage;

export async function getServerSideProps() {
  return {
    props: {
      products: testProducts,
      categories: categories,
    },
  };
}
