import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { IoIosStar } from "react-icons/io";

const Cards = ({ image, title, link1, offers, cost, disc }) => {
  return (
    <div>
      <div className="card" style={{ width: "22rem", margin: "30px" }}>
        <img src={image} className="card-img-top imgs" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{disc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>COST: &nbsp;</b> {cost}
          </li>
          <li className="list-group-item">
            <b>OFFERS: &nbsp;</b>
            {offers}
          </li>

          <li className="list-group-item">
            <b>RATINGS : &nbsp;</b>
            <IoIosStar /> {link1} &nbsp; read more
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
