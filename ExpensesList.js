import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="not-found">Found No Expenses</h2>;
  }

  if (props.expenses.length === 1) {
    return (
      <div>
        <h2 className="single-expense-message">
          Only single Expense here. Please add more...
        </h2>
        <ul className="Expense-list">
          {props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              name={expense.name}
              amount={expense.amount}
              location={expense.location}
              date={expense.date}
            />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <ul className="Expense-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.name}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
