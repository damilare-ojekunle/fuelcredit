import { Header } from "@/components";
import Image from "next/image";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToggle } from "@/hooks";
import Link from "next/link";
import { TextField } from "@/components/TextInput";
import { PrimaryButton } from "@/components/Button";
import { toast } from "react-toastify";
import { loginFn } from "@/services/queries";
import Router from "next/router";
import { useMutation } from "react-query";

const Login = () => {
  const { token, setToken, setAuthUser } = useAuth();
  const [showPassword, togglePassword] = useToggle(false);
  const [focus, setFocus] = useState("");
  const [loginTokin, setLoginToken] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    mobileNumber: "",
    password: "",
  });

  const { isLoading, mutateAsync } = useMutation(loginFn, {
    onSuccess: (data) => {
      if (!data?.access_token) {
        toast.info("User account not verified, kindly verify your account ");
        Router.push(`/verify-account`);
        return;
      }

      setToken(data?.access_token);
      // setAuthUser(data?.data?.profile);
      toast.success("User logged in successfully");
      Router.push("/admin/dashboard");
    },
  });

  useEffect(() => {
    if (token) {
      Router.push("/admin/dashboard");
    }
  }, [token]);

  const initialValues = {
    mobileNumber: "",
    password: "",
  };
  const validationSchema = object().shape({
    mobileNumber: string().required("Phone number is required"),
    password: string()
      .min(8, "Password must not be less than 8 characters")
      .required("Password is required"),
  });
  const handleSubmit = async (values: any) => {
    setLoginInfo({
      mobileNumber: values?.mobileNumber,
      password: values?.password,
    });
    try {
      await mutateAsync({
        credentials: {
          mobileNumber: values?.mobileNumber,
          password: values?.password,
        },
      });
    } catch (err) {
      toast.error(err?.response?.data?.message || err?.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="mx-auto w-[40rem] mt-[55px] rounded-[30px] relative bg-[#F9FAF9] ">
        <p className=" flex flex-col justify-center items-center text-[32px] pt-[55px]">
          <Image
            className=""
            src="/icons/login.svg"
            width={100}
            height={100}
            alt="login "
          />
          Log in
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isValid, dirty }) => (
            <Form className="w-full " autoComplete="off">
              <div className=" w-full px-20  flex justify-between flex-wrap pt-16 ">
                <TextField
                  type="text"
                  name="mobileNumber"
                  htmlFor="mobileNumber"
                  label="Phone Number (User ID)"
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
                />
                <TextField
                  type={showPassword ? "text" : "password"}
                  name="password"
                  htmlFor="password"
                  label="Password"
                  value={values?.password}
                  error={errors?.password && touched?.password}
                  placeholder="Password"
                  divClass="mt-6 "
                  context={
                    <span
                      className="text-[1rem] text-primary-green cursor-pointer"
                      onClick={togglePassword}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </span>
                  }
                  focus={focus}
                  onFocus={() => {
                    setFocus("password");
                  }}
                  onBlur={() => {
                    setFocus("");
                  }}
                />
                <Link
                  href="#"
                  className="inline-block text-primary-green text-[0.95rem] mt-2"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="w-full mt-10 px-20">
                <PrimaryButton
                  title={isLoading ? "Processing..." : "Log in"}
                  type="submit"
                  className={`flex justify-center items-center w-full`}
                  color={isLoading ? "text-white" : ""}
                  disabled={!isValid || !dirty || isLoading}
                />
              </div>
              <div className="mt-4  text-center flex justify-center gap-2 pb-16">
                <p className="text-text-black">New user? </p>
                <Link href="/register" className="text-primary-green">
                  Create Account
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Login;
