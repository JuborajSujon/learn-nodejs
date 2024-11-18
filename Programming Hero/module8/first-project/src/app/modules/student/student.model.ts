import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, require: true },
  middleName: { type: String },
  lastName: { type: String, require: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, require: true },
  fatherOccupation: { type: String, require: true },
  fatherContactNo: { type: String, require: true },
  motherName: { type: String, require: true },
  motherOccupation: { type: String, require: true },
  motherContactNo: { type: String, require: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, require: true },
  occupation: { type: String, require: true },
  contactNo: { type: String, require: true },
  address: { type: String, require: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
