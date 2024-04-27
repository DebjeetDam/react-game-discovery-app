// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import Like from "./components/Like";
// import ExpandableText from "./components/ExpandableText";
// import Form from "./components/Form";
import "./index.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from "react";

// import Message from './Message'

export const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 1, category: "Utility" },
    { id: 2, description: "aaa", amount: 1, category: "Utility" },
    { id: 3, description: "aaa", amount: 1, category: "Utility" },
    { id: 4, description: "aaa", amount: 1, category: "Utility" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
};

// function App() {
//   const items = ["NYC", "LA", "SFC"];
//   const [alertVisible, setAlertVisible] = useState(false);
//   return (
//     <div>
//       <Form />
//       <ExpandableText maxChars={100}>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
//         alias error, fuga labore quibusdam sed quasi, ipsum cupiditate
//         consequuntur adipisci at dolore magnam. Consequuntur fugit, molestiae
//         omnis tempore recusandae nostrum!100
//       </ExpandableText>
//       <Like
//         onClick={() => {
//           console.log("clicked");
//         }}
//       />
//       <ListGroup items={items} heading="Miami" onSelectItem={() => {}} />
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
//       )}
//       <Button color="warning" onClick={() => setAlertVisible(true)}>
//         Hello Button Test
//       </Button>
//     </div>
//   );
// }

export default App;

// //Exercise 1
// const [game, setGame] = useState({
//   id: 1,
//   player: {
//     name: "Deb",
//   },
// });
// const handleClick = () => {
//   setGame({
//     ...game,
//     player: {
//       name: "Son",
//     },
//   });
// };
// //Exercise 2
// const [pizza, setPizza] = useState({
//   name: "paneer pizza",
//   toppings: ["Mushroom"],
// });

// const handlePizza = () => {
//   setPizza({ ...pizza, toppings: [...pizza.toppings, "Peppers"] });
// };

// //Exercise 3
// const [cart, setCart] = useState({
//   discount: 0.1,
//   items: [
//     { id: 1, title: "P1", quantity: 1 },
//     { id: 2, title: "P2", quantity: 1 },
//   ],
// });

// const handleCart = () => {
//   setCart({
//     ...cart,
//     items: cart.items.map((item) => {
//       item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item;
//     }),
//   });
// };
