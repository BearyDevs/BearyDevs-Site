import Link from "next/link";
import { getContents } from "@/app/libs/contents";
import { Image } from "@nextui-org/react";

interface Props {
  searchParams: {
    tag?: string;
  };
}

export default function ProjectsPage({ searchParams }: Props) {
  const technology = searchParams.tag;
  const projects = technology
    ? getContents("projects").filter((project) =>
        project.metadata.technology?.includes(technology),
      )
    : getContents("projects");

  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-[fadeIn_0.5s] pb-[15%] lg:pb-0 text-gray-300">
      {projects.length > 0 ? (
        projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="divide-y divide-[#898989]/20 overflow-hidden border border-[#898989]/20"
          >
            <figure className="group relative aspect-video">
              <Image
                removeWrapper
                src={project.metadata.image!}
                alt={project.metadata.title}
                // quality={10}
                // fill
                // sizes="100%"
                className="object-cover object-center grayscale-[50%] transition-all duration-500 group-hover:grayscale-0 rounded-none"
                // priority
              />
              <div className="absolute left-0 top-0 grid h-full w-full place-items-center bg-[#080808]/90 transition-opacity duration-500 group-hover:opacity-0 z-20">
                <p className="text-center text-3xl font-semibold uppercase">
                  {project.metadata.title}
                </p>
              </div>
              <div
                className="absolute left-0 top-0 h-full w-full opacity-[2%] group-hover:opacity-0"
                style={{
                  backgroundImage:
                    "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
                  backgroundRepeat: "repeat",
                }}
              />
            </figure>
            <div className="p-2">
              <p className="line-clamp-4 text-sm">{project.metadata.summary}</p>
            </div>
          </Link>
        ))
      ) : (
        <div className="text-gray-400 p-4">
          <h1>No Projects</h1>
        </div>
      )}
    </div>
  );
}
