import React, { useState } from "react";
import logo from "../../Assets/Gallery/icons/logo.svg";
import "../Header/header.module.scss";
import Form from "../Reservation_form/Reservation_form";

function Header() {
   const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="header">
      {isFormOpen && <Form closeForm={() => setIsFormOpen(false)} />}
      <div className="header_container">
        <img className="header_logo" src={logo} alt="Logo"></img>
        <h1 className="header_title">Exquisite dining since 1989</h1>
        <p className="header_text">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <button className="header_button" onClick={() => setIsFormOpen(true)}>
          Book a table
        </button>
      </div>
    </div>
  );
}

export default Header;
