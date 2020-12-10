const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

/**
 * schema file tasks:
 * 1. Define types
 * 2. Define relationships between types
 * 3. Define root queries
 */

// dummy data
const books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Eart", genre: "Sci-Fi", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db/other source
        const bookIdx = books.findIndex((book) => book.id === args.id);
        return books[bookIdx];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
