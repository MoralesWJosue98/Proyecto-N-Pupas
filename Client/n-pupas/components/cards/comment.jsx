
const CommentCard = ({ comment }) => {
    return (
      <article className='bg-white shadow-md p-4'>
        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
          <h2 className='font-bold text-primary-500'>{comment.name}</h2>
          <p className='font-light text-gray-700'>{comment.date}</p>
        </div>
        <p>{comment.body}</p>
      </article>
    );
  };
  
  export default CommentCard;

  