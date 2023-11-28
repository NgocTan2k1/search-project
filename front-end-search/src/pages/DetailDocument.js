import FileItem from '@/components/file/FileItem';
import FilesList from '@/components/file/FilesList';
import Layout from '@/components/layout/Layout';
import Pagination from '@/components/paginantion/Pagination';
import app from '@/firebase';
import { storeLocal } from '@/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DetailDocument() {
  // firebase
  const auth = getAuth(app);

  // useNavigate
  const navigate = useNavigate();

  //store
  const setUserInfo = storeLocal((state) => state.setUserInfo);

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
  }, []);

  console.log(data);

  return (
    <>
      <dialog id="my_modal_loading_page" className="modal">
        <div className="w-auto h-auto modal-box text-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </dialog>
      <Layout active={2} pageName="Document Detail">
        <FilesList className="grid grid-cols-2 gap-4">
          <FileItem className=""></FileItem>
          <FileItem className=""></FileItem>
          <FileItem className=""></FileItem>
          <FileItem className=""></FileItem>
          <FileItem className=""></FileItem>
          {/* <FileItem className=""></FileItem> */}
        </FilesList>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} length={20}></Pagination>
      </Layout>
    </>
  );
}

export default DetailDocument;
