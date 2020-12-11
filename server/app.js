const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const uri = `mongodb+srv://trevor:${process.env.MLAB_PWD}@cluster0.duxvs.mongodb.net/gql-playlist?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", () => console.log("Connected to database"));

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
