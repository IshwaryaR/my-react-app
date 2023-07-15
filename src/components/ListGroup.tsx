import { useState } from "react";
interface ListProps {
  list: string[];
  heading: string;
  onItemSelect: (item: string) => void;
}

function ListGroup(props: ListProps) {
  const { list: ListArray, heading, onItemSelect } = props;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div>
      <h1>{heading}</h1>
      <ul className="list-group">
        {ListArray.length === 0 && <p>There are no items in the list</p>}
        {ListArray.map((item, i) => (
          <li
            key={i}
            className={
              i === selectedIndex ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(i);
              onItemSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListGroup;
