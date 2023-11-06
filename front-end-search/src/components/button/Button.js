import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import app from '@/firebase';

function Button({ item }) {
  //navigate
  const navigate = useNavigate();

  //firebase
  const auth = getAuth(app);

  //function
  /**
   *
   */
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
    console.log('SignOut');
  };

  const handleUpload = () => {
    console.log('Upload');
  };
  return (
    <button
      className={`flex w-full h-full items-center hover:bg-[#1F2937] px-2 py-1 rounded-xl`}
      onClick={item.name === 'Sign Out' ? handleSignOut : handleUpload}
    >
      <div className="w-10 fill-white">{item.icon()}</div>
      <div className="px-2 flex-1 py-auto text-left">{item.name}</div>
    </button>
  );
}

export default Button;
