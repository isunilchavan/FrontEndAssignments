import './ExpenseItem.css';

function ExpenseItem() {

  const expenses = [
    { name: 'Food', amount: 10, location: 'Grocery Store' },
    { name: 'Petrol', amount: 100, location: 'Gas Station' },
    { name: 'Movies', amount: 200, location: 'Movie Theater' },
    {name: 'Party', amount: 10000, location: 'Bangalore'}
  ];

  return (
    <div className="ExpenseItem">
      <h2 className="header">Expense Items</h2>
      <ul className="expense-list">
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name} Rs {expense.amount} Location:{expense.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ExpenseItem;
