import React, { useState } from "react";
import LeftChild from "./components/LeftChild";
import RightChild from "./components/RightChild";
import Data from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [selectedId, setSelectedId] = useState(3); // Default selected ID

  const selectedShirt = Data.find((item) => item.id === selectedId);

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-4">
          <LeftChild selectedId={selectedId} onSelect={handleItemClick} />
        </div>
        <div className="col-8">
          <RightChild {...selectedShirt} />
        </div>
      </div>
    </div>
  );
};

export default App;
