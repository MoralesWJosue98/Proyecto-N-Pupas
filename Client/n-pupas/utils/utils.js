import { testProducts } from 'data/tempObjects';

export const fillWithZero = number => {
  return String(number).padStart(8, '0');
};

export const getProductDetails = (products, id) => {
  const product = products.filter(product => product.id == id);
  return product[0];
};

export const checkForProduct = (addedProducts, id, quantity) => {
  const product = getProductDetails(testProducts, id);
  const found = false;

  addedProducts.forEach(obj => {
    if (obj.product.id == id) {
      obj.quantity += Number(quantity);
      found = true;
    }
  });

  if (!found) {
    return [...addedProducts, { product: product, quantity: Number(quantity) }];
  }

  return addedProducts;
};