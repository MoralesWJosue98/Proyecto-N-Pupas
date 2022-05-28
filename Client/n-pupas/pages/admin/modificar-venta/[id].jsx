import { checkForProduct, getProductDetails } from 'utils/utils';
import SimpleProductCard from 'components/cards/simple-product';
import AddSaleForm from 'components/forms/add-sale';
import { testSaleDetails } from 'data/tempObjects';
import { testProducts } from 'data/tempObjects';
import { adminPages } from 'constants/strings';
import { useEffect } from 'react';
import { useState } from 'react';
import Head from 'next/head';
import React from 'react';

export default function EditSalePage({ id, saleDetails }) {
  const [saleTotal, setSaleTotal] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]);

  const addProduct = (productId, quantity) => {
    const product = getProductDetails(testProducts, productId);

    setAddedProducts(checkForProduct(addedProducts, productId, quantity));
    setSaleTotal((Number(saleTotal) + product.price * Number(quantity)).toFixed(2));
  };

  useEffect(() => {
    const savedProducts = [];
    
    saleDetails.forEach(detail => {
      savedProducts.push({ product: detail.product, quantity: detail.amount });
    });

    setAddedProducts(savedProducts);
  }, [saleDetails]);

  useEffect(() => {
    let total = 0;

    addedProducts.forEach(added => {
      total += Number(added.product.price) * Number(added.quantity);
    });

    setSaleTotal(total.toFixed(2));
  }, [addedProducts]);

  const deleteProductFromList = index => {
    const auxProducts = [...addedProducts];
    if (index > -1) {
      auxProducts.splice(index, 1);
    }
    setAddedProducts(auxProducts);
  };

  const addSale = () => {
    alert('Va a modificar los detalles de la venta correspondiente');
  };

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{adminPages.editSale}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{adminPages.editSale}</h1>
      <h2 className='text-xl sm:text-2xl font-bold mt-5'>Agregar productos</h2>
      <AddSaleForm onSubmitHandler={addProduct} />
      {saleTotal > 0 && (
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl sm:text-2xl font-bold mt-5'>Detalle de venta #{id.id}</h2>
        
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
            Guardar cambios
          </button>
        </div>
      )}
    </main>
  );
}

export async function getServerSideProps(context) {
    const saleId = context.query;
  
    // Fetch para obtener venta según id
  
    return {
      props: {
        id: saleId,
        saleDetails: testSaleDetails,
      },
    };
  }
  