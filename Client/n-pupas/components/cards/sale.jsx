import { crudActionTypes } from 'constants/strings';
import CrudButton from 'components/buttons/crud';
import { adminRoutes } from 'routes/routes';
import { useRouter } from 'next/router';

const SaleCard = ({ history, onDeleteHandler }) => {
  const router = useRouter();

  const handleOnUpdate = () => {
    router.push(`${adminRoutes.editSale}/${history.id}`);
  };

  const handleOnDelete = () => {
    onDeleteHandler();
  };

  return (
    <article className='bg-white shadow-md p-4'>
      <div className='flex flex-col mb-2  '>
        <h1 className='text-gray-500 font-bold text-xl'>Venta ID</h1>
        <p>{` ${history.date}`}</p>
        <div className='font-bold flex flex-auto justify-between mt-4'>
          <p>{history.name} x{history.amount}</p>
          <p>{`$${history.price}`}</p>
        </div>
        <div className='font-bold flex flex-auto justify-between text-primary-500 '>
          <p className='mt-2'>Total</p>
          <p>{` $${history.total}`} </p>
        </div>
        <div>
          <CrudButton actionType={crudActionTypes.update} onClickHandler={handleOnUpdate} />
          <CrudButton actionType={crudActionTypes.delete} onClickHandler={handleOnDelete} />
        </div>
      </div>
    </article>
  );
};

export default SaleCard;
