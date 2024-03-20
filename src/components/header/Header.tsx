import "./Header.css";
import { Navigate, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("../add-new");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("../../login");
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex logo-container justify-content-between align-items-center">
          <div className="logo"></div>
          <div className="logo-text"></div>
        </div>

        <div className="button-container d-flex justify-content-between align-items-center gap-3">
          <label onClick={handleAddClick} className="add">
            {/* <i className="bi bi-file-earmark-plus fs-5"></i> */}+
          </label>
          <label
            onClick={handleLogoutClick}
            className="logout"
          ><i className="bi bi-box-arrow-right fs-5"></i></label>
        </div>
      </div>
    </>
  );
}

export default Header;
