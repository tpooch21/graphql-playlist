// components
import BookList from "./components/BookList/BookList";
import AddBookForm from "./components/AddBookForm/AddBookForm";

// Apollo/gql setup
import { useQuery } from "@apollo/client";
import getBooksQuery from "./apolloQueries/books";

function App() {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  console.log(data);

  return (
    <div className="App">
      <h1>Trevor's Reading List</h1>
      <BookList books={data.books} />
      <AddBookForm />
    </div>
  );
}

export default App;
