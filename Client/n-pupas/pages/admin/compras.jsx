import SectionTitle from 'components/information/section-title';
import PageHeading from 'components/information/page-heading';
import { adminPages, titles } from 'constants/strings';
import { adminRoutes } from 'routes/routes';
import Head from 'next/head';
import { testPurchases } from 'data/tempObjects';
import PurchaseTableRow from 'components/tables/purchaseRow';

const PurchasesPage = () => {
    return (
        <main className='p-6 flex flex-col gap-5'>
            <Head>
                <title>{adminPages.purchases}</title>
            </Head>
            <PageHeading title={adminPages.purchases} route={adminRoutes.newPurchase} />
            <section>
                <SectionTitle title={titles.today} />
                <p className='text-lg text-primary-500 font-bold'>Gasto total: $100</p>
            </section>
            <section>
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg mb-6'>
                    <table className='w-full text-sm text-left'>
                        <thead>
                            <tr>
                                <th className='pl-6'>Concepto</th>
                                <th className='pl-6 '>Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testPurchases.map(purchase => {
                                return <PurchaseTableRow key={purchase.id} purchase={purchase} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default PurchasesPage;