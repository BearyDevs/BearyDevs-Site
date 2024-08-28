import classNames from "classnames";
import { ascii } from "../libs/logo";

export default function MainPage() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col self-center gap-16 pb-10 text-gray-400">
      <pre
        className={classNames({
          "text-[2dvw] leading-[0.9] tracking-[-0.1em] lg:text-[1.4dvh] text-teal-200 drop-shadow-glow":
            true,
          "animate-[fadeInDown_1s]": true,
        })}
      >
        {ascii}
      </pre>
      <div
        className={classNames({
          "text-center font-semibold mobilexll:text-xs transition duration-300 text-gray-400":
            true,
          "block animate-[fadeInDown_1.5s]": true,
        })}
      >
        <div>{`Self taught developer`.toUpperCase()}</div>
        <div>
          {`love to learn new things and always looking for new challenges`.toUpperCase()}
        </div>
        <div className="mt-4">
          <span className="font-bold text-teal-300">MOTTO: </span>
          {`keep learning, growing, and stay inspired`.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
