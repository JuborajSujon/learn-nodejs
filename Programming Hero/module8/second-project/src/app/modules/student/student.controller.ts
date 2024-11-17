import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = (req: Request, res: Response) => {
  try {
    const { studentData } = req.body;
    const result = StudentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
};
