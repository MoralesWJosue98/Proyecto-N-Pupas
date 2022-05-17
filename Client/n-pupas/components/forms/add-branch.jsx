import PrimaryButton from 'components/buttons/primary';
import { useForm } from 'react-hook-form';

const AddBranchForm = ({ onSubmitHandler, branch = false }) => {
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
          placeholder='Dirección'
          defaultValue={branch ? branch.address : ''}
          className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('address', {
            required: 'Dirección requerida',
            maxLength: {
              value: 80,
              message: 'El máximo de caracteres es 80',
            },
          })}
        />
        {errors.address && <p className='mt-1 text-red-700'>{errors.address.message}</p>}
      </div>
      <div>
        <input
          type='text'
          placeholder='Nombre'
          defaultValue={branch ? branch.name : ''}
          className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('name', {
            required: 'Nombre requerido',
            maxLength: {
              value: 80,
              message: 'El máximo de caracteres es 80',
            },
          })}
        />
        {errors.name && <p className='mt-1 text-red-700'>{errors.name.message}</p>}
      </div>
      <div>
        <input
          type='text'
          placeholder='Fecha de apertura'
          defaultValue={branch ? branch.date : ''}
          onFocus={e => (e.target.type = 'date')}
          className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('date', { required: 'Fecha de apertura requerida' })}
        />
        {errors.date && <p className='mt-1 text-red-700'>{errors.date.message}</p>}
      </div>
      <PrimaryButton text={branch ? 'Guardar' : 'Agregar'} />
    </form>
  );
};

export default AddBranchForm;
