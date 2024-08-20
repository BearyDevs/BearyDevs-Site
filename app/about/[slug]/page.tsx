import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import CodeWithLineNumbers from "@/app/components/codeWithLineNumber";
import fs from "fs";
import path from "path";
import { aboutSelect } from "./_components/neotree-about";

// Dynamically type the slug from aboutSelect
type AboutSlug = (typeof aboutSelect)[number]["slug"];

interface Props {
  params: {
    slug: AboutSlug;
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
    <div className="animate-[fadeIn_0.3s] mobilexll:text-xs transition duration-300 text-gray-400">
      {children}
    </div>
  );
}
