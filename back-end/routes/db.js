const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const uri = "mongodb+srv://navreenkaur1:Mongonjconnect23@njrecipecluster.jbentpp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
let conn2 = mongoose.connection;
console.log(conn2);

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})