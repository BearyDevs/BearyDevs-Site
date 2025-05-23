import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { Image } from "@nextui-org/react";
import classNames from "classnames";
import React from "react";
import Link from "next/link";

interface Props {
  source: string;
  title: string;
  components?: MDXRemoteProps["components"];
  limitWidth?: boolean;
}

const MDXRenderer = ({ source, title, components, limitWidth = true }: Props) => {
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
        <figure className="group relative">
          <Image
            removeWrapper
            src={src!}
            alt={alt!}
            style={{ boxShadow: "0 8px 24px 0 rgba(38, 183, 165, 0.3)", opacity: "0.9" }}
            className="mx-auto my-0 object-cover object-center w-full rounded-lg transition-all duration-500 group-hover:grayscale-0 tabletmd:group-hover:none"
            width={720}
            height={392}
          />
          <div className="tabletmd:hidden absolute left-1/2 top-0 transform -translate-x-1/2 grid h-full w-full place-items-center bg-[#080808]/85 transition-opacity duration-500 group-hover:opacity-0 z-20 rounded-lg">
            <p className="text-center text-3xl font-semibold">
              {title}
            </p>
          </div>
        </figure>
      ),
      a: (props) => <Link href={props.href!} target="_blank" {...props} />,
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

export default React.memo(MDXRenderer);
