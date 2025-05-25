import mongoose, { Document, Schema } from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  email: string;
  phone: string;
  status: string;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  status: { type: String },
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);