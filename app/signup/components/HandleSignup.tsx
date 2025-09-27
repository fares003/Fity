import api from "@/lib/axios";

  interface SignUpValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    weight: number;
    height: number;
  }

   export const handleSignupSubmit = async(values: SignUpValues, setToken: (token: string) => void) => {
    console.log("hello from signup submit");
    const signupData = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      weight: values.weight,
      height: values.height,
    };
    const res = await api.post("/api/Auth/register", signupData);
    setToken(res.data.token);
    }