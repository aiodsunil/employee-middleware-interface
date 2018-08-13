import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const EmployeeSchema= new Schema({
    empId: Number,
    gender: String,
    age:Number,
    name: String,
    salary: Number,
    createdAt: Date
}, {collection: 'employees'});

export default mongoose.model('employees',EmployeeSchema);