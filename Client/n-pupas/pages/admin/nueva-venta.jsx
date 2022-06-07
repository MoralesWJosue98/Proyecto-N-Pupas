import SaleDetailProductCard from 'components/cards/sale-detail-product';
import { SaleProductModal } from 'components/layout/modal/sale-modal';
import SaleProductsSection from 'components/sections/sale-products';
import { categories, testProducts } from 'data/tempObjects';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import { adminPages } from 'constants/strings';
import { checkForProduct } from 'utils/utils';
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

  const addProduct = (product, formData) => {
    setAddedProducts(checkForProduct(addedProducts, product.id, formData));
    setSaleTotal((Number(saleTotal) + product.price * Number(formData.quantity)).toFixed(2));
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
        return <SaleProductModal onClose={onClose} onSave={addProduct} product={product} />;
      },
    });
  };

  return (
    <main className='flex flex-col gap-5'>
      <Head>
        <title>{adminPages.newSale}</title>
      </Head>
      <div className='flex flex-col gap-5 lg:flex-row lg:grid lg:grid-cols-7'>
        <div className='col-span-5 p-6 flex flex-col gap-5'>
          <h1 className='font-bold text-2xl sm:text-3xl'>{adminPages.newSale}</h1>
          {categories.map(category => {
            return (
              <SaleProductsSection
                key={category.id}
                products={products}
                category={category}
                onClickHandler={openProductModal}
              />
            );
          })}
        </div>
        <div className='flex flex-col gap-5 col-span-2 bg-gray-200 p-6 lg:p-4'>
          <h2 className='text-xl sm:text-2xl font-bold mt-3'>Detalle</h2>
          {saleTotal > 0 ? (
            <div className='flex justify-between items-center'>
              <p className='text-primary-500 font-bold text-lg sm:text-xl text-right'>
                Total: ${saleTotal}
              </p>
              <button
                type='button'
                onClick={() => addSale()}
                className='px-4 py-2 bg-primary-500 font-bold text-white uppercase rounded-md border-2 border-transparent cursor-pointer hover:bg-primary-700 transform transition duration-300 ease-in-out'
              >
                Realizar venta
              </button>
            </div>
          ) : (
            <p className='text-lg'>No hay productos agregados.</p>
          )}
          {addedProducts.map((obj, index) => {
            return (
              <SaleDetailProductCard
                key={obj.product.id}
                detailProduct={obj}
                onDeleteHandler={() => deleteProductFromList(index)}
              />
            );
          })}
        </div>
      </div>
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
