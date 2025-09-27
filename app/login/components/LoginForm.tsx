"use client";
import { loginValidationSchema } from "./Validator";
import { loginInitialValues } from "./FormInitialValues";
import FormComponent from "./Form";
import Link from "next/link";
import { fieldsArray } from "./LoginFieldes";
import { useAuthStore } from "@/store/useAuthStore";
import { handleSubmit } from "./HandleLogin";

const LoginForm = () => {
    const setToken = useAuthStore((state) => state.setToken);

 
  return (
    <>
      <div
        id="loginPage"
        className="centerBackgroundImagePage loginPage w-full h-dvh flex justify-center items-center py-8 overflow-hidden relative"
      >
        <FormComponent
          buttonName="sign in"
          formInitialValues={loginInitialValues}
          formType="login"
          handleSubmit={(values) => handleSubmit(values, setToken)}
          validationSchema={loginValidationSchema}
          inputFieldes={fieldsArray}
        >
          {/* Additional children components can be passed here if needed */}
          <p className="text-white opacity-85 text-center">
            create new account ?{" "}
            <Link href={"/signup"} className="cursor-pointer text-red-600">
              sign up
            </Link>
          </p>
        </FormComponent>
      </div>
    </>
  );
};

export default LoginForm;
