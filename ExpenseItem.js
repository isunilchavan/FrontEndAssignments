import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="ExpenseItem">
    <h2 className="header">Expense Items</h2>
    <ul className="expense-list">
      <li>
        Food Rs 10
        <span className="location"><br></br>< strong>Location:(Grocery Store)</strong></span>
        </li>
      
      <li>
        Petrol Rs 100
        <span className="location"><br></br>< strong>Location:(Gas Station)</strong></span>
        </li>
      <li>
        Movies Rs 200
        <span className="location"><br></br>< strong>Location:(Movie Theater)</strong></span>
        </li>
    </ul>
  </div>
);
}
export default ExpenseItem;
