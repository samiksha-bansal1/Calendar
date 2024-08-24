import { useState } from "react";
import "./App.css";
import CalendarDisplay from "./Components/CalendarDisplay";
import Container from "./Components/Container";
import CurrentDate from "./Components/CurrentDate";
import Heading from "./Components/Heading";
import ShowList from "./Components/ShowList";

function App() {
  const currentDate = new Date();
  const [index, setIndex] = useState();
  const [editingEvents, setEditingEvents] = useState(false);
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const [selectedDate, setSelectedDate] = useState();
  const [showEventPopUp, setShowEventPopUp] = useState(false);
  const [taskList, setTaskList] = useState([]);
  // console.log(taskList);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decemeber",
  ];
  const prev = () => {
    setCurrentMonth((prevMonth) => (prevMonth == 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) => (currentMonth == 0 ? prevYear - 1 : prevYear));
  };
  const next = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };
  const handleOnClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();
    if (clickedDate >= today || isSame(clickedDate, today)) {
      console.log("clicked");
      setSelectedDate(clickedDate);
      setShowEventPopUp(true);
    }
  };
  const isSame = (clickedDate, today) => {
    if (
      clickedDate.getDate() === today.getDate() &&
      clickedDate.getFullYear() === today.getFullYear() &&
      clickedDate.getMonth() === today.getMonth()
    ) {
      return true;
    } else return false;
  };
  const handleAddEvent = (time, task) => {
    const task_date = `${
      months[selectedDate.getMonth()]
    } ${selectedDate.getDate()},${selectedDate.getFullYear()}`;
    const newTask = {
      date: task_date,
      time: time,
      task: task,
    };
    const newObj = [...taskList, newTask];
    setTaskList(newObj);
    setShowEventPopUp(false);
  };
  const updateTask = (index) => {
    const newObj = taskList;
    console.log(newObj[index]);
    setEditingEvents(true);
    setShowEventPopUp(true);
    setIndex(index);
  };
  const deleteTask = (index) => {
    const newObj = taskList.filter((tasks, idx) => idx !== index);
    setTaskList(newObj);
    console.log(newObj);
  };
  const handleUpdate = (time, task) => {
    console.log(time, task);
    const newObj = taskList;
    newObj[index].time = time;
    newObj[index].task = task;
    setTaskList(newObj);
    setIndex("");
    setShowEventPopUp(false);
  };
  return (
    <>
      <Container>
        <div>
          <Heading></Heading>
          <CurrentDate
            currentDate={currentDate}
            currentYear={currentYear}
            currentMonth={currentMonth}
            months={months}
            next={next}
            prev={prev}
          ></CurrentDate>
          <CalendarDisplay
            days={days}
            currentDate={currentDate}
            currentYear={currentYear}
            currentMonth={currentMonth}
            firstDayOfMonth={firstDayOfMonth}
            daysInMonth={daysInMonth}
            handleOnClick={handleOnClick}
            handleAddEvent={handleAddEvent}
            showEventPopUp={showEventPopUp}
            editingEvents={editingEvents}
            handleUpdate={handleUpdate}
          ></CalendarDisplay>
        </div>
        <ShowList
          taskList={taskList}
          updateTask={updateTask}
          deleteTask={deleteTask}
        ></ShowList>
      </Container>
    </>
  );
}
export default App;
