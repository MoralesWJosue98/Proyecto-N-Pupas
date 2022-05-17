import PrimaryButton from 'components/buttons/primary';
import { categories } from 'data/tempObjects';
import { useForm } from 'react-hook-form';

const AddProductForm = ({ onSubmitHandler, product = false }) => {
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
          placeholder='Nombre'
          defaultValue={product ? product.name : ''}
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
          type='number'
          placeholder='Precio'
          defaultValue={product ? product.price : ''}
          className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('price', {
            required: 'Precio requerido',
            min: { value: 0.01, message: 'La cantidad debe ser mayor a $0.01' },
          })}
        />
        {errors.price && <p className='mt-1 text-red-700'>{errors.price.message}</p>}
      </div>
      <div>
        <select
          className='shadow border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('category', { required: 'Categoría requerida' })}
        >
          {categories.map(category => {
            return (
              <option key={category.id} value={category.id}>
                {category.category}
              </option>
            );
          })}
        </select>
        {errors.category && <p className='mt-1 text-red-700'>{errors.category.message}</p>}
      </div>
      <PrimaryButton text={product ? 'Guardar' : 'Agregar'} />
    </form>
  );
};

export default AddProductForm;