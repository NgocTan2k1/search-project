import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import app from '../firebase';
import { getDocument } from '@/services/homeServices';
import Layout from '@/components/layout/Layout';

function Home() {
  // firebase
  const auth = getAuth(app);

  // useNavigate
  const navigate = useNavigate();

  const [data, setData] = useState();

  useEffect(() => {
    const idSetTimeout = setTimeout(() => {
      document.getElementById('my_modal_loading_page').close();
    }, 1000);

    document.getElementById('my_modal_loading_page').showModal();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setTimeout(() => {
          clearTimeout(idSetTimeout);
          navigate('/');
        }, 1000);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps

    getDocument(0).then((res) => {
      console.log(res);
      setData(res.content);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  return (
    <>
      <dialog id="my_modal_loading_page" className="modal">
        <div className="w-auto h-auto modal-box text-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </dialog>
      <Layout active={1}></Layout>
    </>
  );
}

export default Home;
