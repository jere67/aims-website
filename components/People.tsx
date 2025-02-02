"use client"

import Image from "next/image"

export const orgData: OrgTreeData = {
  leaders: [
    {
      id: "majdi",
      name: "Majdi",
      role: "AIMS Lead",
      imageUrl: "/placeholder.svg?height=100&width=100",
      children: [
        {
          id: "omer",
          name: "Omer Erdem",
          role: "Reactors Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          children: [
            {
              id: "reactor-postdoc1",
              name: "Postdoc 1",
              role: "Postdoc",
              imageUrl: "/placeholder.svg?height=100&width=100",
            },
            {
              id: "reactor-phd1",
              name: "PhD Student 1",
              role: "PhD Student",
              imageUrl: "/placeholder.svg?height=100&width=100",
            },
          ],
        },
        {
          id: "mohammed",
          name: "Mohammed Al-Radaideh",
          role: "Computing Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          children: [
            {
              id: "computing-postdoc1",
              name: "Postdoc 1",
              role: "Postdoc",
              imageUrl: "/placeholder.svg?height=100&width=100",
            },
          ],
        },
        {
          id: "leo",
          name: "Leo Tunkle",
          role: "Controls Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          children: [
            {
              id: "controls-phd1",
              name: "PhD Student 1",
              role: "PhD Student",
              imageUrl: "/placeholder.svg?height=100&width=100",
            },
          ],
        },
      ],
    },
  ],
}

export interface TeamMember {
  id: string
  name: string
  role: string
  imageUrl?: string
  children?: TeamMember[]
}

export interface OrgTreeData {
  leaders: TeamMember[]
}

export default function OrgTree() {
  return (
    <div className="w-full -mt-16 mb-32">
      {/* Background layers matching existing design */}
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-12 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-16">
            Our People
          </h2>
        </div>

        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="min-w-[1000px]">
            {" "}
            {/* Minimum width to prevent squishing */}
            <div className="flex flex-col items-center">
              {/* Leaders Level */}
              <div className="flex justify-center gap-8 mb-8">
                {orgData.leaders.map((leader) => (
                  <MemberNode key={leader.id} member={leader} isLeader />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MemberNode({ member, isLeader = false }: { member: TeamMember; isLeader?: boolean }) {
  const hasChildren = member.children && member.children.length > 0

  return (
    <div className="flex flex-col items-center">
      {/* Member Card */}
      <div className={`flex flex-col items-center ${hasChildren ? "mb-8" : ""}`}>
        <div className={`relative ${isLeader ? "w-24 h-24" : "w-20 h-20"}`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-michigan to-blue-michigan/80" />
          <Image
            src={member.imageUrl || "/placeholder.svg"}
            alt={member.name}
            width={isLeader ? 96 : 80}
            height={isLeader ? 96 : 80}
            className="rounded-full border-4 border-white dark:border-zinc-800 relative z-10"
          />
        </div>
        <div className="mt-2 text-center">
          <h3 className="font-medium text-blue-michigan dark:text-white">{member.name}</h3>
          <p className="text-sm text-blue-michigan/60 dark:text-zinc-400">{member.role}</p>
        </div>
      </div>

      {/* Children Nodes */}
      {hasChildren && (
        <>
          {/* Vertical Line */}
          <div className="w-px h-8 bg-blue-michigan/20" />

          {/* Horizontal Line */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-px h-px w-full bg-blue-michigan/20" />
          </div>

          {/* Children */}
          <div className="flex gap-12 pt-8">
            {member.children?.map((child) => (
              <div key={child.id} className="relative">
                <MemberNode member={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

