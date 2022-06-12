import { testProducts } from 'data/tempObjects';

export const fillWithZero = number => {
  return String(number).padStart(8, '0');
};

export const getProductDetails = (products, id) => {
  const product = products.filter(product => product.id == id);
  return product[0];
};

export const checkForProduct = (addedProducts, id, formData) => {
  const product = getProductDetails(testProducts, id);
  const found = false;

  addedProducts.forEach(obj => {
    if (obj.product.id == id && obj.dough == formData.dough) {
      obj.quantity += Number(formData.quantity);
      found = true;
    }
  });

  if (!found) {
    return [
      ...addedProducts,
      { product: product, quantity: Number(formData.quantity), dough: formData.dough },
    ];
  }

  return addedProducts;
};

export const toFormData = data => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }

  return formData;
};
