export interface dataForm {
  email: string;
  password: string;
  rememberMe: Boolean;
}

 export const handleSubmit = (values: dataForm) => {
    console.log(values);
  }

