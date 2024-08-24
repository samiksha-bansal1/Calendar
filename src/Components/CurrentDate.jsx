import { IoChevronBackCircleSharp } from "react-icons/io5";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import "./CurrentDate.css";
function CurrentDate({
  months,
  currentDate,
  currentMonth,
  currentYear,
  prev,
  next,
}) {
  return (
    <>
      <div className="dateCont">
        <div className="currentDate">
          {months[currentMonth]} ,{currentYear}
        </div>
        <div
          className="prev"
          onClick={() => {
            prev();
          }}
        >
          <IoChevronBackCircleSharp className="icon" />
        </div>
        <div
          className="next"
          onClick={() => {
            next();
          }}
        >
          <IoChevronForwardCircleSharp className="icon" />
        </div>
      </div>
    </>
  );
}
export default CurrentDate;
