import React from "react";
import ButtonApi from "./ButtonApi";

const Button = ({ match }) => {
  return (
    <>
      <div className="nav">
        <div className="navbar">
          {ButtonApi.map((item, index) => {
            return (
              <button
                className="btn-group_item"
                key={index}
                onClick={() => {
                  match(item.category);
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Button;
