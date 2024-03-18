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
        <h1>Todo App</h1>
          <div>
            <button type="button" onClick={handleAddClick} className="btn btn-success">+ NEW TASK</button>
            <button type="button" onClick={handleLogoutClick} className="btn btn-outline-primary">Logout</button>
          </div>
      </div>
    </>
  );
}

export default Header;
