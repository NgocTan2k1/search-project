import { getDocument } from '@/services/homeServices';
import { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    getDocument(0).then((res) => {
      console.log(res);
      setData(res.content);
    });
  }, []);
  console.log(data);

  return (
    <>
      <h2 className="">HOME PAGE</h2>
    </>
  );
}

export default Home;
