import * as Yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{5,}$/;

export const SignUpSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      passwordRules,
      "Password must contain at least one lowercase, one uppercase, one special character, and be at least 5 characters long"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required")
    ,
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  weight: Yup.number()
    .positive("Weight must be a positive number")
    .required("Weight is required"),
  height: Yup.number()
    .positive("Height must be a positive number")
    .required("Height is required"),
});
