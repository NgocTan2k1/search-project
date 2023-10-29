import { getDocument } from '@/services/homeServices';

function Home() {
  const data = getDocument();
  console.log('data:', data);

  return (
    <>
      <h2 className="">HOME PAGE</h2>
    </>
  );
}

export default Home;
