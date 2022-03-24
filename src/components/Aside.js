// Importando estilos MUI
import { Divider } from "@mui/material";
// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCog,
  faHouse,
  faUser,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
// Importando estilos SASS
import "./../styles/component/aside.scss";

const Aside = () => {
  return (
    <>
      <aside className="menu ">
        <div className="menu__container">
          <h3 className="menu__title">Smart Talent</h3>
          
          <div className="menu__list">
            <div className="menu__item">
              <a href="#nav">
                <FontAwesomeIcon icon={faHouse} />
              </a>
              <p>Dashboard</p>
            </div>

            <div className="menu__item">
              <a href="#nav">
                <FontAwesomeIcon icon={faHouse} />
              </a>
              <p>Tables</p>
            </div>

            <Divider />

            <div className="menu__item">
              <a href="#nav">
                <FontAwesomeIcon icon={faHouse} />
              </a>
              <p>Sign Up</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
