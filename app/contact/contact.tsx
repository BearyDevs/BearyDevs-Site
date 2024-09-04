"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";
import { ENV } from "../libs/constants";

export default function Contact() {
  return (
    <div className="text-[#7f7f7f] font-semibold px-1 py-0.5 flex items-start justify-center flex-col gap-8 mt-10 ml-4">
      {/* CV Download */}
      <div
        className="flex items-center gap-20 group cursor-pointer"
        onClick={() => window.open(ENV.CV_URL, "_blank")}
      >
        <button
          name="cv-button"
          aria-label="cv download"
          className="rounded-full"
        >
          <GrDocumentUser
            className="group-hover:text-white transition-colors duration-300"
            size={"36px"}
          />
        </button>
        <p className="group-hover:text-white transition-colors duration-300">
          Download my CV
        </p>
      </div>

      {/* Facebook */}
      <div
        className="flex items-center gap-20 group cursor-pointer"
        onClick={() =>
          window.open("https://www.facebook.com/bearyman", "_blank")
        }
      >
        <button
          name="facebook-button"
          aria-label="Facebook"
          className="rounded-full"
        >
          <FaFacebook
            className="group-hover:text-white transition-colors duration-300"
            size={"36px"}
          />
        </button>
        <p className="group-hover:text-white transition-colors duration-300">
          Visit my Facebook
        </p>
      </div>

      {/* GitHub */}
      <div
        className="flex items-center gap-20 group cursor-pointer"
        onClick={() => window.open(ENV.GITHUB_URL, "_blank")}
      >
        <button
          name="github-button"
          aria-label="GitHub"
          className="rounded-full"
        >
          <GitHubLogoIcon className="group-hover:text-white transition-colors duration-300 w-[36px] h-[36px]" />
        </button>
        <p className="group-hover:text-white transition-colors duration-300">
          View my GitHub
        </p>
      </div>

      {/* Facebook Page */}
      <div
        className="flex items-center gap-20 group cursor-pointer"
        onClick={() =>
          window.open(
            "https://www.facebook.com/profile.php?id=61554981140896",
            "_blank",
          )
        }
      >
        <button
          name="facebook-page-button"
          aria-label="Facebook Page"
          className="rounded-full"
        >
          <MdOutlineContactPhone
            className="group-hover:text-white transition-colors duration-300"
            size={"36px"}
          />
        </button>
        <p className="group-hover:text-white transition-colors duration-300">
          Visit my company Facebook
        </p>
      </div>

      {/* LinkedIn */}
      <div
        className="flex items-center gap-20 group cursor-pointer"
        onClick={() => window.open(ENV.LINKEDIN_URL, "_blank")}
      >
        <button
          name="linkedin-button"
          aria-label="LinkedIn"
          className="rounded-full"
        >
          <FaLinkedin className="group-hover:text-white transition-colors duration-300 w-[36px] h-[36px]" />
        </button>
        <p className="group-hover:text-white transition-colors duration-300">
          Connect on LinkedIn
        </p>
      </div>
    </div>
  );
}
