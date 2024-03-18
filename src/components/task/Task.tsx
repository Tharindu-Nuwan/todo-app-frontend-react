import "./Task.css";

interface TagType {
  id: number,
  tag_name: string
}

interface TaskProps {
  title: string;
  description: string;
  tags: TagType[];
}

const tagColors = [
  'blueviolet',
  'blue',
  'orangered',
  'green'
]

function Task({ title, description, tags }: TaskProps) {

  const renderColorDots = ()=> {
    return tags.map((tag)=> {
      const color = tagColors[tag.id-1];
      console.log(color);
      if (color) {
        return <div key={tag.id} className={`${color} tag-dot`}></div>
      } else {
        return null;
      }   
    });
  }
  
  return (
    <>
      <div className="task d-flex flex-column align-items-center">
        <h4>{title}</h4>
        <h6>{description}</h6>
        <div className="tag-dots-container">
          {renderColorDots()}
        </div>
      </div>
    </>
  );
}

export default Task;
