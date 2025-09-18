"use client";

import FormComponent from "@/app/login/components/Form";
import { SignUpSchema } from "./SignupValidator";
import Link from "next/link";
import { signupFieldsArray } from "./SignupFieldes";
import { signupInitialValues } from "./signupInitialValues";
import { handlesignupSubmit } from "./HandleSignup";

const SignupForm = () => {
  return (
    <div
      id="loginPage"
      className="centerBackgroundImagePage loginPage w-full h-dvh flex justify-center items-center py-8 overflow-hidden relative"
    >
        <FormComponent
          buttonName="sign up"
          formInitialValues={signupInitialValues}
          formType="register"
          handleSubmit={handlesignupSubmit}
          validationSchema={SignUpSchema}
          inputFieldes={signupFieldsArray}
        >
          {/* Additional children components can be passed here if needed */}
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
