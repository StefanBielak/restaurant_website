import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "../Reservation_form/reservation_form.module.scss";
import logo from "../../Assets/Gallery/icons/logo.svg";
import Footer from "../Footer/Footer";
import arrow from "../../Assets/Gallery/icons/icon-arrow.svg";
import linesIcon from "../../Assets/Gallery/patterns/pattern-lines.svg";

function Form({ closeForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState({ month: "", day: "", year: "" });
  const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });
  const [guests, setGuests] = useState(1);
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDate((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setTime((prevTime) => ({
      ...prevTime,
      [name]: value,
    }));
  };

  const togglePeriod = () => {
    setTime((prevTime) => ({
      ...prevTime,
      period: prevTime.period === "AM" ? "PM" : "AM",
    }));
    setIsArrowUp(!isArrowUp);
  };

  const handleGuestsChange = (value) => {
    setGuests((prevGuests) => Math.max(1, prevGuests + value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, date, time, guests });
    setIsSubmitted(true);

    const templateParams = {
      name: name,
      email: email,
      date: `${date.month}/${date.day}/${date.year}`,
      time: `${time.hour}:${time.minute} ${time.period}`,
      guests: guests,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <div className="reservation">
      <div className="booking">
        <div className="booking_box">
          <img className="booking_icon" src={logo} alt="Logo" />
          <h2 className="booking_title">Reservations</h2>
          <p className="booking_text">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
          <h3 className="booking_title2">Reserve place</h3>
        </div>
      </div>
      {isSubmitted ? (
        <div className="confirmation_message">
          <h3>Thank you for your reservation!</h3>
          <p>
            We look forward to hosting you on{" "}
            {`${date.month}/${date.day}/${date.year}`} at{" "}
            {`${time.hour}:${time.minute} ${time.period}`}.
          </p>
          <button className="form_button" type="button" onClick={closeForm}>
            Back to home page
          </button>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <input
              className="form_input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              className="form_input"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="form_box">
            <div className="form_box_date">
              <p className="form_box_date_title">Pick a date</p>
              <div>
                <input
                  className="form_box_date_value"
                  type="text"
                  name="month"
                  placeholder="MM"
                  value={date.month}
                  onChange={handleDateChange}
                  required
                />
                <input
                  className="form_box_date_value"
                  type="text"
                  name="day"
                  placeholder="DD"
                  value={date.day}
                  onChange={handleDateChange}
                  required
                />
                <input
                  className="form_box_date_value"
                  type="text"
                  name="year"
                  placeholder="YYYY"
                  value={date.year}
                  onChange={handleDateChange}
                  required
                />
              </div>
            </div>
          </label>
          <label className="form_box">
            <div className="form_box_time">
              <p className="form_box_time_title">Pick a time</p>
              <div className="form_box_time_cont">
                <input
                  className="form_box_time_value"
                  type="text"
                  name="hour"
                  placeholder="HH"
                  value={time.hour}
                  onChange={handleTimeChange}
                  required
                />
                <input
                  className="form_box_time_value"
                  type="text"
                  name="minute"
                  placeholder="MM"
                  value={time.minute}
                  onChange={handleTimeChange}
                  required
                />
                <button
                  type="button"
                  className={`form_box_button ${isArrowUp ? "arrow_up" : ""}`}
                  onClick={togglePeriod}
                >
                  {time.period}
                  <img src={arrow} alt="Toggle Arrow" className="arrow_icon" />
                </button>
              </div>
            </div>
          </label>
          <label className="form_box">
            <div className="form_box_guests">
              <button
                type="button"
                onClick={() => handleGuestsChange(-1)}
                className="form_box_guests_button"
              >
                -
              </button>
              <span className="form_box_guests_text">{guests} people</span>
              <button
                type="button"
                onClick={() => handleGuestsChange(1)}
                className="form_box_guests_button"
              >
                +
              </button>
            </div>
          </label>
          <button className="form_button" type="submit">
            Make reservation
          </button>
          <button className="form_button" type="button" onClick={closeForm}>
            Back to home page
          </button>
        </form>
      )}
      <div className="background">
        <img
          src={linesIcon}
          alt="lines icon"
          className="background_icon"
          media="(min-width: 768px)"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Form;
