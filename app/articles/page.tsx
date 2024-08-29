import Link from "next/link";
import { getContents } from "@/app/libs/contents";

export default function Articles() {
  const articles = getContents("articles");
  return (
    <div className="grid gap-2 lg:grid-cols-2">
      {articles.map((article) => (
        <div
          key={article.slug}
          className="flex flex-col gap-y-2 border border-[#898989]/20 p-2 md:gap-y-2.5 lg:gap-y-5"
        >
          <Link
            href={`/articles/${article.slug.toLowerCase()}`}
            className="text-lg font-semibold text-[#C6C6C6] md:text-xl lg:text-2xl"
          >
            {article.metadata.title}
          </Link>
          <p className="line-clamp-4 flex-1 text-sm">
            {article.metadata.summary}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <p>Published on {article.metadata.publishedDate}</p>
            <Link
              href={`/articles/${article.slug.toLowerCase()}`}
              className="flex items-center justify-center gap-2 gap-x-2 bg-[#103f3c75] text-gray-300 px-2.5 py-0.5 rounded-md"
            >
              Read more &gt;&gt;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
