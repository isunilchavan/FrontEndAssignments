
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';

function ExpenseItem(props) {

  const deleteExpense = () => {
    console.log('ExpenseDeleted');
  };
  return (
    <div className="ExpenseItem">
      <ExpenseDate date={props.date} />
      <div>
        <h1>{props.name}</h1>
        <p>Amount: Rs {props.amount}</p>
        <p>Location: {props.location}</p>
        <button onClick={deleteExpense}>Delete Expense</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
