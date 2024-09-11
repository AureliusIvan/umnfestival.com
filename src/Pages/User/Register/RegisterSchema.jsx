import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  fullname: Yup.string()
      .required("Full Name is a required field"),
  nim: Yup.string()
      .required("NIM is a required field")
      .min(10, "Enter a valid NIM")
      .matches(/000000/, "Enter a valid NIM"),
  email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format")
      .matches(/@student.umn.ac.id/, "Email must be a student.umn.ac.id"),
  password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters")
      .matches(/.*[a-z].*/, "Password must contain at least one Lowercase")
      .matches(/.*[A-Z].*/, "Password must contain at least one Upercase"),
  repassword: Yup.string()
      .required("Re-Enter Password is a required field")
      .oneOf([Yup.ref('password'), null], 'Passwords must match')

});