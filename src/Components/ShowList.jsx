import { RiDeleteBin5Fill } from "react-icons/ri";
import { TiPen } from "react-icons/ti";
import "./ShowList.css";
function ShowList({ taskList, updateTask, deleteTask }) {
  return (
    <>
      <div className="list">
        {taskList.length !== 0 && <h2>Events:</h2>}
        {taskList.map((List, index) => (
          <div className="task" key={index}>
            <div className="task-date">{List.date}</div>
            <div className="task-time">{List.time}</div>
            <div className="task-todo">{List.task}</div>
            <div className="icons">
              <div
                className="update-icon"
                onClick={() => {
                  updateTask(index);
                }}
              >
                <TiPen />
              </div>
              <div
                className="delete-icon"
                onClick={() => {
                  deleteTask(index);
                }}
              >
                <RiDeleteBin5Fill />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ShowList;
