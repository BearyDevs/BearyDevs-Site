import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { aboutNav } from "@/app/navigation";
import dynamic from "next/dynamic";

export type AboutSlug = (typeof aboutNav)[number]["slug"];

const CodeWithLineNumbers = dynamic(
  () => import("@/app/components/codeWithLineNumber"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

interface Props {
  params: {
    slug: AboutSlug;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const page = aboutNav.find((item) => item.slug === slug);
  const firstChar = page?.slug[0].toUpperCase();

  return {
    title: `${firstChar}${page?.slug.slice(1)} | BearyDevs`,
  };
}

// Server component that fetches and renders the file based on the slug
export default async function AboutPageSlug({ params }: Props) {
  const { slug } = params;

  let code = "";

  // Adjusting the file path according to the actual structure
  if (slug) {
    const filePath = path.join(process.cwd(), "app/data", slug + ".ts");
    if (!fs.existsSync(filePath)) {
      return notFound();
    } else {
      code = fs.readFileSync(filePath, "utf8");
    }
  } else {
    return notFound();
  }

  return (
    <SlugContainer>
      <CodeWithLineNumbers code={code} />
    </SlugContainer>
  );
}

function SlugContainer({ children }: PropsWithChildren) {
  return (
    <div className="animate-[fadeIn_0.5s] mobilexll:text-xs transition duration-300 text-gray-400">
      {children}
    </div>
  );
}
