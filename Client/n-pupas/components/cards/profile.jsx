const ProfileCard = ({ employee }) => {
    return (
      <article className='bg-white shadow-md p-4'>
        <div className='flex flex-wrap gap-3 justify-between mb-2 items-start'>
          <div>
            <h2 className='font-bold text-primary-500'>{employee.name}</h2>
            <p>{employee.username}</p>
          </div>
          <p className='flex items-center px-4 py-0.5 bg-yellow-550 text-white rounded-md font-bold uppercase'>
            {employee.role}
          </p>
        </div>
        {employee.role === 'empleado' ? (
          <div>
            <p className='font-bold mb-2'>
              {employee.pupuseria}, {employee.branch}
            </p>
            <p>Empleado desde {employee.hiring}</p>
          </div>
        ) : (
          <div>
            <p className='font-bold mb-2'>Dueño de {employee.pupuseria}</p>
            <p>Fecha de apertura: {employee.openingDate}</p>
          </div>
          
        )}
      </article>
    );
  };
  
  export default ProfileCard;