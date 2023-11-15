function FileItem({ title, author }) {
  return (
    <li className="card w-90 h-50 bg-base-100 shadow-xl mr-5">
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </li>
  );
}

export default FileItem;
