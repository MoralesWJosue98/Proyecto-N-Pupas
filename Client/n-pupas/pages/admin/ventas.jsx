import { CustomModal } from 'components/layout/modal/custom-modal';
import SectionTitle from 'components/information/section-title';
import PageHeading from 'components/information/page-heading';
import { branchCookie, tokenCookie } from 'constants/data';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { adminPages, titles } from 'constants/strings';
import SaleTableRow from 'components/tables/saleRow';
import { PupuseriaApi } from 'services/PupuseriaApi';
import { confirmAlert } from 'react-confirm-alert';
import SaleCard from 'components/cards/sale';
import { adminRoutes } from 'routes/routes';
import { getCookie } from 'cookies-next';
import toast from 'react-hot-toast';
import Head from 'next/head';
import { calculateSaleTotal } from 'utils/utils';

const pupuseriaApi = new PupuseriaApi();

const SalesPage = ({ salesByProduct, total, allSales }) => {
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
        <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
          {allSales.map(sale => {
            return (
              <SaleCard
                sale={sale}
                total={calculateSaleTotal(sale.details)}
                key={sale.id}
                onDeleteHandler={() => onDeleteHandler(sale.id)}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default SalesPage;

export async function getServerSideProps({ req, res }) {
  const branchID = getCookie(branchCookie, { req, res });
  const token = getCookie(tokenCookie, { req, res });

  try {
    const products = await pupuseriaApi.getAllProducts(token);
    const todaySales = await pupuseriaApi.getTodaySales(token, branchID);
    const allSales = await pupuseriaApi.getAllSales(token, branchID);

    const salesByProduct = [];
    const details = [];
    let total = 0;

    todaySales.forEach(sale => {
      details.push(...sale.details);
    });

    products.forEach(product => {
      salesByProduct.push({ product: product, soldAmount: 0 });
    });

    details.forEach(detail => {
      salesByProduct.forEach(saleByProduct => {
        if (saleByProduct.product.id == detail.product.id) {
          saleByProduct.soldAmount += detail.amount;
          total += detail.total;
        }
      });
    });

    return {
      props: {
        salesByProduct: salesByProduct,
        total: total.toFixed(2),
        allSales: allSales.reverse(),
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
