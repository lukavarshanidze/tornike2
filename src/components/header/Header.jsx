import { Link } from "react-router-dom";
import styles from "./header.module.scss";

function Header() {
  return (
    <div>
      <div className={styles.main__header}>
        <h1>ეროვნულ-სოციალისტური საქართველოს მშრომელთა პარტია</h1>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li className={styles.clicked}>
            <Link to="/">მთავარი</Link>
          </li>
          <li>
            <Link to="სიახლეები">სიახლეები</Link>
          </li>
          <li>
            <Link to="ერის-აღორძინება">ერის აღორძინება</Link>
          </li>
          <li>
            <Link to="ჩვენ-შესახებ">ჩვენ შესახებ</Link>
          </li>
          <li>
            <Link to="კონტაქტი">კონტაქტი</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
