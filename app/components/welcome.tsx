"use client";

import { Image, Link } from "@nextui-org/react";
import classNames from "classnames";
import { useState, useEffect } from "react";

export default function Welcome() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-8 text-gray-400 mb-[10%]">
      <Image
        alt="bearydevs"
        removeWrapper
        src="/bearydevs.jpg"
        className={classNames({
          "w-20 h-20 text-large object-cover rounded-full shadow-gray-600 shadow-lg":
            true,
          hidden: !show,
          "block animate-[fadeInDown_0.5s]": show,
        })}
      />
      <pre
        className={classNames({
          "text-[2dvw] leading-[0.9] tracking-[-0.1em] lg:text-[1.4dvh] text-teal-200 drop-shadow-glow":
            true,
          hidden: !show,
          "block animate-[fadeInDown_1s]": show,
        })}
      >
        {ascii}
      </pre>
      <p
        className={classNames({
          "text-center font-semibold mobilexll:text-xs transition duration-300 text-gray-400":
            true,
          hidden: !show,
          "block animate-[fadeInDown_1.5s]": show,
        })}
      >
        KEEP LEARNING, GROWING, AND STAY INSPIRED
      </p>

      <div
        className={classNames({
          "absolute bottom-[-10px] right-3 mb-[65px] text-xs text-gray-500":
            true,
          hidden: !show,
          "block animate-[fadeInUp_1.5s]": show,
        })}
      >
        Designed by Bearydevs, inspired by{" "}
        <Link
          className="font-bold text-xs hover:text-white transition-colors duration-300 text-gray-500"
          // href="https://wiscaksono.com"
          href="https://github.com/wiscaksono/wiscaksono-site"
          target="_blank"
          rel="noreferrer"
        >
          Wiscaksono
        </Link>
      </div>
    </div>
  );
}

const ascii = `
__________                            ________                     
\\______   \\ ____ _____ _______ ___.__.\______ \\   _______  ________
 |    |  _// __ \\\\__  \\\\_  __ <   |  | |    |  \\_/ __ \\  \\/ /  ___/
 |    |   \\  ___/ / __ \\|  | \\/\\___  | |    \`   \\  ___/\\   /\\___ \\ 
 |______  /\\___  >____  /__|   / ____|/_______  /\\___  >\\_//____  >
        \\/     \\/     \\/       \\/             \\/     \\/         \\/ 
                                                                      
`;
