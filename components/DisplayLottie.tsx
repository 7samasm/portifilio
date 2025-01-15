import React from "react";
import Lottie, { Options } from "react-lottie";

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    /* @ts-ignore */
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
