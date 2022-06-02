import PrimaryButton from 'components/buttons/primary';
import { useForm } from 'react-hook-form';

const GenerateReportForm = ({ onSubmitHandler }) => {
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
      <div className='flex flex-col gap-5 md:grid md:grid-cols-2 mb-2'>
        <div>
          <input
            type='date'
            placeholder='Desde'
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('initial_date', { required: 'Fecha de inicio requerida' })}
          />
          {errors.initial_date && (
            <p className='mt-1 text-red-700'>{errors.initial_date.message}</p>
          )}
        </div>
        <div>
          <input
            type='date'
            placeholder='Hasta'
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('final_date', { required: 'Fecha final requerida' })}
          />
          {errors.final_date && <p className='mt-1 text-red-700'>{errors.final_date.message}</p>}
        </div>
      </div>

      <PrimaryButton text='Generar reportes' />
    </form>
  );
};

export default GenerateReportForm;
