import Homepage from "../components/Homepage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clean Air Compass</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Homepage />
    </>
  );
}
