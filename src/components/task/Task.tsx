import { useNavigate } from "react-router-dom";
import "./Task.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

interface TagType {
  id: number;
  tag_name: string;
}

interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: boolean;
  tags: TagType[];
}

const tagColors = ["blueviolet", "blue", "orangered", "green"];

function Task({ id, title, description, tags, status }: TaskProps) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(status);
  const [isExpandTitle, setIsExpandTitle] = useState(false);
  const [isExpandDesc, setIsExpandDesc] = useState(false);

  const handleClickTitleExpand = () => {
    setIsExpandTitle(!isExpandTitle);
  };

  const handleClickDescExpand = () => {
    setIsExpandDesc(!isExpandDesc);
  };

  const renderColorDots = () => {
    return tags.map((tag) => {
      const color = tagColors[tag.id - 1];
      if (color) {
        return <div key={tag.id} className={`${color} tag-dot`}></div>;
      } else {
        return null;
      }
    });
  };

  const handleUpdateClick = (
    id: number,
    title: string,
    description: string
  ) => {
    navigate(`../update/${id}/${title}/${description}`);
  };

  const handleDeleteClick = (id: number) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await axios.delete(
              `http://localhost:8000/api/delete/${id}`,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            if (response.status === 200) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
              navigate("../home");
              window.location.reload();
            }
          } catch (error) {
            alert(error);
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your task hasn't been deleted :)",
            icon: "error",
          });
        }
      });
  };

  const handleCheckboxClick = async () => {
    const newStatus = !checked;
    const tagId: number[] = tags.map((tag) => tag.id);

    try {
      const response = await axios.patch(
        `http://localhost:8000/api/update/${id}`,
        {
          title: title,
          description: description,
          status: newStatus,
          tags: tagId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setChecked(newStatus);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="task">
        <div className="d-flex justify-content-between">
          <div>
            <div className="d-flex justify-content-start gap-3 title-box">
              <input
                checked={checked}
                className="form-check-input chk-box"
                type="checkbox"
                value=""
                id={`chk-box-${id}`}
                onChange={handleCheckboxClick}
              />
              <div
                id="title"
                className={checked ? "text-decoration-line-through" : ""}
              >
                {title.length <= 23 ? (
                  <div>{title}</div>
                ) : (
                  <div>
                    {isExpandTitle ? title : title.substring(0, 23)}{" "}
                    <span onClick={handleClickTitleExpand}>
                      {!isExpandTitle ? (
                        <span>
                          {"... "}
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      ) : (
                        <span>
                          {"  "}
                          <i className="bi bi-chevron-up"></i>
                        </span>
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div
              id="description"
              className={checked ? "text-decoration-line-through" : ""}
            >
              {description.length <= 28 ? (
                <div>{description}</div>
              ) : (
                <div>
                  {isExpandDesc ? description : description.substring(0, 28)}{" "}
                  <span onClick={handleClickDescExpand}>
                    {!isExpandDesc ? (
                      <span>
                        {"... "}
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    ) : (
                      <span>
                        {"  "}
                        <i className="bi bi-chevron-up"></i>
                      </span>
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center icons-dots-container">
          <div className="tag-dots-container">{renderColorDots()}</div>
          <div className="d-flex gap-2 icons-container">
            <i
              className="bi bi-pencil-square fw-semibold"
              onClick={() => handleUpdateClick(id, title, description)}
            ></i>
            <i
              className="bi bi-trash3 fw-semibold"
              onClick={() => handleDeleteClick(id)}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
