import Search from '../search/Search';

function TheHeader() {
  return (
    <div className="relative inline-flex justify-center justify-items-center w-full h-[60px]">
      <h2 className="my-auto mx-5 text-lg font-bold">HomePage</h2>
      <Search />
      <img
        className="h-[40px] rounded-full object-contain my-auto mr-[40px] hover:cursor-pointer"
        alt="avatar"
        src="https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg"
      />
      <div className="absolute w-full h-[1px] bg-black bottom-0"></div>
    </div>
  );
}

export default TheHeader;
