import React from "react";
import DsplayCards from "./DsplayCards";
import Api from "./Api";
import { useState } from "react";
import Button from "./Button";

const App = () => {
  const [items, setItems] = useState(Api);
  const match = (category) => {
    if (category === "all") {
      setItems(Api);
      return;
    }
    const filtered = Api.filter((item) => {
      return item.category === category;
    });
    setItems(filtered);
  };

  return (
    <>
      <div className="cont">
        <h1 className="heading_style"> TastyBites</h1>
      </div>
      <Button match={match}></Button>
      <DsplayCards api={items} />
    </>
  );
};

export default App;
