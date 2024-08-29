import React, { useState } from "react";
import "../Special_offert/special_offert.module.scss";
import Form from "../Reservation_form/Reservation_form";

import familyMobile from "../../Assets/Gallery/homepage/family-gathering-mobile.jpg";
import familyMobile2x from "../../Assets/Gallery/homepage/family-gathering-mobile@2x.jpg";
import familyTablet from "../../Assets/Gallery/homepage/family-gathering-tablet.jpg";
import familyTablet2x from "../../Assets/Gallery/homepage/family-gathering-tablet@2x.jpg";
import familyDesktop from "../../Assets/Gallery/homepage/family-gathering-desktop.jpg";
import familyDesktop2x from "../../Assets/Gallery/homepage/family-gathering-desktop@2x.jpg";

import socialMobile from "../../Assets/Gallery/homepage/social-events-mobile.jpg";
import socialMobile2x from "../../Assets/Gallery/homepage/social-events-mobile@2x.jpg";
import socialTablet from "../../Assets/Gallery/homepage/social-events-tablet.jpg";
import socialTablet2x from "../../Assets/Gallery/homepage/social-events-tablet@2x.jpg";
import socialDesktop from "../../Assets/Gallery/homepage/social-events-desktop.jpg";
import socialDesktop2x from "../../Assets/Gallery/homepage/social-events-desktop@2x.jpg";

import specialMobile from "../../Assets/Gallery/homepage/special-events-mobile.jpg";
import specialMobile2x from "../../Assets/Gallery/homepage/special-events-mobile@2x.jpg";
import specialTablet from "../../Assets/Gallery/homepage/special-events-tablet.jpg";
import specialTablet2x from "../../Assets/Gallery/homepage/special-events-tablet@2x.jpg";
import specialDesktop from "../../Assets/Gallery/homepage/special-events-desktop.jpg";
import specialDesktop2x from "../../Assets/Gallery/homepage/special-events-desktop@2x.jpg";

import linesIcon from "../../Assets/Gallery/patterns/pattern-lines.svg";

function SpecialOffert() {
  const [selectedEvent, setSelectedEvent] = useState("family");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const eventDetails = {
    family: {
      title: "Family gathering",
      text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
      images: {
        mobile: familyMobile,
        mobile2x: familyMobile2x,
        tablet: familyTablet,
        tablet2x: familyTablet2x,
        desktop: familyDesktop,
        desktop2x: familyDesktop2x,
      },
    },
    special: {
      title: "Special Events",
      text: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
      images: {
        mobile: specialMobile,
        mobile2x: specialMobile2x,
        tablet: specialTablet,
        tablet2x: specialTablet2x,
        desktop: specialDesktop,
        desktop2x: specialDesktop2x,
      },
    },
    social: {
      title: "Social Events",
      text: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
      images: {
        mobile: socialMobile,
        mobile2x: socialMobile2x,
        tablet: socialTablet,
        tablet2x: socialTablet2x,
        desktop: socialDesktop,
        desktop2x: socialDesktop2x,
      },
    },
  };

  const { title, text, images } = eventDetails[selectedEvent];

  return (
    <div className="offers">
      <img src={linesIcon} alt="lines icon" className="offers_icon_lines" />
      {isFormOpen && <Form closeForm={() => setIsFormOpen(false)} />}
      <div className="event">
           <picture>
                <source
                 srcSet={`${images.desktop}, ${images.desktop2x} 2x`}
                 media="(min-width: 1024px)"
                 />
                <source
                 srcSet={`${images.tablet}, ${images.tablet2x} 2x`}
                 media="(min-width: 768px)"
                 />
                <img
                 srcSet={`${images.mobile2x} 2x`}
                 src={images.mobile}
                 alt={title}
                 className="event_photo"
                 />
            </picture>
            <div className="nav">
                    <p
                    className={`nav_btn ${selectedEvent === "family" ? "active" : ""}`}
                    onClick={() => setSelectedEvent("family")}
                     >Family gathering</p>
                    <p
                    className={`nav_btn ${selectedEvent === "special" ? "active" : ""}`}
                    onClick={() => setSelectedEvent("special")}
                     >Special Events</p>
                    <p
                    className={`nav_btn ${selectedEvent === "social" ? "active" : ""}`}
                    onClick={() => setSelectedEvent("social")}
                     >Social Events</p>
                    <div className="nav_desktop">
                          <h2 className="event_title">{title}</h2>
                          <p className="event_text">{text}</p>
                    <button className="offers_btn" onClick={() => setIsFormOpen(true)}>
                    Book a table
                    </button>
                    </div>
              </div>
      </div>
      <div className="offers_footer">
        <h2 className="offers_footer_title">Ready to make a reservation?</h2>
        <button
          className="offers_footer_btn"
          onClick={() => setIsFormOpen(true)}
        >
          Book a table
        </button>
      </div>
    </div>
  );
}

export default SpecialOffert;
