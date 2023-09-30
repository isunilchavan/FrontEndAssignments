import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocalString("en-US", { months: "long" });
  const day = props.date.toLocalString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="date-container">
      <div className="date">{month}</div>
      <div className="date">{day}</div>
      <div className="date">{year}</div>
    </div>
  );
}

export default ExpenseDate;