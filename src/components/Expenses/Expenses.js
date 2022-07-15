import ElementItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  let elementItemList = props.expensesList.map((obj) => {
    return (
      <ElementItem title={obj.title} date={obj.date} amount={obj.amount} />
    );
  });
  return (<Card className="expenses">{elementItemList}</Card>);
}

export default Expenses;
