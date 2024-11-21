import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Z][a-z]*$/)
    .message('First name must be in capitalized format (e.g., John).'),

  middleName: Joi.string().trim().allow(null, ''),

  lastName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Za-z]+$/)
    .message('Last name must contain only alphabetic characters.'),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': 'Father name is required.',
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': 'Father occupation is required.',
  }),
  fatherContactNo: Joi.string().required().messages({
    'any.required': 'Father contact no is required.',
  }),
  motherName: Joi.string().required().messages({
    'any.required': 'Mother name is required.',
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': 'Mother occupation is required.',
  }),
  motherContactNo: Joi.string().required().messages({
    'any.required': 'Mother contact no is required.',
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Guardian name is required.',
  }),
  occupation: Joi.string().required().messages({
    'any.required': 'Guardian occupation is required.',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Guardian contact no is required.',
  }),
  address: Joi.string().required().messages({
    'any.required': 'Guardian address is required.',
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'Student ID is required.',
  }),

  password: Joi.string().max(20).required(),

  name: userNameValidationSchema.required(),

  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': "Gender must be one of 'male', 'female', or 'other'.",
  }),

  dateOfBirth: Joi.string().optional(),

  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email format.',
    'any.required': 'Email is required.',
  }),

  contactNo: Joi.string().required().messages({
    'any.required': 'Contact number is required.',
  }),

  emergencyContactNo: Joi.string().required().messages({
    'any.required': 'Emergency contact number is required.',
  }),

  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'any.only':
        "Blood group must be one of 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'.",
    }),

  presentAddress: Joi.string().required().messages({
    'any.required': 'Present address is required.',
  }),

  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent address is required.',
  }),

  guardian: guardianValidationSchema.required(),

  localGuardian: localGuardianValidationSchema.required(),

  profileImg: Joi.string().uri().optional(),

  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only': "Status must be either 'active' or 'blocked'.",
  }),
});

export default studentValidationSchema;
