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
      <label for="bookTitle">Book Title:</label>
      <input
        error={!!errors.bookTitle}
        type="text"
        name="bookTitle"
        ref={register({ required: true })}
      />
      <label for="bookGenre">Genre:</label>
      <input
        error={!!errors.bookGenre}
        type="text"
        name="bookGenre"
        ref={register({ required: true })}
      />
      <label for="author">Author:</label>
      <select
        error={!!errors.author}
        name="author"
        ref={register({ required: true })}
      >
        <option value="Terry Pratchett">Terry Pratchett</option>
        <option value="Patrick Rothfuss">Patrick Rothfuss</option>
        <option value="Brandon Sanderson">Brandon Sanderson</option>
      </select>
    </form>
  );
};

export default AddBookForm;
