"use client";

import dynamic from "next/dynamic";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "./libs/redux/store";

const VideoRender = dynamic(() => import("./videoRender"), {
  ssr: false,
});

function VideoBG() {
  const minimized = useSelector((state: ReduxState) => state.minimized);

  const Video = useCallback(() => {
    return <VideoRender />;
  }, []);

  return minimized ? (
    <Video />
  ) : (
    <div
      style={{
        backgroundImage: "url(/bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        opacity: 0.15,
      }}
    />
  );
}

export default React.memo(VideoBG);
