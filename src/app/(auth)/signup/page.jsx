"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, Input, TextField, FieldError } from "@heroui/react";
import Link from "next/link";
import LottiAnimatin from "@/assets/signup.json.json";
import {
  FaUser,
  FaEnvelope,
  FaImage,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import Lottie from "lottie-react";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const signUpData = Object.fromEntries(formData.entries());
    // console.log(signUpData);

    const { data, error } = await authClient.signUp.email({
      name: signUpData.name,
      email: signUpData.email,
      image: signUpData.photo,
      password: signUpData.password,
    });

    if (error) {
      toast.error(`SignUp Failed.${error.message}`);
      return;
    } else {
      toast.success("Sign Up Successfully");
      router.push("/");
    }
  };

  const inputWrapper =
    "relative flex items-center border border-gray-200 rounded-xl px-3 py-2 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition";

  const iconStyle = "text-gray-400 mr-2";

  const validatePassword = (password) => {
    if (password.length < 6) return "At least 6 characters required";
    if (!/[A-Z]/.test(password)) return "One uppercase letter required";
    if (!/[a-z]/.test(password)) return "One lowercase letter required";
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      {/* LEFT SIDE - LOTTIE */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-md">
          <Lottie animationData={LottiAnimatin} loop />
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">
          {/* HEADER */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Create Account 🐾
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Join Petopia and start adopting pets
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            {/* NAME */}
            <div>
              <label className="text-sm font-medium text-gray-600">Name</label>
              <div className={inputWrapper}>
                <FaUser className={iconStyle} />
                <Input
                  name="name"
                  placeholder="Enter your name"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <div className={inputWrapper}>
                <FaEnvelope className={iconStyle} />
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* PHOTO */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Photo URL
              </label>
              <div className={inputWrapper}>
                <FaImage className={iconStyle} />
                <Input
                  name="photo"
                  placeholder="Profile image URL"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <div className={inputWrapper}>
                <FaLock className={iconStyle} />
                <Input
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full outline-none"
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="cursor-pointer text-gray-500"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <div className={inputWrapper}>
                <FaLock className={iconStyle} />
                <Input
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter password"
                  className="w-full outline-none"
                />
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="cursor-pointer text-gray-500"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white w-full rounded-xl py-2 mt-2"
            >
              Create Account
            </Button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-emerald-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
