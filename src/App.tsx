// import Message from './Message'
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "SFC", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        onSelectItem={handleSelectItem}
        heading="Hello Cities"
      />
    </div>
  );
}

export default App;
