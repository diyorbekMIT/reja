const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://diyorbekjon2202kr:VJDHbT1odw4dj580@cluster0.ulcjx72.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("Error on connection MongoDB");
    } else {
      console.log("MongoDB connection succed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3042;
      server.listen(PORT, () => {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
