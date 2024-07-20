import styles from "../styles/Contact.module.scss";

export const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <h3>კონტაქტი:</h3>
        <a href={`tel:+995 574 52 43 34`}>+995 574 52 43 34</a>
        <a href={`tel:+995 568 82 77 47`}>+995 568 82 77 47</a>
        <a href={`tel:+995 511 122 242`}>+995 511 122 242</a>
        <p className={styles.meet}>(შეხვედრა ხდება წინასწარ შეთანხმებით)</p>
      </div>
    </div>
  );
};
