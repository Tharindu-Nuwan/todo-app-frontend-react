import { MdOutlineAddTask } from "react-icons/md";
import { IconContext } from "react-icons";
import './Header.css'

function Header() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Todo App</h1>
        <div className="btn-add-new"><MdOutlineAddTask /></div>
      </div>
    </>
  );
}

export default Header;
