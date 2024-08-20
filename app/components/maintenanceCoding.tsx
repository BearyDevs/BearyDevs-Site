import { IoWarningOutline } from "react-icons/io5";

export default function MaintenanceCoding() {
  return (
    <div className="animate-[fadeIn_0.3s] mobilexll:text-xs transition duration-300 text-gray-400">
      <h1 className="font-bold mb-2 flex items-center gap-2">
        {`Coding is in the development process...`.toUpperCase()}{" "}
        <IoWarningOutline className="text-yellow-500" />
      </h1>
    </div>
  );
}
