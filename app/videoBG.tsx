"use client";

import { useSelector } from "react-redux";
import { ReduxState } from "./utils/redux/store";
import classNames from "classnames";

export default function VideoBG() {
  const minimized = useSelector((state: ReduxState) => state.minimized);

  return (
    <video
      className={classNames({
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-screen min-h-screen object-cover transition-all duration-1000":
          true,
        "opacity-15": !minimized,
        "opacity-50": minimized,
      })}
      autoPlay={true}
      muted
      loop
    >
      <source src="/videos/vbg.mp4" type="video/mp4" />
    </video>
  );
}
