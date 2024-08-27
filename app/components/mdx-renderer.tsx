import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { Image } from "@nextui-org/react";
import classNames from "classnames";

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
          width={820}
          height={492}
        />
      ),
      a: (props) => <a href={props.href} target="_blank" {...props} />,
      ...components,
    },
  };

  return (
    <article
      className={classNames({
        "prose min-h-max prose-neutral prose-invert mx-auto font-sans prose-headings:text-[#C6C6C6] prose-p:text-[#898989] prose-a:text-[#C6C6C6] prose-strong:text-[#C6C6C6] animate-[fadeIn_0.5s] pt-1 h-auto max-h-max pb-[20px] tabletmd:pb-[60px]":
          true,
        "max-w-5xl": limitWidth,
        "max-w-none": !limitWidth,
      })}
    >
      <MDXRemote {...mdxSource} />
    </article>
  );
};
