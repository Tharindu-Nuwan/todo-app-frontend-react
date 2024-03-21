import Swal from "sweetalert2";
import "./Header.css";
import { Navigate, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("../add-new");
  };

  const handleLogoutClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged Out",
          text: `${localStorage.getItem("name")} has been logged out.`,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        navigate("../../login");
      }
    });
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
            +
          </label>
          <label onClick={handleLogoutClick} className="logout">
            <i className="bi bi-box-arrow-right fs-5"></i>
          </label>
        </div>
      </div>
    </>
  );
}

export default Header;
