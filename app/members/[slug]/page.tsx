/* eslint-disable @typescript-eslint/no-unused-vars */
import { teamMembers } from "@/data/members";
import { notFound } from "next/navigation";
import MemberPageClient from "./MemberPageClient"; // Assuming this component exists

// This function remains the same
export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

// Define the props for your page component, aligning with the error's expectation
interface MemberPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>; // <<<<< KEY CHANGE
}

// Your component must be async to await the props
export default async function MemberPage({ params, searchParams }: MemberPageProps) {
  // Await the params Promise to get the actual slug object
  const resolvedParams = await params;

  // If you were to use searchParams, you would await them too.
  // Even if you don't use searchParams in this component,
  // it needs to be typed correctly to satisfy the constraint.
  // Example of awaiting searchParams if needed:
  // const resolvedSearchParams = searchParams ? await searchParams : undefined;
  // if (resolvedSearchParams && resolvedSearchParams.someQueryParam) {
  //   console.log("Query param:", resolvedSearchParams.someQueryParam);
  // }

  const member = teamMembers.find((m) => m.slug === resolvedParams.slug);

  if (!member) {
    notFound();
    // Explicitly return null after notFound() in an async function
    return null;
  }

  return <MemberPageClient member={member} />;
}