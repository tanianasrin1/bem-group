import React, { useEffect, useState } from "react";
import TextInput from "@/components/atoms/textinput/TextInput";
import Button from "@/components/atoms/button/Button";
import Image from "next/image";
import { fetchData, setAuthCookie } from "@/components/utils/fetch";
import { useRouter } from "next/navigation";

import {
  emailValidator,
  getCookie,
  passwordValidator,
} from "@/components/utils/validator";

export default function LoginPage() {
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    if (!errors?.password && !errors?.email) {
      proceedToLoginFunc(email, password);
    }
  };

  const proceedToLoginFunc = async (email, password) => {
    setIsLoading(true);
    const payload = {
      username: email,
      password: password,
    };
    const params = {
      url: process.env.NEXT_PUBLIC_LOGIN_URL,
      method: "POST",
      payload: payload,
    };
    const response = await fetchData({ ...params });
    setIsLoading(false);

    if (response?.status === 200) {
      const authToken = await response.json();
      if (authToken?.token) {
        setAuthCookie(authToken?.token);
        router.push("/home");
      }
    } else if (response?.status === 400) {
      alert("Invalid username or password.");
    }
  };

  const validateEmail = (email) => {
    const isEmailValid = emailValidator(email);
    if (isEmailValid !== true) {
      setErrors({ ...errors, email: isEmailValid });
    } else {
      setErrors({ ...errors, email: undefined });
    }
  };

  const validatePassword = (password) => {
    const isPasswordIsValid = passwordValidator(password);
    console.log("isPasswordIsValid", isPasswordIsValid);
    if (isPasswordIsValid !== true) {
      setErrors({ ...errors, password: isPasswordIsValid });
    } else {
      setErrors({ ...errors, password: undefined });
    }
  };

  useEffect(() => {
    let userToken = getCookie("token");
    if (userToken) {
      router.push("/home");
    }
  }, []);

  return (
    <main className="flex flex-col min-h-screen  items-center justify-center w-full bg-[url('/login-bg.jpg')] bg-fixed  bg-no-repeat bg-cover bg-center ">
      <div className="md:w-[500px] w-[90%]  backdrop-blur-md bg-white/20 p-5 lg:p-10 pb-16 rounded-lg flex-flex-col gap-4 lg:gap-8">
        <Image
          src="/logo.png"
          alt="Logo"
          className="mx-auto pointer-events-none select-none"
          width={200}
          height={200}
          priority
        />
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="mt-10 space-y-4">
            <div>
              <label className="block text-white font-bold" htmlFor="email">
                Email
              </label>
              <TextInput
                onBlur={(e) => {
                  validateEmail(e.target.value);
                }}
                onChange={(e) => {
                  setErrors({ ...errors, email: undefined });
                }}
              />
              {errors?.email && (
                <small className="text-red-500">{errors.email}</small>
              )}
            </div>
            <div>
              <label className="block text-white font-bold " htmlFor="password">
                Password
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                id="password"
                type="password"
                required
                autoComplete="password"
                onChange={(e) => {
                  setErrors({ ...errors, password: undefined });
                }}
                onBlur={(e) => {
                  validatePassword(e.target.value);
                }}
              />
              {errors?.password && (
                <small className="text-red-500">{errors.password}</small>
              )}
            </div>
            <Button type="submit" isLoading={isLoading}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
