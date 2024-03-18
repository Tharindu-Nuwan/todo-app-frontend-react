import "./Task.css";

interface TaskProps {
  title: string;
  description: string;
  tags: number[];
}

function Task({ title, description }: TaskProps) {
  return (
    <>
      <div className="task d-flex flex-column align-items-center">
        <h4>{title}</h4>
        <h6>{description}</h6>
      </div>
    </>
  );
}

export default Task;
