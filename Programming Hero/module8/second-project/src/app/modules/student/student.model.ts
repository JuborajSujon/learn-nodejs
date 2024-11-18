import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, require: [true, 'First name is required'] },
  middleName: { type: String },
  lastName: {
    type: String,
    maxlength: [20, 'Last name is too long, not more than 20 characters'],
    require: [true, 'Last name is required'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, require: [true, 'Father name is required'] },
  fatherOccupation: {
    type: String,
    require: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    require: [true, 'Father contact no is required'],
  },
  motherName: { type: String, require: [true, 'Mother name is required'] },
  motherOccupation: {
    type: String,
    require: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    require: [true, 'Mother contact no is required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, require: [true, 'Guardian Name is required'] },
  occupation: {
    type: String,
    require: [true, 'Guardian occupation is required'],
  },
  contactNo: {
    type: String,
    require: [true, 'Guardian contact no is required'],
  },
  address: { type: String, require: [true, 'Guardian address is required'] },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        "The gender field can only be one of the following values: 'male', 'female', 'other'.",
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: [true, 'Email is required'], unique: true },
  contactNo: { type: String, required: [true, 'Contact no is required'] },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact no is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message:
        "The bloodGroup field can only be one of the following values: 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'.",
    },
    required: true,
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian is required'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message:
        "The isActive field can only be one of the following values: 'active', 'blocked'.",
    },
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
