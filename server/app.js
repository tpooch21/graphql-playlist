const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

const port = 3001;
app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
