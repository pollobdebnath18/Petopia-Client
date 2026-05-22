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
import { Icon } from "@iconify/react";

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

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 px-4 dark:from-slate-950 dark:via-zinc-900 dark:to-black">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 dark:bg-black">
        {/* HEADER */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text text-center pb-6">
          Welcome Back 🐾
        </h1>{" "}
        {/* FORM */}
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* EMAIL */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>

            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <Input
                name="email"
                placeholder="Enter your email"
                className="pl-10"
              />
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
            className="w-full relative overflow-hidden rounded-xl 
  bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500
  text-white font-semibold
  shadow-lg hover:shadow-emerald-500/30
  transition-all duration-300
  hover:scale-[1.02] active:scale-[0.98]"
          >
            <Check className="mr-2 h-4 w-4" />
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
          className="w-full"
          variant="tertiary"
          onClick={handleGoogleSignIn}
        >
          <Icon icon="devicon:google" />
          Sign in with Google
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
