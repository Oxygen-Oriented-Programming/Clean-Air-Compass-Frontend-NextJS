import Homepage from "../components/Homepage";

export default function Home() {
  
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  return <Homepage BASE_URL={BASE_URL}/>;
}
