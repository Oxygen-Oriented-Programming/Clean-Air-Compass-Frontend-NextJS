import Homepage from '../components/Homepage';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
console.log(BASE_URL);

export default function Home() {
  return (
    <>
      <Homepage BASE_URL={BASE_URL}/>
    </>
  );
}
