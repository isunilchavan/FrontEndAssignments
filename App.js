import ExpenseItem from './components/ExpenseItem.js';

function App() {
  const expenses = [
    { name: "Food", amount: 10, location: "Grocery Store" },
    { name: "Petrol", amount: 100, location: "Gas Station" },
    { name: "Movies", amount: 200, location: "Movie Theater" },
    { name: "Party", amount: 10000, location: "Bangalore" },
  ];
    return (
      <div>
        <h2>Let's get started!</h2>
        <ExpenseItem
        name={expenses[0].name}
        amount={expenses[0].amount}
        location={expenses[0].location}
        ></ExpenseItem>
        <ExpenseItem
        name={expenses[1].name}
        amount={expenses[1].amount}
        location={expenses[1].location}
        ></ExpenseItem>
        <ExpenseItem
        name={expenses[2].name}
        amount={expenses[2].amount}
        location={expenses[2].location}
        ></ExpenseItem>
        <ExpenseItem
        name={expenses[3].name}
        amount={expenses[3].amount}
        location={expenses[3].location}
        ></ExpenseItem>
      </div>
    );
  }
  
  export default App;