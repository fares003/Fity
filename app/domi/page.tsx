"use client";

import FormComponent from "../login/components/Form";
import { loginInitialValues } from "../login/components/FormInitialValues";
import { handleSubmit } from "../login/components/HandleLogin";
import { loginValidationSchema } from "../login/components/Validator";

const page = () => {
  const inputFieldes = [
    {
      name: "username",
      type: "text",
      placeholder: "Enter your username here...",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email here...",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your password here...",
    },
  ];
  return (
    <div>
      <FormComponent
        inputFieldes={inputFieldes}
        buttonName="register"
        formInitialValues={loginInitialValues}
        handleSubmit={handleSubmit}
        formType="register"
        validationSchema={loginValidationSchema}
      >
        <p className="text-white text-center">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 underline">
            Login
          </a>
        </p>
      </FormComponent>
    </div>
  );
};

export default page;
