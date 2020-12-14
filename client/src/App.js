// components
import BookList from "./components/BookList/BookList";
import AddBookForm from "./components/AddBookForm/AddBookForm";

// Apollo/gql setup
import { useQuery } from "@apollo/client";
import queryMultiple from "./customHooks/queryMultiple";
import { getBooksQuery } from "./apolloQueries/books";
import { getAuthorsQuery } from "./apolloQueries/authors";

function App() {
  const [getBooksQueryResult, getAuthorsQueryResult] = queryMultiple(
    getBooksQuery,
    getAuthorsQuery
  );
  const loading = getBooksQueryResult.loading || getAuthorsQueryResult.loading;
  const error = getBooksQueryResult.error || getAuthorsQueryResult.error;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="App">
      <h1>Trevor's Reading List</h1>
      <BookList books={getBooksQueryResult.data.books} />
      <AddBookForm authors={getAuthorsQueryResult.data.authors} />
    </div>
  );
}

export default App;
