import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "./ExpensesFilter.js";
import "./ExpensesFilter.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // Filter expenses based on the selected year
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  let expensesContent = <h1>No Expense Found</h1>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        name={expense.name}
        amount={expense.amount}
        location={expense.location}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </div>
    </div>
  );
};

export default Expenses;