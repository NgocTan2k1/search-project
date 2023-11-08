import BaseNav from '../nav/BaseNav';
import TheHeader from './TheHeader';

function LayOut({ active, chilren }) {
  return (
    <div className="w-full h-screen flex">
      <div className="bg-[#111827] text-white w-[20%] h-full max-w-[400px]">
        <BaseNav active={active}></BaseNav>
      </div>
      <div className="flex flex-col bg-[#fff] h-full overflow-auto flex-1">
        <TheHeader />
        <div className="bg-yellow-50 w-full h-full"></div>
      </div>
    </div>
  );
}

export default LayOut;