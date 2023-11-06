function LayOut({ chilren }) {
  return (
    <div className="w-full h-screen flex">
      <div className="bg-[red] w-[20%] h-full max-w-[400px]"></div>
      <div className="bg-[blue] h-full overflow-auto flex-1"></div>
    </div>
  );
}

export default LayOut;
