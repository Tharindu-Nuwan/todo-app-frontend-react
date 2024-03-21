import "./SideBar.css";

function SideBar() {
  return (
    <>
      <div className="side-bar-container">
        <div className="tags-container">
        <div className="greeting"><i className="bi bi-person-circle fs-5"></i> Hello {localStorage.getItem('name')}!</div>
          <div className="d-flex align-items-center gap-4 p-2">
            <div id="cir-1" className="circle"></div>
            <div className="txt-tag">Work</div>
          </div>
          <div className="d-flex align-items-center gap-4 p-2">
            <div id="cir-2" className="circle"></div>
            <div className="txt-tag">Study</div>
          </div>
          <div className="d-flex align-items-center gap-4 p-2">
            <div id="cir-3" className="circle"></div>
            <div className="txt-tag">Entertainment</div>
          </div>
          <div className="d-flex align-items-center gap-4 p-2">
            <div id="cir-4" className="circle"></div>
            <div className="txt-tag">Family</div>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </>
  );
}

export default SideBar;
