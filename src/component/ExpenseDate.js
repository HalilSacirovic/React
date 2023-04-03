import './ExpenseDate.css';

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US',{month:"long"});
    const day = props.date.toLocaleString('en-US',{day:"2-digit"});
    const year = props.date.getFullYear()



    /*

    Ovo gore predstavlja zapravo datume iz fajla Expesne Item koji predstavlja datume iz App,js iz njegovog objekta
    Ovo gore to Local string zapravo pise datum odnosno Dan/GOdinu/Mesec;


    Znaci ovako iz ovog fajla se salje poziva pomocu funkcije u fajl Expense Item pa zatim se fajl Expenseitem Poziva u fajl APP.JS i posle se tamo ispisuju sve ove funckcije
    Znaci iz jedne funkcije u drugu se poziva pa se ta funkcija poziva u fajl Expense item Pa postoji cela funkcija koja se zove Expense item koja sadrzi Funkciju Expense date pa se posle 
    Expense Item poziva u fAJL APP.JS i tako se otprilike radi


    
    */
    return (
        <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'> {day}</div>
        </div>
    )
}

export default ExpenseDate;