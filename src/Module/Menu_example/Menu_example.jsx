import '../Menu_example/menu_example.module.scss';

import salmonMobile from "../../Assets/Gallery/homepage/salmon-mobile.jpg";
import salmonMobile2x from "../../Assets/Gallery/homepage/salmon-mobile@2x.jpg";
import salmonTabDesk from "../../Assets/Gallery/homepage/salmon-desktop-tablet.jpg";
import salmonTabDesk2x from "../../Assets/Gallery/homepage/salmon-desktop-tablet@2x.jpg";

import beefMobile from "../../Assets/Gallery/homepage/beef-mobile.jpg";
import beefMobile2x from "../../Assets/Gallery/homepage/beef-mobile@2x.jpg";
import beefTabDesk from "../../Assets/Gallery/homepage/beef-desktop-tablet.jpg";
import beefTabDesk2x from "../../Assets/Gallery/homepage/beef-desktop-tablet@2x.jpg";

import chocoMobile from "../../Assets/Gallery/homepage/chocolate-mobile.jpg";
import chocoMobile2x from "../../Assets/Gallery/homepage/chocolate-mobile@2x.jpg";
import chocoTabDesk from "../../Assets/Gallery/homepage/chocolate-desktop-tablet.jpg";
import chocoTabDesk2x from "../../Assets/Gallery/homepage/chocolate-desktop-tablet@2x.jpg";

import separatorIcon from "../../Assets/Gallery/patterns/pattern-divide.svg";

function MenuExample() {
    return (
      <div className="container">
        <div className="initiation">
          <img
            className="initiation_icon"
            src={separatorIcon}
            alt="separator icon"
          />
          <h2 className="initiation_title">A few highlights from our menu</h2>
          <p className="initiation_text">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div>
        <div className="menu">
          <picture>
            <source
              srcSet={`${salmonTabDesk}, ${salmonTabDesk2x} 2x`}
              media="(min-width: 768px)"
            />
            <img
              srcSet={`${salmonMobile2x} 2x`}
              src={salmonMobile}
              alt="salmon"
              className="menu_photo"
            />
          </picture>
          <div className="menu_box">
            <h3 className="menu_title">Seared Salmon Fillet</h3>
            <p className="menu_text">
              Our locally sourced salmon served with a refreshing buckwheat
              summer salad.
            </p>
          </div>
        </div>
        <div className="menu">
          <picture>
            <source
              srcSet={`${beefTabDesk}, ${beefTabDesk2x} 2x`}
              media="(min-width: 768px)"
            />
            <img
              srcSet={`${beefMobile2x} 2x`}
              src={beefMobile}
              alt="beef"
              className="menu_photo"
            />
          </picture>
          <div className="menu_box">
            <h3 className="menu_title">Rosemary Filet Mignon</h3>
            <p className="menu_text">
              Our prime beef served to your taste with a delicious choice of
              seasonal sides.
            </p>
          </div>
        </div>
        <div className="menu">
          <picture>
            <source
              srcSet={`${chocoTabDesk}, ${chocoTabDesk2x} 2x`}
              media="(min-width: 768px)"
            />
            <img
              srcSet={`${chocoMobile2x} 2x`}
              src={chocoMobile}
              alt="chocolate"
              className="menu_photo"
            />
          </picture>
          <div className="menu_box">
            <h3 className="menu_title">Summer Fruit Chocolate Mousse</h3>
            <p className="menu_text">
              Creamy mousse combined with summer fruits and dark chocolate
              shavings.
            </p>
          </div>
          </div>
          </div>
      </div>
    );
}

export default MenuExample;