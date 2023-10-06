import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // 1st way to use it and we prefer this
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  //2nd and 3rd way to do this

  //   const [input, setInput] = useState({
  //     name: "",
  //     amount: "",
  //     location: "",
  //     date: "",
  //   });

  const nameChangeHandler = (event) => {
    // 1st way to do this and we prefer this only
    setName(event.target.value);

    //2nd way to do this
    // setInput({
    //   ...input,
    //   name: event.target.value,
    // });

    // 3rd way to do this
    // setInput((prevState) => {
    //   return { ...prevState, name: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);

    // setInput({
    //   ...input,
    //   amount: event.target.value,
    // });
  };
  const locationChangeHandler = (event) => {
    setLocation(event.target.value);

    // setInput({
    //   ...input,
    //   location: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);

    // setInput({
    //   ...input,
    //   date: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create an object with the form values
    const expenseData = {
      name: name,
      amount: amount,
      location: location,
      date: date,
    };

    props.onSaveExpenseData(expenseData); //console.log(expenseData);
    // Reset the form fields
    setName("");
    setAmount("");
    setLocation("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler} className="form-container">
      <div className="form-field">
        <label>Name</label>
        <input
          type="text"
          className="form-input"
          onChange={nameChangeHandler}
          value={name} //and for 2nd &3rd ways use-> value={input.name}
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
