import api from "@/lib/axios";

export interface dataForm {
  email: string;
  password: string;
  rememberMe: Boolean;
}

export const handleSubmit = async (values: dataForm, setToken: (token: string) => void) => {

    const res = await api.post("/api/Auth/login", { email: values.email, password: values.password });
    setToken(res.data.token); 
  }
