import SectionTitle from 'components/information/section-title';
import PageHeading from 'components/information/page-heading';
import { adminPages, titles } from 'constants/strings';
import ProductCard from 'components/cards/product';
import { testProducts } from 'data/tempObjects';
import { adminRoutes } from 'routes/routes';
import Head from 'next/head';

const MenuPage = ({ products }) => {
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
                    return <ProductCard product={product} key={product.id} />;
                })}
            </section>

            <section className='flex flex-col gap-4'>
                <SectionTitle title={titles.drinks} />
                {drinks.map(product => {
                    return <ProductCard product={product} key={product.id} />;
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