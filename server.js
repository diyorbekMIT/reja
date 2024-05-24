const http = require('http');
const mongodb = require('mongodb');


let db;
const connectionString = 'mongodb+srv://diyorbekjon2202kr:VJDHbT1odw4dj580@cluster0.ulcjx72.mongodb.net/Reja?retryWrites=true&w=majority';
mongodb.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection mongoDB", err);
    else {
      console.log("MongoDB connection succeeded");
      const app = require('./app');
      console.log(client);
      module.exports = client;
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function() {
      console.log(`The server is running successfully on port ${PORT}, http://localhost:3000/author/`);
      });
      
    }
  }
);

