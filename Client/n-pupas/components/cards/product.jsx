import ProductInfo from 'components/information/product-info';
import { crudActionTypes } from 'constants/strings';
import CrudButton from 'components/buttons/crud';
import { adminRoutes } from 'routes/routes';
import { useRouter } from 'next/router';

const ProductCard = ({ product, quantity = 0 }) => {
  const router = useRouter();

  const handleOnModify = () => {
    router.push(`${adminRoutes.editProduct}/${product.id}`)
  };

  const handleOnDelete = () => {
    alert('Próximamente se va a poder eliminar');
  };

  return (
    <article className='bg-white shadow-md p-4'>
      <ProductInfo product={product} quantity={quantity} />
      <div>
        <CrudButton actionType={crudActionTypes.update} onClickHandler={handleOnModify} />
        <CrudButton actionType={crudActionTypes.delete} onClickHandler={handleOnDelete} />
      </div>
    </article>
  );
};

export default ProductCard;