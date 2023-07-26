import Expenses from "./Components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 233.55, date: new Date(2023, 1, 28) },
    { title: "Bike Insurance", amount: 211.55, date: new Date(2023, 1, 28) },
    { title: "Plane Insurance", amount: 233.55, date: new Date(2023, 1, 28) },
    { title: "Boat Insurance", amount: 233.55, date: new Date(2023, 1, 28) },
    { title: "Skate Insurance", amount: 233.55, date: new Date(2023, 1, 28) },
  ];

  return (
    <div>
      <Expenses expenses = {expenses}></Expenses>
    </div>
  );
}

export default App;
