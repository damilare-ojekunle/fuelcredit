import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import Link from "next/link";
import Router from "next/router";
import { format } from "date-fns";
import { useToggle } from "@/hooks";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import { Header } from "@/components";
import { SelectField, TextField } from "@/components/TextInput";
import { PrimaryButton } from "@/components/Button";
import { useMutation } from "react-query";
import { registerFn } from "@/services/queries";
const Register = () => {
  const { token } = useAuth();
  const [showPassword, togglePassword] = useToggle(false);
  const [focus, setFocus] = useState("");
  const [email, setEmail] = useState("");
  const initialValues = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    nin: "",
    email: "",
    password: "",
  };
  const { isLoading, mutateAsync } = useMutation(registerFn, {
    onSuccess: (data) => {
      Router.push(`/login`);
    },
  });
  const validationSchema = object().shape({
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
    mobileNumber: string().required("Phone Number is required"),

    email: string().email("Email is invalid"),
    password: string()
      .min(8, "Password must not be less than 8 characters")
      .required("Password is required"),
    nin: string(),
  });
  const handleSubmit = async (values: any) => {
    try {
      await mutateAsync({
        credentials: {
          ...values,
          category: "Salary Earner",
        },
      });
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  return (
    <div className="">
      <Header />
      <div className="mx-auto relative w-[40rem] mt-[55px] rounded-[29px] bg-[#F9FAF9] ">
        <div className="flex items-center justify-center gap-4 pt-[60px]">
          <Image src="/icons/user.svg" alt="user" width={25} height={25} />
          <p>Individual/Family</p>
        </div>
        <p className="text-center mt-5 text-sm">
          Not an Individual?{" "}
          <span className="text-primary-green ">
            Choose another account type
          </span>
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            isValid,
            dirty,
            setTouched,
          }) => (
            <Form className="mt-10 w-full">
              <div className=" px-16 ">
                <TextField
                  type="text"
                  name="firstName"
                  htmlFor="firstName"
                  label="First Name"
                  value={values?.firstName}
                  error={errors?.firstName && touched?.firstName}
                  placeholder="e.g Jane"
                  focus={focus}
                  onFocus={() => {
                    setFocus("firstName");
                  }}
                  onBlur={() => {
                    setFocus("");
                  }}
                  divClass=""
                />
                <TextField
                  type="text"
                  name="lastName"
                  htmlFor="lastName"
                  label="Last  Name"
                  value={values?.lastName}
                  error={errors?.lastName && touched?.lastName}
                  placeholder="e.g Jane"
                  focus={focus}
                  onFocus={() => {
                    setFocus("lastName");
                  }}
                  onBlur={() => {
                    setFocus("");
                  }}
                  divClass="mt-6"
                />
                <TextField
                  type="text"
                  name="mobileNumber"
                  htmlFor="mobileNumber"
                  label="Phone Number"
                  value={values?.mobileNumber}
                  error={errors?.mobileNumber && touched?.mobileNumber}
                  placeholder="Enter 11-digit phone number"
                  focus={focus}
                  onFocus={() => {
                    setFocus("mobileNumber");
                  }}
                  onBlur={() => {
                    setFocus("");
                  }}
                  divClass="mt-6"
                />

                <TextField
                  type="text"
                  name="email"
                  htmlFor="email"
                  label="Email Address"
                  value={values?.email}
                  error={errors?.email && touched?.email}
                  placeholder="Enter email"
                  focus={focus}
                  onFocus={() => {
                    setFocus("email");
                  }}
                  onBlur={() => {
                    setFocus("");
                  }}
                  divClass="mt-6"
                  onChange={(e) => {
                    setFieldValue("email", e.target.value);
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  type={showPassword ? "text" : "password"}
                  name="password"
                  htmlFor="password"
                  label="Password"
                  value={values?.password}
                  error={errors?.password && touched?.password}
                  placeholder="Password"
                  divClass="mt-6"
                  focus={focus}
                  onFocus={() => {
                    setFocus("password");
                  }}
                  onBlur={() => {
                    setFocus("");
                  }}
                  context={
                    <span
                      className="text-[1rem] text-secondary-yellow cursor-pointer"
                      onClick={togglePassword}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </span>
                  }
                />
                <TextField
                  type="text"
                  name="nin"
                  htmlFor="nin"
                  label="NIN (National Identification Number)"
                  value={values?.nin}
                  error={errors?.nin && touched?.nin}
                  placeholder="Enter NIN"
                  focus={focus}
                  onFocus={() => {
                    setFocus("nin");
                  }}
                  onBlur={() => {
                    setFocus("");
                  }}
                  divClass="mt-6"
                />
                <div className="mt-6 px-12 text-text-semi-black text-sm text-center">
                  By creating an account you agree to our{" "}
                  <Link href="#" className="inline-block text-primary-green">
                    Terms Of Use
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="inline-block text-primary-green">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Image
                    className="absolute top-8 right-8"
                    src="/icons/close.svg"
                    width={20}
                    height={20}
                    alt="close"
                  />
                </div>
              </div>
              <div className="w-full mt-10 px-16 pb-[67px]">
                <PrimaryButton
                  title={isLoading ? "Processing..." : "Create Account"}
                  type="submit"
                  className={`flex justify-center items-center w-full text-center`}
                  color={isLoading ? "text-white" : ""}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Register;
