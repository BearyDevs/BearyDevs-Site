import { Link } from "@nextui-org/react";
import { getContents } from "@/app/libs/contents";

export default function BlogsPage() {
  const blogs = getContents("blogs");

  return (
    <div className="grid gap-2 lg:grid-cols-2 text-gray-300">
      {blogs.map((blog) => (
        <div
          key={blog.slug}
          className="flex flex-col gap-y-2 border border-[#898989]/20 p-2 rounded-xl md:gap-y-2.5 lg:gap-y-5"
        >
          <Link
            href={`/blogs/${blog.slug.toLowerCase()}`}
            className="text-lg font-bold text-[#C6C6C6] md:text-xl lg:text-2xl"
          >
            {blog.metadata.title}
          </Link>
          <p className="line-clamp-4 flex-1 text-sm">{blog.metadata.summary}</p>
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <p className="text-gray-500">
              Published on {blog.metadata.publishedDate}
            </p>
            <Link
              href={`/blogs/${blog.slug.toLowerCase()}`}
              className="flex items-center justify-center gap-2 gap-x-2 px-2.5 py-0.5 text-gray-600 hover:text-teal-200 transition-colors duration-300"
            >
              Read more &gt;&gt;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
