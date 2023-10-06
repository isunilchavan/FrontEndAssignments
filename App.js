import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: "e1", name: "Food", amount: 10, location: "Grocery Store" },
  { id: "e2", name: "Petrol", amount: 100, location: "Gas Station" },
  { id: "e3", name: "Movies", amount: 200, location: "Movie Theater" },
  { id: "e4", name: "Party", amount: 10000, location: "Bangalore" },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
