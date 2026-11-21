import type { Metadata } from "next";
import CaseStudyList from "@/components/CaseStudyList";
import PageHeader from "@/components/PageHeader";
import { getAllCaseStudies } from "@/lib/content";
import { baseOpenGraph } from "@/lib/site";

const description =
  "Case studies from Giddaa and drip.ng: what the problem was, what I built, and what I would do differently.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: { ...baseOpenGraph, title: "Work", description, url: "/work" },
};

export default function Page() {
  return (
    <>
      <PageHeader title="Work" description={description} />
      <div className="mt-10">
        <CaseStudyList studies={getAllCaseStudies()} />
      </div>
    </>
  );
}
