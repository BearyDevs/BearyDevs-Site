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
  let project = getContents("projects").find(
    (post) => post.slug === params.slug,
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
      url: `${ENV.APP_URL}/blog/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  const projects = getContents("projects");
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: Props) {
  const project = getContents("projects").find(
    (project) => project.slug === params.slug,
  );
  if (!project) notFound();

  return <MDXRenderer source={project.content} />;
}
