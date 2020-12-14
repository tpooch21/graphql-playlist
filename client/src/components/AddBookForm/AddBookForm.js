import { useForm } from "react-hook-form";
import styles from "./AddBookForm.module.css";

const AddBookForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const submitBookData = (data) => {
    console.log("Book data => ", data);
  };

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
        <option value="Terry Pratchett">Terry Pratchett</option>
        <option value="Patrick Rothfuss">Patrick Rothfuss</option>
        <option value="Brandon Sanderson">Brandon Sanderson</option>
      </select>
      <button type="submit">
        <p>Submit</p>
      </button>
    </form>
  );
};

export default AddBookForm;
