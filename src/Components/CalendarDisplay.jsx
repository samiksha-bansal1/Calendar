import AddEvent from "./AddEvent";
import "./CalenderDisplay.css";
function CalendarDisplay({
  currentDate,
  days,
  firstDayOfMonth,
  daysInMonth,
  currentMonth,
  currentYear,
  handleAddEvent,
  handleOnClick,
  showEventPopUp,
  handleUpdate,
  editingEvents,
}) {
  return (
    <>
      <div className="calendar">
        <div className="week">
          {days.map((day, index) => (
            <div className={index} key={index}>
              {day}
            </div>
          ))}
        </div>

        <div className="dates">
          {[...Array(firstDayOfMonth).keys()].map((_, index) => (
            <div key={`empty-${index}`} />
          ))}
          {[...Array(daysInMonth).keys()].map((day) => (
            <div
              key={day + 1}
              className={
                day + 1 === currentDate.getDate() &&
                currentMonth == currentDate.getMonth() &&
                currentYear == currentDate.getFullYear()
                  ? "currentDate2"
                  : ""
              }
              onClick={() => {
                handleOnClick(day + 1);
              }}
            >
              {day + 1}
            </div>
          ))}
        </div>
      </div>
      <AddEvent
        handleAddEvent={handleAddEvent}
        showEventPopUp={showEventPopUp}
        handleUpdate={handleUpdate}
        editingEvents={editingEvents}
      ></AddEvent>
    </>
  );
}
export default CalendarDisplay;
