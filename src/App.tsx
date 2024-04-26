import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

// import Message from './Message'
function App() {
  const items = ["NYC", "LA", "SFC"];
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
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
