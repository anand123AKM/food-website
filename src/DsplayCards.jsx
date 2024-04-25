import React from "react";
import Cards from "./Cards";

const DsplayCards = ({ api }) => {
  return (
    <div className="display">
      {api.map((item) => {
        return (
          <Cards
            image={item.image}
            title={item.title}
            disc={item.disc}
            cost={item.cost}
            offers={item.offers}
            link1={item.link1}
          ></Cards>
        );
      })}
    </div>
  );
};

export default DsplayCards;
