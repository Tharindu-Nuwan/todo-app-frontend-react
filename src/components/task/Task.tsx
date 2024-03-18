import "./Task.css";

interface TagType {
  id: number;
  tag_name: string;
}

interface TaskProps {
  title: string;
  description: string;
  tags: TagType[];
}

const tagColors = ["blueviolet", "blue", "orangered", "green"];

function Task({ title, description, tags }: TaskProps) {
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

  return (
    <>
      <div className="task d-flex flex-column justify-content-between">
        <div>
        <div>
          <h4>{title}</h4>
          <h6>{description}</h6>
        </div>

        <div className="tag-dots-container d-flex flex-column">
          {renderColorDots()}
        </div>
        </div>
        <div className="d-flex flex-row-reverse gap-3">
          <i className="bi bi-pencil-square fs-4"></i>
          <i className="bi bi-trash3 fs-4"></i>
        </div>
      </div>
    </>
  );
}

export default Task;
