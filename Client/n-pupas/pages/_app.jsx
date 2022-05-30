import { AppContextProvider } from 'context/context';
import Layout from 'components/layout/layout';
import { loginRoute } from 'routes/routes';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AppContextProvider>
      {router.pathname === loginRoute ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <Toaster
        position='bottom-left'
        reverseOrder={false}
        containerClassName='toast-container font-bold'
      />
    </AppContextProvider>
  );
}

export default MyApp;
