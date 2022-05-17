import PrimaryButton from 'components/buttons/primary';
import { testProducts } from 'data/tempObjects';
import { useForm } from 'react-hook-form';

const AddSaleForm = ({ onSubmitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    onSubmitHandler(data.product, data.quantity);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div>
        <select
          className='shadow border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('product', { required: 'Producto requerido' })}
        >
          {testProducts.map(product => {
            return (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            );
          })}
        </select>
        {errors.product && <p className='mt-1 text-red-700'>{errors.product.message}</p>}
      </div>
      <div>
        <input
          type='number'
          placeholder='Cantidad'
          className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('quantity', {
            required: 'Cantidad requerida',
            min: { value: 1, message: 'La cantidad debe ser mayor a 1' },
          })}
        />
        {errors.quantity && <p className='mt-1 text-red-700'>{errors.quantity.message}</p>}
      </div>
      <PrimaryButton text='Agregar producto' />
    </form>
  );
};

export default AddSaleForm;
