import mongoose from 'mongoose';

const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '27017';
const MONGO_DB_NAME = 'rooms';

const connectionString: string = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_NAME}`;

try {
  mongoose.connect(connectionString);
} catch (error) {
  console.log(error);
}
