const BookList = ({ books }) => {
  return (
    <div>
      <ul className="book-list">
        {books.map(({ name, genre }) => (
          <li key={name}>
            <em style={{ fontWeight: "bold" }}>{name}</em> {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
