import { MdOutlineAddTask } from "react-icons/md";
import { IconContext } from "react-icons";
import './Header.css'
import { Navigate, useNavigate } from "react-router-dom";
function Header() {

    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate("../add-new");
    };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Todo App</h1>
        <button type="button" onClick={handleButtonClick} className="btn-add-new">+</button>
      </div>
    </>
  );
}

export default Header;
