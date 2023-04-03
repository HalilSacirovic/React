import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

/*
    Ovo props predstavlja parametar funkcije odnoso predstavlja ono u Tagu expensitem
    Ovo props.date zapravo predstavlja datum iz onog objekta

    ovo ExpenseDate predstavlja JS fajl ExpenseDate.js u kojem su skladisteni datumi iz objekta;

*/ 

    return (
    <div className="expense-item">
        <ExpenseDate date ={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
