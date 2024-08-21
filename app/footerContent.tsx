"use client";

import { useSelector } from "react-redux";
import { ReduxState } from "./utils/redux/store";
import classNames from "classnames";

export default function FooterContent() {
  const minimized = useSelector((state: ReduxState) => state.minimized);

  return (
    <footer
      className={classNames({
        "absolute bottom-0 text-gray-600 transition-colors duration-300 cursor-default pb-2 text-xs text-center":
          true,
        "animate-[fadeOut_1s]": minimized,
        "animate-[fadeIn_1s]": !minimized,
      })}
      style={{ animationFillMode: "both" }}
    >
      Teerapat Wassavanich (+6683-8982566) teerapat.tech@gmail.com Thailand
      (TOYLAB Corp.)
    </footer>
  );
}
