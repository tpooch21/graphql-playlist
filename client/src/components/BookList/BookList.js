import styles from "./BookList.module.css";

const BookList = ({ books }) => {
  return (
    <div className={styles.BookList}>
      <ul className="book-list">
        {books.map(({ id, name, genre }) => (
          <li key={id}>
            <em style={{ fontWeight: "bold" }}>{name}</em> {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
