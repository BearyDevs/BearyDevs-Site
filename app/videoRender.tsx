import classNames from "classnames";

export default function VideoRender() {
  return (
    <video
      className={classNames({
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-screen min-h-screen object-cover transition-all duration-1000 opacity-50":
          true,
      })}
      autoPlay={true}
      muted
      loop
    >
      <source src="/videos/vbg.mp4" type="video/mp4" />
    </video>
  );
}
