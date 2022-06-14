import SectionTitle from 'components/information/section-title';
import PageHeading from 'components/information/page-heading';
import PurchaseTableRow from 'components/tables/purchaseRow';
import { branchCookie, tokenCookie } from 'constants/data';
import { adminPages, titles } from 'constants/strings';
import { PupuseriaApi } from 'services/PupuseriaApi';
import { calculateTodayExpenses } from 'utils/utils';
import { adminRoutes } from 'routes/routes';
import { getCookie } from 'cookies-next';
import Head from 'next/head';

const pupuseriaApi = new PupuseriaApi();

const PurchasesPage = ({ todayPurchases }) => {
  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.purchases}</title>
      </Head>
      <PageHeading title={adminPages.purchases} route={adminRoutes.newPurchase} />
      <section>
        <SectionTitle title={titles.today} />
        {todayPurchases.length > 0 ? (
          <section>
            <p className='text-lg text-primary-500 font-bold mb-5'>
              Gasto total: ${calculateTodayExpenses(todayPurchases)}
            </p>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg mb-6'>
              <table className='w-full text-sm text-left'>
                <thead>
                  <tr>
                    <th className='pl-6'>Concepto</th>
                    <th className='pl-6 '>Monto</th>
                  </tr>
                </thead>
                <tbody>
                  {todayPurchases.map(purchase => {
                    return <PurchaseTableRow key={purchase.id} purchase={purchase} />;
                  })}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          <p>No se han realizado compras este día</p>
        )}
      </section>
    </main>
  );
};

export default PurchasesPage;

export async function getServerSideProps({ req, res }) {
  const token = getCookie(tokenCookie, { req, res });
  const branchID = getCookie(branchCookie, { req, res });

  try {
    const todayPurchases = await pupuseriaApi.getTodayPurchases(token, branchID);
    return {
      props: {
        todayPurchases: todayPurchases,
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
