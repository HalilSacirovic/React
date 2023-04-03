import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2021, 10, 28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 294.69;

    return (
    <div className="expense-item">
      <div>Oktobar 28th 2003</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$294.69</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
