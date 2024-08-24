import { useState } from "react";

function AddEvent({
  handleAddEvent,
  showEventPopUp,
  editingEvents,
  handleUpdate,
}) {
  const [time, setTime] = useState("00:00");
  const [task, setTask] = useState("");
  return (
    <>
      <div className="eventsPopUp">
        {showEventPopUp && (
          <div className="event-add">
            <input
              className="popUp-time"
              type="time"
              onChange={(e) => {
                setTime(e.target.value);
              }}
            ></input>
            <button
              type="button"
              className="btn btn-primary eventBtn"
              onClick={() => {
                if (editingEvents) {
                  handleUpdate(time, task);
                } else {
                  handleAddEvent(time, task);
                }
              }}
            >
              {editingEvents ? "Update Event" : "Add Event"}
            </button>
            <input
              type="text"
              className="popUp-task"
              placeholder="Enter task:"
              onChange={(e) => {
                setTask(e.target.value);
              }}
            ></input>
          </div>
        )}
      </div>
    </>
  );
}
export default AddEvent;
