import './Header.css'
import { Navigate, useNavigate } from "react-router-dom";
function Header() {

    const navigate = useNavigate();
  
    const handleAddClick = () => {
      navigate("../add-new");
    };

    const handleLogoutClick = () => {
      localStorage.removeItem('token');
      navigate('../../login');
    };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Todo</h1>
          <div className="button-container d-flex justify-content-between align-items-center gap-3">
            <button type="button" onClick={handleAddClick} className="btn btn-success add"><i className="bi bi-file-earmark-plus fs-5"></i></button>
            <button type="button" onClick={handleLogoutClick} className="btn btn-outline-primary logout"><i className="bi bi-box-arrow-right fs-5"></i></button>
          </div>
      </div>
    </>
  );
}

export default Header;
