import { teamMembers } from "@/data/members"
import { notFound } from "next/navigation"
import MemberPageClient from "./MemberPageClient"

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

export default function MemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug)
  
  if (!member) {
    notFound()
  }
  
  return <MemberPageClient member={member} />
}
