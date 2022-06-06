import { SaleProductModal } from 'components/layout/modal/sale-modal';
import SaleProductsSection from 'components/sections/sale-products';
import { checkForProduct, getProductDetails } from 'utils/utils';
import SimpleProductCard from 'components/cards/simple-product';
import { categories, testProducts } from 'data/tempObjects';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import { adminPages } from 'constants/strings';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useState } from 'react';
import Head from 'next/head';
import React from 'react';

export default function NewSalePage({ products, categories }) {
  const [saleTotal, setSaleTotal] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]);

  useEffect(() => {
    let total = 0;

    addedProducts.forEach(added => {
      total += Number(added.product.price) * Number(added.quantity);
    });

    setSaleTotal(total.toFixed(2));
  }, [addedProducts]);

  const addProduct = (productId, quantity) => {
    const product = getProductDetails(testProducts, productId);

    setAddedProducts(checkForProduct(addedProducts, productId, quantity));
    setSaleTotal((Number(saleTotal) + product.price * Number(quantity)).toFixed(2));
  };

  const deleteProductFromList = index => {
    const auxProducts = [...addedProducts];
    if (index > -1) {
      auxProducts.splice(index, 1);
    }
    setAddedProducts(auxProducts);
  };

  const addSale = () => {
    setAddedProducts([]);
    toast.success('Venta guardada existosamente');
  };

  const openProductModal = product => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return <SaleProductModal onClose={onClose} onSave={onClose} product={product} />;
      },
    });
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.newSale}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{adminPages.newSale}</h1>

      {categories.map(category => {
        return (
          <SaleProductsSection
            products={products}
            category={category}
            onClickHandler={openProductModal}
          />
        );
      })}

      {saleTotal > 0 && (
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl sm:text-2xl font-bold mt-5'>Detalle</h2>
          {addedProducts.map((obj, index) => {
            return (
              <SimpleProductCard
                key={obj.product.id}
                product={obj.product}
                quantity={obj.quantity}
                onDeleteHandler={() => deleteProductFromList(index)}
              />
            );
          })}
          <p className='text-primary-500 font-bold text-lg text-right'>Total: ${saleTotal}</p>
          <button
            type='button'
            onClick={() => addSale()}
            className='mt-4 w-full px-6 py-2 bg-primary-500 font-bold text-white uppercase rounded-md border-2 border-transparent cursor-pointer hover:bg-primary-700 transform transition duration-300 ease-in-out'
          >
            Realizar venta
          </button>
        </div>
      )}
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      products: testProducts,
      categories: categories,
    },
  };
}
