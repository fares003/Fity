"use client";

import FormComponent from "@/app/login/components/Form";
import { SignUpSchema } from "./SignupValidator";
import Link from "next/link";
import { signupFieldsArray } from "./SignupFieldes";
import { signupInitialValues } from "./signupInitialValues";
import { handleSignupSubmit } from "./HandleSignup";
import { useAuthStore } from "@/store/useAuthStore";

const SignupForm = () => {
  const setToken = useAuthStore((state) => state.setToken);
  return (
    <div
      id="signupPage"
      className="centerBackgroundImagePage loginPage w-full min-h-dvh flex justify-center items-center py-8 overflow-hidden relative"
    >
        <FormComponent
          buttonName="sign up"
          formInitialValues={signupInitialValues}
          formType="register"
          handleSubmit={(values) => handleSignupSubmit(values, setToken)}
          validationSchema={SignUpSchema}
          inputFieldes={signupFieldsArray}
        >
          <p className="text-white opacity-85 text-center">
            Already have an account ?{" "}
            <Link href={"/login"} className="cursor-pointer text-red-600">
              login
            </Link>
          </p>
        </FormComponent>
    </div>
  );
};

export default SignupForm;
