import { crudActionTypes } from 'constants/strings';
import CrudButton from 'components/buttons/crud';
import { adminRoutes } from 'routes/routes';
import { useRouter } from 'next/router';

const ReportECard = ({  comment, onDeleteHandler , onHandleOnMOdify}) => {
  const router = useRouter();


const handleOnModify = () => {
    onHandleOnMOdify();
    
  };

  const handleOnDelete = () => {
    onDeleteHandler();
  };

    return (
      <article className='bg-white shadow-md p-4'>
        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
          <h2 className='font-bold text-primary-500'>{comment.name}</h2>
          <p className='font-light text-gray-700'>{comment.date}</p>
        </div>
        <p>{comment.body}</p>
        <div>
        <CrudButton actionType={crudActionTypes.update} onClickHandler={handleOnModify} />
        <CrudButton actionType={crudActionTypes.delete} onClickHandler={handleOnDelete} />
      </div>
      </article>
    );
  };
  
  export default ReportECard;

