import { crudActionTypes } from 'constants/strings';
import CrudButton from 'components/buttons/crud';

const SaleDetailProductCard = ({ detailProduct, onDeleteHandler }) => {
  const handleOnDelete = () => {
    onDeleteHandler();
  };

  return (
    <article className='bg-white shadow-md flex'>
      <div className='p-3 flex w-full flex-col'>
        <div className='flex flex-col xs:flex-row xs:justify-between font-bold '>
          <h2>{detailProduct.product.name}</h2>
          <p>
            {' '}
            {detailProduct.quantity > 0
              ? `$${(detailProduct.product.price * detailProduct.quantity).toFixed(2)}`
              : `$${detailProduct.product.price.toFixed(2)}`}{' '}
          </p>
        </div>
        <div className='flex gap-3'>
          {detailProduct.product.type === 1 && (
            <p className='text-sm'>{detailProduct.dough == 1 ? 'Arroz' : 'Maíz'}</p>
          )}
          <p className='text-sm'>{detailProduct.quantity > 0 ? `x${detailProduct.quantity}` : ''}</p>
        </div>

        <div>
          <CrudButton actionType={crudActionTypes.delete} onClickHandler={handleOnDelete} />
        </div>
      </div>
    </article>
  );
};

export default SaleDetailProductCard;
