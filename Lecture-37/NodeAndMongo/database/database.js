const { MongoClient} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const mongoConnect = ()=>{
    return client.connect()
        .then((client)=>{
            console.log(client);
        })
        .catch(err=>{
            console.log(err);
        })
}

module.exports.mongoConnect = mongoConnect;
// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);

//   return 'done.';
// }

// main();