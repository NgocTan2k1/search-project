import { useNavigate } from 'react-router-dom';

function FileItem({ file }) {
  // navigation
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate('/detail-document/' + id);
  };
  return (
    <li className="card w-90 h-50 bg-base-100 shadow-xl hover:cursor-pointer hover:bg-slate-200">
      <div className="card-body">
        <h2 className="card-title">{file?.filename}</h2>
        <p>Author: {file?.upload_mail}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => handleView(1)}>
            Download
          </button>
          <button className="btn btn-primary" onClick={() => handleView(1)}>
            View
          </button>
        </div>
      </div>
    </li>
  );
}

export default FileItem;
