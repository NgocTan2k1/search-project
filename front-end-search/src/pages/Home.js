import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import app from '../firebase';
import { getDocument } from '@/services/homeServices';
import Layout from '@/components/layout/Layout';
import FilesList from '@/components/file/FilesList';
import FileItem from '@/components/file/FileItem';
import Pagination from '@/components/paginantion/Pagination';

import { storeLocal } from '@store';

function Home() {
  // firebase
  const auth = getAuth(app);

  // useNavigate
  const navigate = useNavigate();

  //store
  const setUserInfo = storeLocal((state) => state.setUserInfo);
  const [totalPages, setTotalPages] = useState(12);

  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

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
      setUserInfo({
        uid: user.uid,
        email: user.email,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps

    getDocument(0)
      .then((res) => {
        console.log('test call api: ', res);
        setData(res.content);
        setTotalPages(res.totalPages);
      })
      .catch((error) => {
        console.log('Error in HomePage when call getDocument api', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getDocument(currentPage - 1).then((res) => {
      console.log('page:', currentPage - 1, '\nfile: ', res.content);
      setData(res.content);
    });
  }, [currentPage]);

  return (
    <>
      <dialog id="my_modal_loading_page" className="modal">
        <div className="w-auto h-auto modal-box text-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </dialog>
      <Layout active={1} pageName="HomePage">
        <FilesList className="grid grid-cols-2 grid-rows-3 gap-4">
          {data?.map((file) => {
            return <FileItem className="" file={file} key={file.id_drive}></FileItem>;
          })}
        </FilesList>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} length={totalPages}></Pagination>
      </Layout>
    </>
  );
}

export default Home;
