import BaseNav from '../nav/BaseNav';

function LayOut({ active, chilren }) {
  return (
    <div className="w-full h-screen flex">
      <div className="bg-[#111827] text-white w-[20%] h-full max-w-[400px]">
        <BaseNav active={active}></BaseNav>
      </div>
      <div className="bg-[#fff] h-full overflow-auto flex-1"></div>
    </div>
  );
}

export default LayOut;
