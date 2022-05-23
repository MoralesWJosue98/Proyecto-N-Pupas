import SectionTitle from 'components/information/section-title';
import PrimaryButton from 'components/buttons/primary';
import { branches } from 'data/tempObjects';
import { titles } from 'constants/strings';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

const AddEmployeeForm = ({ onSubmitHandler, id, employee = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = data => {
    onSubmitHandler(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
      <section className='flex flex-col gap-4'>
        <SectionTitle title={titles.personalData} />
        <div>
          <input
            type='text'
            placeholder='Nombre'
            defaultValue={employee ? employee.name : ''}
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
            placeholder='Fecha de contratación'
            defaultValue={employee ? employee.hiring : ''}
            onFocus={e => (e.target.type = 'date')}
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('date', { required: 'Fecha requerida' })}
          />
          {errors.date && <p className='mt-1 text-red-700'>{errors.date.message}</p>}
        </div>
        <div>
          <input
            type='number'
            placeholder='Salario'
            defaultValue={employee ? employee.salary : ''}
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('salary', {
              required: 'Salario requerido',
              min: { value: 0.01, message: 'La cantidad debe ser mayor a $0.01' },
            })}
          />
          {errors.salary && <p className='mt-1 text-red-700'>{errors.salary.message}</p>}
        </div>
        <div>
          <select
            className='shadow border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('branch', { required: 'Sucursal requerida' })}
          >
            {branches.map(branch => {
              return (
                <option key={branch.id} value={branch.id}>
                  {branch.name}
                </option>
              );
            })}
          </select>
          {errors.branch && <p className='mt-1 text-red-700'>{errors.branch.message}</p>}
        </div>
      </section>
      <section className='flex flex-col gap-4'>
        <SectionTitle title={titles.accountData} />
        <p className='text-center font-bold text-xl'>ID #{id}</p>
        <div>
          <input
            type='password'
            placeholder='Contraseña'
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('password', {
              required: 'Contraseña requerida',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener un mínimo de 6 caracteres',
              },
            })}
          />
          {errors.password && <p className='mt-1 text-red-700'>{errors.password.message}</p>}
        </div>
        <div>
          <input
            type='password'
            placeholder='Repetir contraseña'
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('password_repeat', {
              validate: value => value === password.current || 'Las contraseñas no coinciden',
            })}
          />
          {errors.password_repeat && (
            <p className='mt-1 text-red-700'>{errors.password_repeat.message}</p>
          )}
        </div>
      </section>
      <PrimaryButton text={employee ? 'Guardar' : 'Agregar'} />
    </form>
  );
};

export default AddEmployeeForm;
