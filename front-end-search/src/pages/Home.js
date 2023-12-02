import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import app from '../firebase';
import { getDocument } from '@/services/homeServices';
import Layout from '@/components/layout/Layout';
import FilesList from '@/components/file/FilesList';
import FileItem from '@/components/file/FileItem';
import Pagination from '@/components/paginantion/Pagination';
import Searching from '@/components/search/Searching';
import Searchingg from '@/components/search/Searchingg';
import ViewPdf from '@/components/search/ViewPdf';

import { storeLocal } from '@store';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

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

    getDocument(0).then((res) => {
      // console.log(res);
      setData(res.content);
      setTotalPages(res.totalPages);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <>
      <dialog id="my_modal_loading_page" className="modal">
        <div className="w-auto h-auto modal-box text-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </dialog>
      <Layout active={1}>
        <div className="flex flex-col h-full pb-[60px]">
          <div className="">top hit:</div>
          <FilesList className="grid grid-cols-2 gap-4 flex-1">
            {data?.map((file, index) => {
              return (
                <FileItem
                  className=""
                  key={index}
                  title={file.filename}
                  author={file.upload_mail}
                  date={file.create_on}
                ></FileItem>
              );
            })}
          </FilesList>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} length={totalPages}></Pagination>
        </div>
      </Layout>
    </>
  );
}

export default Home;
