import { Spinner } from "@nextui-org/react";

export default function LoadingMain() {
  return (
    <div className="min-w-full min-h-full flex items-center justify-center flex-col gap-8 text-gray-400 my-[10%] p-8">
      <Spinner color="secondary" size="lg" />
    </div>
  );
}
