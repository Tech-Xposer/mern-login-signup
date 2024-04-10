import React from "react";
import Lottie from "react-lottie";

const LottieAnimation = ({ animationData }) => {
  if (!animationData) {
    return <div>Error: No animation data provided!</div>;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LottieAnimation;
