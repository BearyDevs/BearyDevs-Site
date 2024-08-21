"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./utils/redux/store";

export interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const router = useRouter();

  return (
    <ReduxProvider store={store}>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </ReduxProvider>
  );
};

export default Providers;
