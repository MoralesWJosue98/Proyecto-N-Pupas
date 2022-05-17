import SectionTitle from 'components/information/section-title';
import PrimaryButton from 'components/buttons/primary';
import { departments } from 'constants/data';
import { titles } from 'constants/strings';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

const RegisterForm = ({ onSubmitHandler }) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
      <section className='flex flex-col gap-4'>
        <SectionTitle title={titles.personalData} />
        <div>
          <input
            type='text'
            placeholder='Nombre completo'
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
            placeholder='DUI (incluyendo guión)'
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('dui', {
              required: 'DUI requerido',
              pattern: {
                value: /^\d{8}-\d{1}$/,
                message: 'Formato de DUI inválido',
              },
            })}
          />
          {errors.dui && <p className='mt-1 text-red-700'>{errors.dui.message}</p>}
        </div>
        <div>
          <input
            type='text'
            placeholder='NIT (incluyendo guión)'
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('nit', {
              required: 'NIT requerido',
              pattern: {
                value: /^\d{4}-\d{6}-\d{3}-\d{1}$/,
                message: 'Formato de NIT inválido',
              },
            })}
          />
          {errors.nit && <p className='mt-1 text-red-700'>{errors.nit.message}</p>}
        </div>
        <div>
          <input
            type='tel'
            pattern='[0-9]{4}-[0-9]{4}'
            placeholder='Número de teléfono'
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('phone', {
              required: 'Número de teléfono requerido',
              pattern: {
                value: /^\d{4}-\d{4}$/,
                message: 'Número de teléfono inválido',
              },
            })}
          />
          {errors.phone && <p className='mt-1 text-red-700'>{errors.phone.message}</p>}
        </div>
      </section>
      <section className='flex flex-col gap-4'>
        <SectionTitle title={titles.accountData} />
        <div>
          <input
            type='text'
            placeholder='Nombre de usuario'
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('username', {
              required: 'Nombre de usuario requerido',
              pattern: {
                value: /^[A-Za-z][A-Za-z0-9_]{6,20}$/,
                message: 'Nombre de usuario inválido',
              },
            })}
          />
          {errors.username && <p className='mt-1 text-red-700'>{errors.username.message}</p>}
        </div>
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
      <section className='flex flex-col gap-4'>
        <SectionTitle title={titles.pupuseriaData} />
        <div>
          <input
            type='text'
            placeholder='Nombre'
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('pupuseria_name', {
              required: 'Nombre requerido',
              maxLength: {
                value: 80,
                message: 'El máximo de caracteres es 80',
              },
            })}
          />
          {errors.pupuseria_name && (
            <p className='mt-1 text-red-700'>{errors.pupuseria_name.message}</p>
          )}
        </div>
        <div>
          <select
            className='shadow border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('dept', { required: 'Departamento requerido' })}
          >
            {departments.map(dept => {
              return (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              );
            })}
          </select>
          {errors.dept && <p className='mt-1 text-red-700'>{errors.dept.message}</p>}
        </div>
        <div>
          <input
            type='text'
            placeholder='Dirección'
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
            placeholder='Fecha de apertura'
            onFocus={e => (e.target.type = 'date')}
            className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-2 focus:border-secondary-500'
            {...register('date', { required: 'Fecha de apertura requerida' })}
          />
          {errors.date && <p className='mt-1 text-red-700'>{errors.date.message}</p>}
        </div>
      </section>
      <PrimaryButton text='Crear cuenta' />
    </form>
  );
};

export default RegisterForm;
