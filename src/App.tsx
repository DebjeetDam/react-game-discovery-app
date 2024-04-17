// import Message from './Message'
import ListGroup from "./components/ListGroup";

const items = ["New York", "SFC", "Tokyo", "London", "Paris"];

function App() {
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
