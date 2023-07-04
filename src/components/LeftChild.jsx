import React from "react";
import Data from "../Data";

const LeftChild = ({ selectedId, onSelect }) => {
  return (
    <div>
      <ul className="list-group">
        {Data.map((item) => (
          <li
            key={item.id}
            className={`list-group-item ${
              selectedId === item.id ? "active" : ""
            }`}
            onClick={() => onSelect(item.id)}
          >
            {item.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftChild;