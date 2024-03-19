import { useNavigate } from "react-router-dom";
import "./Task.css";
import Swal from "sweetalert2";
import axios from "axios";

interface TagType {
  id: number;
  tag_name: string;
}

interface TaskProps {
  id: number;
  title: string;
  description: string;
  tags: TagType[];
}

const tagColors = ["blueviolet", "blue", "orangered", "green"];

function Task({ id, title, description, tags }: TaskProps) {
  const navigate = useNavigate();

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

  const handleUpdateClick = (id: number, title: string, description:string) => {
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
                text: "Your file has been deleted.",
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
            text: "Your file did not deleted :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <>
      <div className="task d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          <div className="tag-dots-container d-flex flex-column">
            {renderColorDots()}
          </div>
        </div>
        <div className="d-flex flex-row-reverse gap-3">
          <i
            className="bi bi-pencil-square fs-4"
            onClick={() => handleUpdateClick(id, title, description)}
          ></i>
          <i
            className="bi bi-trash3 fs-4"
            onClick={() => handleDeleteClick(id)}
          ></i>
        </div>
      </div>
    </>
  );
}

export default Task;
