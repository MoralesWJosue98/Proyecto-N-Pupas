import { crudActionTypes } from 'constants/strings';
import CrudButton from 'components/buttons/crud';
import { adminRoutes } from 'routes/routes';
import { useRouter } from 'next/router';

const EmployeeCard = ({ employee }) => {
  const router = useRouter();

  const handleOnModify = () => {
    router.push(`${adminRoutes.editEmployee}/${employee.id}`)
  };

  const handleOnDelete = () => {
    alert('Próximamente se va a poder eliminar');
  };

  const handleOnCreateComment = () => {
      router.push(`${adminRoutes.newReport}/${employee.id}`);
  };

  return (
    <article className='bg-white shadow-md p-4'>
      <div className='flex flex-col mb-2'>
        <h2 className='font-bold'>{employee.name}</h2>
        <p> {`Empleado desde ${employee.date}`} </p>
        <p> {`Salario: $${employee.salary}`} </p>
      </div>
      <div>
        <CrudButton actionType={crudActionTypes.create} onClickHandler={handleOnCreateComment} />
        <CrudButton actionType={crudActionTypes.update} onClickHandler={handleOnModify} />
        <CrudButton actionType={crudActionTypes.delete} onClickHandler={handleOnDelete} />
      </div>
    </article>
  );
};

export default EmployeeCard;