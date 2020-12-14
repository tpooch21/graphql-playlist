import { useForm } from "react-hook-form";
import styles from "./AddBookForm.module.css";

const AddBookForm = ({ authors }) => {
  const { register, handleSubmit, errors } = useForm();
  const submitBookData = (data) => {
    console.log("Book data => ", data);
  };

  console.log(authors);
  return (
    <form
      onSubmit={handleSubmit(submitBookData)}
      className={styles.AddBookForm}
    >
      <label htmlFor="bookTitle">Book Title:</label>
      <input
        className={!!errors.bookTitle ? styles.invalid : null}
        type="text"
        name="bookTitle"
        ref={register({ required: true })}
      />
      <label htmlFor="bookGenre">Genre:</label>
      <input
        className={!!errors.bookGenre ? styles.invalid : null}
        type="text"
        name="bookGenre"
        ref={register({ required: true })}
      />
      <label htmlFor="author">Author:</label>
      <select
        className={!!errors.author ? styles.invalid : null}
        name="author"
        ref={register({ required: true })}
      >
        {authors.map(({ id, name }) => (
          <option value={name} key={id}>
            {name}
          </option>
        ))}
      </select>
      <button type="submit">
        <p>Submit</p>
      </button>
    </form>
  );
};

export default AddBookForm;
