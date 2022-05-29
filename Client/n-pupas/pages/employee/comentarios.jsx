import CommentCard from 'components/cards/comment';
import { employeePages } from 'constants/strings';
import { testComments } from 'data/tempObjects';
import Head from 'next/head';

const CommentsPage = () => {
  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{employeePages.comments}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{employeePages.comments}</h1>
      <section className='flex flex-col gap-5'>
        {testComments.map(comment => {
          return <CommentCard comment={comment} key={comment.id} />;
        })}
      </section>
    </main>
  );
};

export default CommentsPage;