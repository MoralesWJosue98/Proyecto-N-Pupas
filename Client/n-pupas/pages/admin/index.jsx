import BranchSelect from 'components/forms/branchSelect';
import { homePageName } from 'constants/strings';
import HomeMenu from 'components/menu/menu';
import useAppContext from 'context/context';
import { branches } from 'data/tempObjects';
import { useEffect } from 'react';
import Head from 'next/head';

const AdminHomePage = ({ branches }) => {
    const { branchID, setBranchID } = useAppContext();

    useEffect(() => {
        if (!branchID) {
            setBranchID(branches[0].id);
        }
    }, [branches, branchID, setBranchID]);

    const changeBranch = id => {
        setBranchID(id);
    };

    const testPupuseriaName = 'La bendición';

    return (
        <main className='p-6 flex flex-col gap-5'>
            <Head>
                <title>{homePageName}</title>
            </Head>
            <h1 className='font-bold text-2xl sm:text-3xl'>{homePageName}</h1>
            <section className='mb-4'>
                <h2 className='text-primary-500 font-bold text-lg mb-3'>{`Pupusería ${testPupuseriaName}`}</h2>
                <BranchSelect onChangeHandler={changeBranch} branches={branches} value={branchID} />
            </section>
            <HomeMenu isAdmin={true} />
        </main>
    );
};

export default AdminHomePage;

export async function getServerSideProps() {
    return {
        props: {
            branches: branches,
        },
    };
}