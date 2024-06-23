import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

const components = {};

type CustomMDXProps = {
  components?: Record<string, React.ComponentType>;
  source: string;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          rehypePlugins: [
            [
              // @ts-ignore
              rehypePrettyCode,
              { keepBackground: false, theme: "one-dark-pro" },
            ],
          ],
        },
      }}
    />
  );
}
