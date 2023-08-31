import Card from "../UI/Card";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { title, amount, date } = props;
  const [meTitle, setMeTitle] = useState(title);
  const buttonHandler = () => {
    setMeTitle("Update!");
  };

  return (
    <Card classname="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{meTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={buttonHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
