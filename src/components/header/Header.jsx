import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { useState } from "react";
import { useLocation } from 'react-router-dom';


function Header() {
  
  const handleClick = (path) => {
    setActiveItem(path);
  };
  
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  return (
    <div>
      <div className={styles.main__header}>
        <h1>ეროვნულ-სოციალისტური საქართველოს მშრომელთა პარტია</h1>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li className={activeItem === "/" ? styles.clicked : ""}>
            <Link to="/" onClick={() => handleClick("/")}>
              მთავარი
            </Link>
          </li>
          <li className={activeItem === "/siaxleebi" ? styles.clicked : ""}>
            <Link to="/siaxleebi" onClick={() => handleClick("/siaxleebi")}>
              სიახლეები
            </Link>
          </li>
          <li
            className={activeItem === "/eris-agordzineba" ? styles.clicked : ""}
          >
            <Link
              to="/eris-agordzineba"
              onClick={() => handleClick("/eris-agordzineba")}
            >
              ერის აღორძინება
            </Link>
          </li>
          <li className={activeItem === "/chven-shesaxeb" ? styles.clicked : ""}>
            <Link
              to="/chven-shesaxeb"
              onClick={() => handleClick("/chven-shesaxeb")}
            >
              ჩვენ შესახებ
            </Link>
          </li>
          <li className={activeItem === "/kontaqti" ? styles.clicked : ""}>
            <Link to="/kontaqti" onClick={() => handleClick("/kontaqti")}>
              კონტაქტი
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
