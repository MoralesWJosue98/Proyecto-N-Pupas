import PageHeading from 'components/information/page-heading';
import BranchCard from 'components/cards/branch';
import { adminPages } from 'constants/strings';
import { testBranch } from 'data/tempObjects';
import { adminRoutes } from 'routes/routes';
import Head from 'next/head';

const BranchesPage = () => {
    return (
        <main className='p-6 flex flex-col gap-5'>
            <Head>
                <title>{adminPages.branches}</title>
            </Head>
            <PageHeading title={adminPages.branches} route={adminRoutes.newBranch} />
            <div>
                {testBranch.map(branch => {
                    return <BranchCard branch={branch} key={branch.id} />;
                })}
            </div>
        </main>
    );
};

export default BranchesPage;