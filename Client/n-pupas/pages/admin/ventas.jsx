import { testHistoryAdmin, testProducts, testSaleDetails } from 'data/tempObjects';
import { CustomModal } from 'components/layout/modal/custom-modal';
import SectionTitle from 'components/information/section-title';
import PageHeading from 'components/information/page-heading';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { adminPages, titles } from 'constants/strings';
import SaleTableRow from 'components/tables/saleRow';
import { confirmAlert } from 'react-confirm-alert';
import SaleCard from 'components/cards/sale';
import { adminRoutes } from 'routes/routes';
import toast from 'react-hot-toast';
import Head from 'next/head';

const SalesPage = ({ salesByProduct, total }) => {
  const deleteSale = () => {
    // Lógica para eliminar
    toast.success('Venta eliminada exitosamente');
  };

  const onDeleteHandler = saleId => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomModal
            onClose={onClose}
            onConfirm={deleteSale}
            text={`¿Segura/o que quieres eliminar la venta #${saleId}?`}
          />
        );
      },
    });
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.sales}</title>
      </Head>
      <PageHeading title={adminPages.sales} route={adminRoutes.newSale} />

      <section>
        <SectionTitle title={titles.today} />
        <p className='text-lg text-primary-500 font-bold'>Ingreso total: ${total}</p>
      </section>
      <section>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg mb-6'>
          <table className='w-full text-sm text-left'>
            <thead>
              <tr>
                <th className='pl-6'>Producto</th>
                <th className='pl-5 '>Cantidad</th>
                <th className='pl-6 '>Total</th>
              </tr>
            </thead>
            <tbody>
              {salesByProduct.map(sale => {
                return <SaleTableRow sale={sale} key={sale.product.id} />;
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <SectionTitle title={titles.history} />
        {testHistoryAdmin.map(history => {
          return (
            <SaleCard
              history={history}
              key={history.id}
              onDeleteHandler={() => onDeleteHandler(history.id)}
            />
          );
        })}
      </section>
    </main>
  );
};

export default SalesPage;

export async function getServerSideProps() {
  const products = testProducts;
  const sales = [];
  let total = 0;

  products.forEach(product => {
    sales.push({ product: product, soldAmount: 0 });
  });

  testSaleDetails.forEach(detail => {
    sales.forEach(sale => {
      if (sale.product.id == detail.product.id) {
        sale.soldAmount += detail.amount;
        total += detail.total;
      }
    });
  });

  return {
    props: {
      salesByProduct: sales,
      total: total.toFixed(2),
    },
  };
}
