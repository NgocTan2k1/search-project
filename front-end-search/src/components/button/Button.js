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

  const handleOpenModalUpload = () => {
    document.getElementById('my_modal_upload').showModal();
  };

  const handleUpload = () => {
    console.log('upload file');
  };
  return (
    <div
      className={`flex w-full h-full items-center hover:bg-[#1F2937] px-2 py-1 rounded-xl hover:cursor-pointer`}
      onClick={item.name === 'Sign Out' ? handleSignOut : handleOpenModalUpload}
    >
      <dialog id="my_modal_upload" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn focus-visible:outline-none">Close</button>
            </form>
            <button className="btn" onClick={handleUpload}>
              Upload
            </button>
          </div>
        </div>
      </dialog>
      <div className="w-10 fill-white">{item.icon()}</div>
      <div className="px-2 flex-1 py-auto text-left">{item.name}</div>
    </div>
  );
}

export default Button;
