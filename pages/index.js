import Homepage from '../components/Homepage';
import Login from '../components/Login';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Clean Air Compass</title>
            </Head>
            <Login></Login>
            <Homepage />
        </>
    )
}
