import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const nameChangeHandler = (event) => {
    console.log(event.target.value);
  };
  
  return (
    <form className="form-container">
      <div className="form-field">
        <label>Name</label>
        <input type="text" className="form-input" onChange={nameChangeHandler} />
      </div>
      <div className="form-field">
        <label>Amount</label>
        <input type="number" className="form-input" />
      </div>
      <div className="form-field">
        <label>Location</label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-field">
        <label>Date</label>
        <input type="date" className="form-input" />
      </div>
      <button type="submit" className="form-button">
        Add Expense
      </button>
    </form>
  );
};
export default ExpenseForm;
