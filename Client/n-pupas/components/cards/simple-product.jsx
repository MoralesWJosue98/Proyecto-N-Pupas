import ProductInfo from 'components/information/product-info';
import { crudActionTypes } from 'constants/strings';
import CrudButton from 'components/buttons/crud';

const SimpleProductCard = ({ product, quantity = 0, onDeleteHandler }) => {
  const handleOnDelete = () => {
    onDeleteHandler();
  };

  return (
    <article className='bg-white shadow-md p-4'>
      <ProductInfo product={product} quantity={quantity} />
      <div>
        <CrudButton actionType={crudActionTypes.delete} onClickHandler={handleOnDelete} />
      </div>
    </article>
  );
};

export default SimpleProductCard;