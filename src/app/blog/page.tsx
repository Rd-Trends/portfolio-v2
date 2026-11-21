import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/content";
import { baseOpenGraph } from "@/lib/site";

const description =
  "Notes on building for the web: React, accessibility and frontend engineering.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { ...baseOpenGraph, title: "Writing", description, url: "/blog" },
};

export default function Page() {
  return (
    <>
      <PageHeader title="Writing" description={description} />
      <div className="mt-10">
        <PostList posts={getAllPosts()} />
      </div>
    </>
  );
}
