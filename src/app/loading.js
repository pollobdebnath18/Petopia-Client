import React from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <PulseLoader color="#22c55e" size={20} />
    </div>
  );
};

export default Loading;
