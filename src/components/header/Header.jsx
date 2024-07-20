import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { useState } from "react";

function Header() {
  const [activeItem, setActiveItem] = useState("/");

  const handleClick = (path) => {
    setActiveItem(path);
  };

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
          <li className={activeItem === "/სიახლეები" ? styles.clicked : ""}>
            <Link to="/სიახლეები" onClick={() => handleClick("/სიახლეები")}>
              სიახლეები
            </Link>
          </li>
          <li
            className={activeItem === "/ერის-აღორძინება" ? styles.clicked : ""}
          >
            <Link
              to="/ერის-აღორძინება"
              onClick={() => handleClick("/ერის-აღორძინება")}
            >
              ერის აღორძინება
            </Link>
          </li>
          <li className={activeItem === "/ჩვენ-შესახებ" ? styles.clicked : ""}>
            <Link
              to="/ჩვენ-შესახებ"
              onClick={() => handleClick("/ჩვენ-შესახებ")}
            >
              ჩვენ შესახებ
            </Link>
          </li>
          <li className={activeItem === "/კონტაქტი" ? styles.clicked : ""}>
            <Link to="/კონტაქტი" onClick={() => handleClick("/კონტაქტი")}>
              კონტაქტი
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
