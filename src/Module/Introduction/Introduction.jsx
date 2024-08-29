import "../Introduction/introduction.module.scss";

import enjoyableMobile from "../../Assets/Gallery/homepage/enjoyable-place-mobile.jpg";
import enjoyableMobile2x from "../../Assets/Gallery/homepage/enjoyable-place-mobile@2x.jpg";
import enjoyableTablet from "../../Assets/Gallery/homepage/enjoyable-place-tablet.jpg";
import enjoyableTablet2x from "../../Assets/Gallery/homepage/enjoyable-place-tablet@2x.jpg";
import enjoyableDesktop from "../../Assets/Gallery/homepage/enjoyable-place-desktop.jpg";
import enjoyableDesktop2x from "../../Assets/Gallery/homepage/enjoyable-place-desktop@2x.jpg";

import sourcedMobile from "../../Assets/Gallery/homepage/locally-sourced-mobile.jpg";
import sourcedMobile2x from "../../Assets/Gallery/homepage/locally-sourced-mobile@2x.jpg";
import sourcedTablet from "../../Assets/Gallery/homepage/locally-sourced-tablet.jpg";
import sourcedTablet2x from "../../Assets/Gallery/homepage/locally-sourced-tablet@2x.jpg";
import sourcedDesktop from "../../Assets/Gallery/homepage/locally-sourced-desktop.jpg";
import sourcedDesktop2x from "../../Assets/Gallery/homepage/locally-sourced-desktop@2x.jpg";

import separatorIcon from "../../Assets/Gallery/patterns/pattern-divide.svg";
import linesIcon from "../../Assets/Gallery/patterns/pattern-lines.svg";

function Introduction() {
    return (
      <div className="intro">
        <div className="intro_container">
          <picture>
            <source
              srcSet={`${enjoyableDesktop}, ${enjoyableDesktop2x} 2x`}
              media="(min-width: 1200px)"
            />
            <source
              srcSet={`${enjoyableTablet}, ${enjoyableTablet2x} 2x`}
              media="(min-width: 768px)"
            />
            <img
              srcSet={`${enjoyableMobile2x} 2x`}
              src={enjoyableMobile}
              alt="Enjoyable place"
              className="intro_photo"
            />
          </picture>
          <br />
          <div className="intro_content">
            <img
              className="intro_icon"
              src={separatorIcon}
              alt="separator icon"
            />
            <h3 className="intro_title">Enjoyable place for all the family</h3>
            <p className="intro_text">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
        <div className="intro_container">
          <picture>
            <source
              srcSet={`${sourcedDesktop}, ${sourcedDesktop2x} 2x`}
              media="(min-width: 1200px)"
            />
            <source
              srcSet={`${sourcedTablet}, ${sourcedTablet2x} 2x`}
              media="(min-width: 768px)"
            />
            <img
              srcSet={`${sourcedMobile2x} 2x`}
              src={sourcedMobile}
              alt="sourced food"
              className="intro_photo"
            />
          </picture>
          <img
            src={linesIcon}
            alt="lines icon"
            className="intro_icon_lines"
            media="(min-width: 768px)"
          />
          <br />
          <div className="intro_content">
            <img
              className="intro_icon"
              src={separatorIcon}
              alt="separator icon"
            />
            <h3 className="intro_title">The most locally sourced food</h3>
            <p className="intro_text">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Introduction;