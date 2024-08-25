import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import MdxArticle from "./mdx-article";
import { Image } from "@nextui-org/react";

interface Props {
  source: string;
  components?: MDXRemoteProps["components"];
  limitWidth?: boolean;
}

export const MDXRenderer = ({
  source,
  components,
  limitWidth = true,
}: Props) => {
  const mdxSource: MDXRemoteProps = {
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [rehypePrettyCode, { keepBackground: false, theme: "poimandres" }],
        ],
      },
    },
    components: {
      img: ({ src, alt }) => (
        <Image
          removeWrapper
          src={src!}
          alt={alt!}
          className="mx-auto my-0 object-cover object-center md:max-w-[80%] rounded-none"
          // priority
          width={820}
          height={492}
          // quality={100}
          // unoptimized={src?.includes(".gif")}
        />
      ),
      a: (props) => <a href={props.href} target="_blank" {...props} />,
      ...components,
    },
  };

  return (
    <MdxArticle limitWidth={limitWidth}>
      <MDXRemote {...mdxSource} />
    </MdxArticle>
  );
};
