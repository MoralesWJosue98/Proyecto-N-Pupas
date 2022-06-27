
const CommentCard = ({ comment }) => {
    return (
      <article className='bg-white shadow-md p-4'>
        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
          <p className='font-light text-gray-700'>{comment.reportDate}</p>
        </div>
        <p>{comment.comment}</p>
      </article>
    );
  };
  
  export default CommentCard;

  