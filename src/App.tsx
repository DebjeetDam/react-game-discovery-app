import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";

// import Message from './Message'
function App() {
  const items = ["NYC", "LA", "SFC"];
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <ExpandableText maxChars={100}>Hello World</ExpandableText>
      <Like
        onClick={() => {
          console.log("clicked");
        }}
      />
      <ListGroup items={items} heading="Miami" onSelectItem={() => {}} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="warning" onClick={() => setAlertVisible(true)}>
        Hello Button Test
      </Button>
    </div>
  );
}

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
