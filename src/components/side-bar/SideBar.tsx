import "./SideBar.css";

function SideBar() {
  return (
    <>
      <div className="side-bar-container ms-2 me-5 flex-column justify-content-between align-items-center">
        <div className="tags-container">
          <div className="d-flex align-items-center gap-4 p-2">
            <div id="cir-1" className="circle"></div>
            <div>Work</div>
          </div>
          <div className="d-flex align-items-center gap-4 p-2">
            <div id="cir-2" className="circle"></div>
            <div>Study</div>
          </div>
          <div className="d-flex align-items-center gap-4 p-2">
            <div id="cir-3" className="circle"></div>
            <div>Entertainment</div>
          </div>
          <div className="d-flex align-items-center gap-4 p-2">
            <div id="cir-4" className="circle"></div>
            <div>Family</div>
          </div>
        </div>
        <div className="image-container"></div>
      </div>
    </>
  );
}

export default SideBar;
