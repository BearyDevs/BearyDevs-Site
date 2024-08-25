import { MDXRenderer } from "@/app/components/mdx-renderer";
import { ENV } from "@/app/libs/constants";
import { getContents } from "@/app/libs/contents";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  let project = getContents("blogs").find(
    (post) => post.slug.toLowerCase() === params.slug.toLowerCase(),
  );
  if (!project) return;

  let { title, summary: description } = project.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${ENV.APP_URL}/blogs/${project.slug.toLowerCase()}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  const projects = getContents("blogs");
  return projects.map((project) => ({ slug: project.slug.toLowerCase() }));
}

export default function BlogsPage({ params }: Props) {
  const project = getContents("blogs").find(
    (project) => project.slug.toLowerCase() === params.slug.toLowerCase(),
  );
  if (!project) notFound();

  return <MDXRenderer source={project.content} />;
}
