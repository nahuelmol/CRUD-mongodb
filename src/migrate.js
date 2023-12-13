const { MongoClient } = require('mongodb');


//in the case of having to add a new field to the schem, we could specify this with the next function
async function runMigration(field, defa) {
  const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('tuBaseDeDatos');
    const collection = database.collection('usuarios');

    await collection.updateMany(
      { },
      { $set: { field: defa } }
    );

    console.log('Migración completada.');
  } finally {
    await client.close();
  }
}

runMigration(field, defa);
