import { useQuery } from "@apollo/client";

const queryMultiple = (...queries) => {
  return queries.map((query) => useQuery(query));
};

export default queryMultiple;
