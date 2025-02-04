"use client"

import Image from "next/image"
import { useState, useId, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { DoorClosedIcon as CloseIcon } from "lucide-react"

export const orgData: OrgTreeData = {
  leaders: [
    {
      id: "majdi",
      name: "Majdi Radaideh",
      role: "AIMS Lead",
      imageUrl: "/placeholder.svg?height=100&width=100",
      bio: "",
      children: [
        {
          id: "omer",
          name: "Omer Erdem",
          role: "Reactors Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          bio: "",
          children: [
            {
              id: "reactor-postdoc1",
              name: "Postdoc 1",
              role: "Postdoc",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
            },
            {
              id: "reactor-phd1",
              name: "PhD Student 1",
              role: "PhD Student",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
            },
          ],
        },
        {
          id: "mohammed",
          name: "Mohammed Al-Radaideh",
          role: "Computing Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          bio: "",
          children: [
            {
              id: "computing-postdoc1",
              name: "Postdoc 1",
              role: "Postdoc",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
            },
          ],
        },
        {
          id: "leo",
          name: "Leo Tunkle",
          role: "Controls Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          bio: "",
          children: [
            {
              id: "controls-phd1",
              name: "PhD Student 1",
              role: "PhD Student",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
            },
          ],
        },
        {
          id: "patrick",
          name: "Patrick Myers",
          role: "HPC Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          bio: "",
          children: [
            {
              id: "hpc-phd1",
              name: "PhD Student 1",
              role: "PhD Student",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
            },
          ],
        },
        {
          id: "lada",
          name: "Lada Protchetva",
          role: "AIMS Lab Space Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          bio: "",
          children: [
            {
              id: "lab-phd1",
              name: "PhD Student 1",
              role: "PhD Student",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
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
  bio?: string
  children?: TeamMember[]
}

export interface OrgTreeData {
  leaders: TeamMember[]
}

export default function OrgTree() {
  return (
    <div className="w-full -mt-16 mb-32">
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-12 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-16">
            Our <span className="text-yellow-maize">People</span>
          </h2>
        </div>
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="min-w-[1000px]">
            <div className="flex flex-col items-center">
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
  const [active, setActive] = useState(false)
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)
  const hasChildren = member.children && member.children.length > 0

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  return (
    <div className="flex flex-col items-center">
      <div className={`flex flex-col items-center ${hasChildren ? "mb-8" : ""}`}>
        <motion.div
          layoutId={`card-${member.id}-${id}`}
          onClick={() => setActive(true)}
          className="relative cursor-pointer flex flex-col items-center"
        >
          <div className={`relative ${isLeader ? "w-24 h-24" : "w-20 h-20"}`}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-michigan to-blue-michigan/80" />
            <motion.div layoutId={`image-${member.id}-${id}`}>
              <Image
                src={member.imageUrl || "/placeholder.svg"}
                alt={member.name}
                width={isLeader ? 96 : 80}
                height={isLeader ? 96 : 80}
                className="rounded-full border-4 border-white dark:border-zinc-800 relative z-10"
              />
            </motion.div>
          </div>
          <motion.div layoutId={`info-${member.id}-${id}`} className="mt-2 text-center">
            <h3 className="font-medium text-blue-michigan dark:text-white">{member.name}</h3>
            <p className="text-sm text-blue-michigan/60 dark:text-zinc-400">{member.role}</p>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-[60] flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActive(false)
            }}
          >
            <motion.div
              layoutId={`card-${member.id}-${id}`}
              ref={ref}
              className="relative w-full max-w-[500px] h-fit max-h-[90vh] flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div layoutId={`image-${member.id}-${id}`} className="relative h-64">
                <Image src={member.imageUrl || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </motion.div>
              <motion.div layoutId={`info-${member.id}-${id}`} className="p-6">
                <h3 className="text-xl font-bold text-blue-michigan dark:text-white">{member.name}</h3>
                <p className="text-blue-michigan/60 dark:text-zinc-400">{member.role}</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-blue-michigan/80 dark:text-zinc-300"
                >
                  {member.bio}
                </motion.div>
              </motion.div>
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-zinc-800/90"
                onClick={() => setActive(false)}
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasChildren && (
        <>
          <div className="w-px h-8 bg-blue-michigan/20" />
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-px h-px w-full bg-blue-michigan/20" />
          </div>
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

