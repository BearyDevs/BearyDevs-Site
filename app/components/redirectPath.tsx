"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  path: string;
}

export default function RedirectPath({ path }: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push(path);
  }, [router, path]);

  return null;
}
