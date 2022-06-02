import GenerateReportForm from 'components/forms/generate-report';
import { adminPages } from 'constants/strings';
import Head from 'next/head';

const ReportsPage = () => {
    const generateReport = data => {
        console.log(data);
    };

    return (
        <main className='p-6 flex flex-col gap-5'>
            <Head>
                <title>{adminPages.reports}</title>
            </Head>

            <h1 className='font-bold text-2xl sm:text-3xl md:text-center md:my-3'>{adminPages.reports}</h1>
            <div>
                <p className='w-full md:max-w-[900px] mx-auto font-bold text-lg mb-3'>Ingrese un rango de fechas</p>
                <GenerateReportForm onSubmitHandler={generateReport} />
            </div>

            <p className='w-full md:max-w-[900px] mx-auto'>* Los reportes de ingresos y egresos serán generados en un archivo de formato PDF</p>
        </main>
    );
};

export default ReportsPage;