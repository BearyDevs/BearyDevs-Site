"use client";

import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { ReduxState } from "@/app/libs/redux/store";

function VideoRender() {
  const minimized = useSelector((state: ReduxState) => state.minimized);

  return (
    <video
      className={classNames({
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-screen min-h-screen object-cover transition-all duration-500":
          true,
        "hidden lg:block": true,
        "opacity-15": !minimized,
        "opacity-50": minimized,
      })}
      autoPlay={true}
      muted
      loop
    >
      <source src="/videos/bg.mp4" type="video/mp4" />
    </video>
  );
}

export default React.memo(VideoRender);
