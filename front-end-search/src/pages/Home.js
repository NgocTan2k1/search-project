import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

import app from '../firebase';
import { getDocument } from '@/services/homeServices';

function Home() {
  // firebase
  const auth = getAuth(app);

  // useNavigate
  const navigate = useNavigate();

  const [data, setData] = useState();

  useEffect(() => {
    getDocument(0).then((res) => {
      console.log(res);
      setData(res.content);
    });
  }, []);

  //function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Đã đăng xuất');
        navigate('/sign-in');
      })
      .catch((error) => {
        alert('không thể đăng xuất');
        console.log(error);
      });
  };

  return (
    <>
      <h2 className="">HOME PAGE</h2>
      <button className="btn" onClick={handleSignOut}>
        Logout
      </button>
    </>
  );
}

export default Home;
