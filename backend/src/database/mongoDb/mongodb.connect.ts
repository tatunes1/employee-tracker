import mongoose from 'mongoose';

const MongoDBConnectionString =
    'mongodb://admin:X9v%247Lm%23bPqZ!1Ra@127.0.0.1:27017/employeeDB';

const connectDB = async () => {
    try {
        await mongoose.connect(MongoDBConnectionString);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed ', err);
    }
};

export default connectDB;
