"use client";

import dynamic from "next/dynamic";
import React, { useCallback } from "react";

const VideoRender = dynamic(() => import("@/app/videoRender"), {
  ssr: false,
});

function VideoBG() {
  const Video = useCallback(() => {
    return <VideoRender />;
  }, []);

  return <Video />;
}

export default React.memo(VideoBG);
