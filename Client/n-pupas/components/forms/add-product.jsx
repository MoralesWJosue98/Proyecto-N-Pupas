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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full md:max-w-[900px] mx-auto flex flex-col gap-4'
    >
      <div className='flex flex-col gap-5 md:grid md:grid-cols-2 mb-5'>
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
            step={0.01}
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
        <div className='w-full cursor-pointer shadow appearance-none border border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500 hover:bg-gray-200'>
          <label for='files'>Elige una imagen (opcional)</label>
          <input
            type='file'
            id='files'
            placeholder='Imagen'
            accept='image/png, image/jpeg'
            // TODO: mostrar imagen guardada al modificar
            className='hidden shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('image', {
              required: false,
              validate: {
                lessThan10MB: files =>
                  !files[0]?.size || files[0]?.size < 10000000 || 'El máximo es de 10MB',
                acceptedFormats: files =>
                  !files[0]?.size ||
                  ['image/jpeg', 'image/png'].includes(files[0]?.type) ||
                  'La imagen debe ser PNG o JPEG',
              },
            })}
          />
          {errors.image && <p className='mt-1 text-red-700'>{errors.image.message}</p>}
        </div>
      </div>

      <PrimaryButton text={product ? 'Guardar' : 'Agregar'} />
    </form>
  );
};

export default AddProductForm;
