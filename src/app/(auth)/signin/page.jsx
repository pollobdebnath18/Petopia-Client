"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Description,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle, FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const signUpData = Object.fromEntries(formData.entries());
    // console.log(signUpData);

    const { data, error } = await authClient.signIn.email({
      email: signUpData.email,
      password: signUpData.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(`Sign In Failed.${error.message}`);
      return;
    } else {
      toast.success("Sign In Successfully");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* HEADER */}
        <h1 className="text-2xl font-bold text-center">Welcome Back 🐾</h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Login to adopt your favorite pets
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* EMAIL */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>

            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <Input name='email' placeholder="Enter your email" className="pl-10" />
            </div>

            <FieldError />
          </TextField>

          {/* PASSWORD */}
          <TextField isRequired name="password">
            <Label>Password</Label>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pl-10 pr-10"
              />

              {/* Eye toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <Description>Minimum 8 characters</Description>
            <FieldError />
          </TextField>

          {/* LOGIN BUTTON */}
          <Button
            type="submit"
            className="bg-green-600 text-white hover:bg-green-700 w-full"
          >
            <Check />
            Login
          </Button>
        </form>

        {/* DIVIDER */}
        <div className="my-4 flex items-center gap-3">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        {/* GOOGLE LOGIN */}
        <Button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100"
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </Button>

        {/* REGISTER */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-green-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
