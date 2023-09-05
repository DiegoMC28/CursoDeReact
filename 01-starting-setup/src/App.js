import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 233.55, date: new Date(2023, 1, 28) },
    { title: "Bike Insurance", amount: 211.55, date: new Date(2023, 1, 28) },
    { title: "Plane Insurance", amount: 233.55, date: new Date(2023, 1, 28) },
    { title: "Boat Insurance", amount: 233.55, date: new Date(2023, 1, 28) },
    { title: "Skate Insurance", amount: 233.55, date: new Date(2023, 1, 28) },
  ];
  const [stateExpenses, setStateExpenses] = useState(expenses);
  const addExpenseHandler = (expense) => {
    expenses.push(expense);
    setStateExpenses(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={stateExpenses} />
    </div>
  );
}

export default App;
