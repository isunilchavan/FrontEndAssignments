import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.amount);

  const deleteExpense = () => {
    console.log("ExpenseDeleted");
  };
  
  const changeAmount = () => {
    setAmount(100);
    console.log("Amount changed");
  };
  return (
    <div className="ExpenseItem">
      <ExpenseDate date={props.date} />
      <div>
        <h1>{props.name}</h1>
        <p>Amount:Rs {amount}</p>
        <p>Location: {props.location}</p>
        <button onClick={deleteExpense}>Delete Expense</button>
        <button onClick={changeAmount}>Change Amount</button>
      </div>
    </div>
  );
}
export default ExpenseItem;
