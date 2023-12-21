"use client";

import Lottie from "lottie-react";
import React from "react";
import barLoaderAnimation from "./sayhi.json";

export default function LottieAnimation() {
  return (
    <div className="aspect-square w-[200px] mx-auto">
      <Lottie width={100} animationData={barLoaderAnimation} loop={true} />
    </div>
  );
}
