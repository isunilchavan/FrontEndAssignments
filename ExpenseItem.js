import ExpenseDate from './ExpenseDate.js';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="ExpenseItem">
      <ExpenseDate date={props.date} />

      <ExpenseItem
        name={props.name}
        amount={props.amount}
        location={props.location}
      />
    </div>
  );
}
export default ExpenseItem;
