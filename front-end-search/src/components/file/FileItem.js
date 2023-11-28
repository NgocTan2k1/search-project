import { useNavigate } from 'react-router-dom';

function FileItem({ title, author, id }) {
  // navigation
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate('/detail-document/' + id);
  };
  return (
    <li className="card w-90 h-50 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => handleView(1)}>
            Buy Now
          </button>
        </div>
      </div>
    </li>
  );
}

export default FileItem;
