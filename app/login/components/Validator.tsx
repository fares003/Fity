import * as Yup from "yup";


export const loginValidationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

