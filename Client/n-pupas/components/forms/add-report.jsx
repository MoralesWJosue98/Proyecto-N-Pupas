import PrimaryButton from 'components/buttons/primary';
import { useForm } from 'react-hook-form';

const AddEmployeeReportForm = ({ onSubmitHandler }) => {
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
        <textarea
          placeholder='Escribe tu comentario o reporte...'
          rows='8'
          className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
          {...register('report', {
            required: 'Comentario o reporte requerido',
          })}
        />
        {errors.report && <p className='mt-1 text-red-700'>{errors.report.message}</p>}
      </div>
      <PrimaryButton text='Enviar' />
    </form>
  );
};

export default AddEmployeeReportForm;
