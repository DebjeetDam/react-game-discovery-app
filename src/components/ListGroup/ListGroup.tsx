import "./ListGroup.css";
import { useState } from "react";

// Define interface of an object
interface Props {
  // {items : [], heading: string}
  items: string[];
  heading: string;
  // (item:string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //destructuring props {}
  // HOOK
  // useState->const [variable(selectedIndex), updater func] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/* conditional rendering w/logical AND */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
