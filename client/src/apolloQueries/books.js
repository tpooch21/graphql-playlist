import { gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      genre
    }
  }
`;

export default getBooksQuery;
