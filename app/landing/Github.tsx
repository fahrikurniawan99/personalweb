"use client";

import Lottie from "lottie-react";
import React from "react";
import barLoaderAnimation from "./github.json";

export default function GithubAnimation() {
  return (
    <div className="h-20 mx-auto mt-10 aspect-square">
      <Lottie width={100} animationData={barLoaderAnimation} loop={true} />
    </div>
  );
}
