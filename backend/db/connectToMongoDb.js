import mongoose from 'mongoose';

const connectToMOngoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('connected to mongoDb');
  } catch (error) {
    console.log('connecting the mongodb', error.message);
  }
};
export default connectToMOngoDb;
