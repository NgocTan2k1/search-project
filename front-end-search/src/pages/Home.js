import { http } from '@/axios';

function Home() {
  http
    .get('/page/0')
    .then((res) => console.log('res:', res))
    .catch((err) => console.log('err:', err));

  return (
    <>
      <h2 className="">HOME PAGE</h2>
    </>
  );
}

export default Home;
