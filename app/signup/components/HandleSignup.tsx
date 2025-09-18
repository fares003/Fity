  interface SignUpValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

   export const handlesignupSubmit = async(values: SignUpValues) => {
      console.log(values);
    }