import { gql } from "@apollo/client";

export const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;
