import { homePageName, profilePageName } from 'constants/strings';
import { adminRoutes, employeeRoutes } from 'routes/routes';
import { loginRoute, registerRoute } from 'routes/routes';
import { useRouter } from 'next/router';
import { Navlink } from './navlink';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  // TODO: Las páginas serían por rol
  { name: `${homePageName}`, route: `${adminRoutes.home}` },
  { name: `${profilePageName}`, route: `${adminRoutes.profile}` },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className='bg-[#FAFAFA] sticky top-0 z-10 px-2 shadow-md'>
      {router.pathname === registerRoute ? (
        <div className='relative flex justify-center items-center h-16 px-4 sm:px-6'>
          <Link href={loginRoute} passHref>
            <Image
              src='/n-pupas.png'
              alt='N Pupas'
              width={40}
              height={40}
              className='md:w-12 cursor-pointer'
            />
          </Link>
        </div>
      ) : (
        <div className='relative flex items-center h-16 px-4 sm:px-6'>
          <div className='flex items-center'>
            <div className='flex items-center cursor-pointer'>
              <Link href={`${employeeRoutes.home}`} passHref>
                <Image
                  src='/n-pupas.png'
                  alt='N Pupas'
                  width={40}
                  height={40}
                  className='md:w-12'
                />
              </Link>
            </div>
            <div className='ml-4 sm:ml-6'>
              <div className='flex space-x-6'>
                {navigation.map(item => (
                  <Navlink key={item.route} name={item.name} route={item.route} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
