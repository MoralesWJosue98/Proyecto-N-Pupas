import moment from 'moment';

export const fillWithZero = number => {
  return String(number).padStart(8, '0');
};

export const getProductDetails = (products, id) => {
  const product = products.filter(product => product.id == id);
  return product[0];
};

export const checkForProduct = (addedProducts, product, formData) => {
  const found = false;

  addedProducts.forEach(obj => {
    if (
      (obj.idProducto == product.id && obj.mass == formData.dough) ||
      obj.idProducto == product.id
    ) {
      obj.amount += Number(formData.quantity);
      obj.total += Number(formData.quantity * obj.product.price);
      found = true;
    }
  });

  if (!found) {
    return [
      ...addedProducts,
      {
        idProducto: product.id,
        product: product,
        amount: Number(formData.quantity),
        mass: Number(formData.dough),
        total: Number(product.price * formData.quantity),
      },
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

export const calculateTodayExpenses = purchases => {
  let total = 0;
  purchases.forEach(purchase => {
    total += purchase.amount;
  });

  return total.toFixed(2);
};

const getDate = () => {
  const date = new Date();

  const dd = String(date.getDate()).padStart(2, '0');
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return `${yyyy}-${MM}-${dd}`;
};

export const createSaleObject = details => {
  const saleDetails = [];

  details.forEach(detail => {
    saleDetails.push({
      idProducto: detail.idProducto,
      amount: detail.amount,
      mass: detail.mass,
      total: detail.total,
    });
  });

  return {
    date: getDate(),
    details: saleDetails,
  };
};

export const calculateSaleTotal = details => {
  const total = 0;
  details.forEach(detail => {
    total += detail.total;
  });

  return Number(total);
};

export const calculateSoldProducts = details => {
  const total = 0;
  details.forEach(detail => {
    total += detail.amount;
  });

  return Number(total);
};

export const calculateAllSalesTotal = sales => {
  const total = 0;
  sales.forEach(sale => {
    total += calculateSaleTotal(sale.details);
  });

  return Number(total);
};

