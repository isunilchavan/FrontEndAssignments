import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form className="form-container">
      <div className="form-field">
        <label>Name</label>
        <input
          type="text"
          className="form-input"
          onChange={nameChangeHandler}
          value={name}
        />
      </div>
      <div className="form-field">
        <label>Amount</label>
        <input
          type="number"
          className="form-input"
          onChange={amountChangeHandler}
          value={amount}
        />
      </div>
      <div className="form-field">
        <label>Location</label>
        <input
          type="text"
          className="form-input"
          onChange={locationChangeHandler}
          value={location}
        />
      </div>
      <div className="form-field">
        <label>Date</label>
        <input
          type="date"
          className="form-input"
          onChange={dateChangeHandler}
          value={date}
        />
      </div>
      <button type="submit" className="form-button">
        Add Expense
      </button>
    </form>
  );
};
export default ExpenseForm;
