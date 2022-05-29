import SectionTitle from 'components/information/section-title';
import { employeePages, titles } from 'constants/strings';
import { testEmployee } from 'data/tempObjects';
import Head from 'next/head';

const ReportPage = () => {
  const employee = testEmployee;

  return (
    <main className='p-6 flex flex-col gap-5'>
      <Head>
        <title>{employeePages.report}</title>
      </Head>
      <h1 className='font-bold text-2xl sm:text-3xl'>{employeePages.report}</h1>
      <p className='font-bold'> Empleado desde: {employee.hiring}</p>
      <section>
        <SectionTitle title={titles.salary} />
        <p className='mb-6'>Salario mensual: ${employee.salary}</p>
        <h3 className='font-bold mb-4'>Descuentos</h3>
        {/* TODO: Hacer componente */}
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg mb-6'>
          <table className='w-full text-sm text-left'>
            <tbody>
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='px-6 py-4 font-bold whitespace-nowrap border-r-[1px] border-gray-250'
                >
                  ISSS
                </th>
                <td className='px-6 py-4 font-bold'>$12.00</td>
              </tr>
              <tr className='bg-white border-b '>
                <th
                  scope='row'
                  className='px-6 py-4 font-bold whitespace-nowrap border-r-[1px] border-gray-250'
                >
                  AFP
                </th>
                <td className='px-6 py-4 font-bold'>$29.00</td>
              </tr>
              <tr className='bg-white'>
                <th
                  scope='row'
                  className='px-6 py-4 font-bold whitespace-nowrap border-r-[1px] border-gray-250'
                >
                  ISR
                </th>
                <td className='px-6 py-4 font-bold'>$0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-lg text-primary-500 font-bold'>Salario neto mensual: $359.00</p>
          <p className='text-lg text-primary-500 font-bold'>Salario neto quincenal: $179.50</p>
        </div>
      </section>
      <section>
        <SectionTitle title={titles.afp} />
        <p className='mb-4'>Tiempo laborado: 2 años, 6 meses</p>
        <p className='text-lg text-primary-500 font-bold'>AFP cotizada: $1000</p>
      </section>
    </main>
  );
};

export default ReportPage;