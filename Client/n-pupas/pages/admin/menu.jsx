import MenuProductsSection from 'components/sections/menu-products';
import { CustomModal } from 'components/layout/modal/custom-modal';
import PageHeading from 'components/information/page-heading';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { adminPages } from 'constants/strings';
import { confirmAlert } from 'react-confirm-alert';
import { adminRoutes } from 'routes/routes';
import toast from 'react-hot-toast';
import { PupuseriaApi } from 'services/PupuseriaApi';
import { getCookie } from 'cookies-next';
import { tokenCookie } from 'constants/data';
import Head from 'next/head';

const pupuseriaApi = new PupuseriaApi();

const MenuPage = ({ productTypes, products }) => {
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

      {productTypes.map(type => {
        return (
          <MenuProductsSection
            key={type.id}
            products={products}
            type={type}
            onDeleteHandler={onDeleteHandler}
          />
        );
      })}
    </main>
  );
};

export default MenuPage;

export async function getServerSideProps({ req, res }) {
  const token = getCookie(tokenCookie, { req, res });

  try {
    const productTypes = await pupuseriaApi.getProductTypes(token);
    const products = await pupuseriaApi.getAllProducts(token);
    return {
      props: {
        productTypes: productTypes,
        products: products,
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
