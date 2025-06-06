import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: {
            first_name: String,
            middle_name: String,
            last_name: String
        }
    },
    email: String,
    phone_number: String,
    gender: String,
    is_deleted: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Users', schema);