"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import image from "@/public/images/logo0.png";
import { RiEyeCloseFill } from "react-icons/ri";
import { GiBoltEye } from "react-icons/gi";
import { useTogglePasswordView } from "../store";
interface Props {
  inputFieldes: Array<{
    name: string;
    type: string;
    placeholder: string;
    component?: string;
    className?: string;
  }>;
  formType: "login" | "register";
  buttonName: string;
  handleSubmit: (values: any) => void;
  formInitialValues: { [key: string]: any };
  validationSchema: any;
  children?: React.ReactNode;
  formClassName?: string;
}

const FormComponent = ({
  inputFieldes,
  formType,
  buttonName,
  handleSubmit,
  formInitialValues,
  validationSchema,
  formClassName,
  children,
}: Props) => {
  const { viewState, toggleState } = useTogglePasswordView();
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={formInitialValues}
      validationSchema={validationSchema}
    >
      <Form
        className={`relative min-w-[350px] w-[95%] md:w-[80%] lg:w-[40%] bg-white/20 backdrop-blur-sm rounded-md p-3 flex flex-col gap-4 ${formClassName}`}
      >
        <img
          src={image.src}
          alt="logo"
          className="absolute top-[-110px] left-1/2 -translate-x-1/2 w-[200px]"
        />
        <div className=" text-center pt-8">
          <h1 className="text-white text-4xl capitalize font-anton">
            welcome <span className="text-red-600">monster</span>
          </h1>
          <p className="text-white opacity-85 text-xl">
            please <span className="text-red-600">{buttonName}</span> to
            continue
          </p>
        </div>
        {inputFieldes.map((field, index) => {
          if (field.name !== "password") {
            return (
              <div key={index}>
                <Field
                  name={field.name}
                  type={field.type}
                  className={
                    field.className ||
                    "w-full text-xl py-2 px-3 border-b text-white"
                  }
                  placeholder={field.placeholder}
                  component={field.component || "input"}
                />
                <ErrorMessage
                  component={"p"}
                  className="text-red-500 font-bold"
                  name={field.name}
                />
              </div>
            );
          }
          if (field.name === "password") {
            return (
              <div key={index} className="relative">
                <Field
                  name="password"
                  type={viewState ? "text" : "password"}
                  className="w-full text-xl py-2 px-3 border-b text-white"
                  placeholder="Enter your password here..."
                />
                {viewState ? (
                  <GiBoltEye
                    onClick={toggleState}
                    className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 text-red-600 text-2xl rotate-180"
                  />
                ) : (
                  <RiEyeCloseFill
                    onClick={toggleState}
                    className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 text-red-600 text-2xl"
                  />
                )}
                <ErrorMessage
                  component="p"
                  className="text-red-500 font-bold"
                  name="password"
                />
              </div>
            );
          }
          return null;
        })}
        {formType === "login" && (
          <label htmlFor="rememberMe" className="cursor-pointer">
            <Field
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              className="checkbox checkbox-neutral w-[20px] h-[20px] rounded-none mr-2"
            />
            Remember me
          </label>
        )}
        {children}
        <button
          type="submit"
          className="btn btn-neutral w-full bg-red-600 text-xl capitalize "
        >
          {buttonName}
        </button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
