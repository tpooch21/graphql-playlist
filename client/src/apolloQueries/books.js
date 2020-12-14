import { gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

export default getBooksQuery;
