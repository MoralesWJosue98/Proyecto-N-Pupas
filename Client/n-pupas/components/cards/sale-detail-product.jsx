import { crudActionTypes } from 'constants/strings';
import CrudButton from 'components/buttons/crud';

const SaleDetailProductCard = ({ addedProduct, onDeleteHandler }) => {
  const handleOnDelete = () => {
    onDeleteHandler();
  };

  return (
    <article className='bg-white shadow-md flex'>
      <div className='p-3 flex w-full flex-col'>
        <div className='flex flex-col xs:flex-row xs:justify-between font-bold '>
          <h2>{addedProduct.product.name}</h2>
          <p>
            {' '}
            {addedProduct.quantity > 0
              ? `$${(addedProduct.product.price * addedProduct.quantity).toFixed(2)}`
              : `$${addedProduct.product.price.toFixed(2)}`}{' '}
          </p>
        </div>
        <div className='flex gap-3'>
          {addedProduct.product.type === 1 && (
            <p className='text-sm'>{addedProduct.dough == 1 ? 'Arroz' : 'Maíz'}</p>
          )}
          <p className='text-sm'>{addedProduct.quantity > 0 ? `x${addedProduct.quantity}` : ''}</p>
        </div>

        <div>
          <CrudButton actionType={crudActionTypes.delete} onClickHandler={handleOnDelete} />
        </div>
      </div>
    </article>
  );
};

export default SaleDetailProductCard;
