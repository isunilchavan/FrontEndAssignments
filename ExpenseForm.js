import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  const hideFormHandler = () => {
    setIsFormVisible(false);
    // Clear form fields when hiding the form
    setName("");
    setAmount("");
    setLocation("");
    setDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      name: name,
      amount: amount,
      location: location,
      date: date,
    };

    props.onSaveExpenseData(expenseData);
    hideFormHandler(); // to Hide the form after submitting
  };

  // Conditional rendering based on the isFormVisible state
  return (
    <div className="form-container">
      {!isFormVisible && (
        <button onClick={showFormHandler}>Add Expense</button>
      )}

      {isFormVisible && (
        <form onSubmit={submitHandler}>
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
          <button type="submit">Add Expense</button>
          <button type="button" onClick={hideFormHandler}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
