import PrimaryButton from 'components/buttons/primary';
import { useForm } from 'react-hook-form';

const AddPurchaseForm = ({ onSubmitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    onSubmitHandler(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div>
        <input
          type='text'
          placeholder='Concepto'
          className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('concept', {
            required: 'Concepto requerido',
            maxLength: {
              value: 80,
              message: 'El máximo de caracteres es 80',
            },
          })}
        />
        {errors.concept && <p className='mt-1 text-red-700'>{errors.concept.message}</p>}
      </div>
      <div>
        <input
          type='text'
          placeholder='Fecha y hora'
          onFocus={e => (e.target.type = 'datetime-local')}
          className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('datetime', { required: 'Fecha y hora requeridas' })}
        />
        {errors.datetime && <p className='mt-1 text-red-700'>{errors.datetime.message}</p>}
      </div>
      <div>
        <input
          type='number'
          placeholder='Monto'
          className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('amount', {
            required: 'Monto requerido',
            min: { value: 0.01, message: 'La cantidad debe ser mayor a $0.01' },
          })}
        />
        {errors.amount && <p className='mt-1 text-red-700'>{errors.amount.message}</p>}
      </div>
      <PrimaryButton text='Agregar' />
    </form>
  );
};

export default AddPurchaseForm;