"use client"

import Image from "next/image"
import { useState, useId, useRef, useEffect } from "react"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { DoorClosedIcon as CloseIcon, ChevronDown } from "lucide-react"
import { Button } from "@heroui/react"
import Link from "next/link"

export const orgData: OrgTreeData = {
  leaders: [
    {
      id: "majdi",
      name: "Majdi Radaideh",
      status: "Principal Investigator",
      role: "AIMS Lead",
      imageUrl: "/placeholder.svg?height=100&width=100",
      bio: "",
      children: [
        {
          id: "omer",
          name: "Omer Erdem",
          status: "Lead Researcher",
          role: "Reactors Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          bio: "",
          children: [
            {
              id: "reactor-postdoc1",
              name: "Postdoc",
              status: "Postdoc",
              role: "Postdoc",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
            },
            {
              id: "reactor-phd1",
              name: "PhD Student",
              status: "PhD Student",
              role: "PhD Student",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
            },
          ],
        },
        {
          id: "mohammed",
          name: "Mohammed Al-Radaideh",
          status: "Lead Researcher",
          role: "Computing Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          bio: "",
          children: [
            {
              id: "computing-postdoc1",
              name: "Postdoc",
              status: "Postdoc",
              role: "Postdoc",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
              children: [
                {
                  id: "computing-undergraduate1",
                  name: "Undergraduate Student",
                  status: "Undergraduate Student",
                  role: "Undergraduate Student",
                  imageUrl: "/placeholder.svg?height=100&width=100",
                  bio: "",
                },
              ],
            },
          ],
        },
        {
          id: "leo",
          name: "Leo Tunkle",
          status: "Lead Researcher",
          role: "Controls Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          bio: "",
          children: [
            {
              id: "controls-phd1",
              name: "PhD Student",
              status: "PhD Student",
              role: "PhD Student",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
            },
          ],
        },
        {
          id: "patrick",
          name: "Patrick Myers",
          status: "Lead Researcher",
          role: "HPC Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          bio: "",
          children: [
            {
              id: "hpc-phd1",
              name: "PhD Student",
              status: "PhD Student",
              role: "PhD Student",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
            },
          ],
        },
        {
          id: "lada",
          name: "Lada Protchetva",
          status: "Lead Researcher",
          role: "AIMS Lab Space Lead",
          imageUrl: "/placeholder.svg?height=100&width=100",
          bio: "",
          children: [
            {
              id: "lab-phd1",
              name: "PhD Student",
              status: "PhD Student",
              role: "PhD Student",
              imageUrl: "/placeholder.svg?height=100&width=100",
              bio: "",
              children: [
                {
                  id: "lab-grad1",
                  name: "Graduate Student",
                  status: "Graduate Student",
                  role: "Graduate Student",
                  imageUrl: "/placeholder.svg?height=100&width=100",
                  bio: "",
                },
              ],
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
  status: string
  role: string
  imageUrl?: string
  bio?: string
  children?: TeamMember[]
}

export interface OrgTreeData {
  leaders: TeamMember[]
}

const groupByLevel = (leaders: TeamMember[]): Record<string, TeamMember[]> => {
  const levels: Record<string, TeamMember[]> = {
    "Principal Investigators": [],
    "Lead Researchers": [],
    "Postdocs": [],
    "PhD Students": [],
    "Graduate Students": [],
    "Undergraduate Students": [],
  }

  const flattenMembers = (member: TeamMember) => {
    if (member.status === "Principal Investigator") {
      levels["Principal Investigators"].push(member)
    } else if (member.status === "Lead Researcher") {
      levels["Lead Researchers"].push(member)
    } else if (member.status === "Postdoc") {
      levels["Postdocs"].push(member)
    } else if (member.status === "PhD Student") {
      levels["PhD Students"].push(member)
    } else if (member.status === "Graduate Student") {
      levels["Graduate Students"].push(member)
    } else if (member.status === "Undergraduate Student") {
      levels["Undergraduate Students"].push(member)
    }

    if (member.children) {
      member.children.forEach(flattenMembers)
    }
  }

  leaders.forEach(flattenMembers)
  return levels
}

interface AccordionItemProps {
  title: string
  members: TeamMember[]
  isExpanded: boolean
  onToggle: () => void
}

interface AccordionProps {
  items: Array<{
    title: string
    members: TeamMember[]
  }>
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  members,
  isExpanded,
  onToggle,
}) => {
  const cardVariants: Variants = {
    collapsed: {
      height: "60px",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    expanded: {
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  }

  const contentVariants: Variants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  }

  const chevronVariants: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  }

  return (
    <motion.div
      className="w-full my-4 h-full select-none overflow-hidden rounded-lg border border-blue-michigan/20 dark:border-zinc-700"
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
    >
      <div
        onClick={onToggle}
        className="flex items-center justify-between p-4 text-blue-michigan dark:text-white cursor-pointer"
      >
        <h2 className="m-0 text-lg font-semibold">{title}</h2>
        <motion.div variants={chevronVariants}>
          <ChevronDown size={18} />
        </motion.div>
      </div>
      <motion.div
        className="px-4 py-4"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
      >

        <div className="flex flex-wrap gap-4 justify-start">
          {members.map((member) => (
            <MemberNode key={member.id} member={member} viewMode="accordion" />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) =>
        item.members.length > 0 ? (
          <AccordionItem
            key={index}
            title={item.title}
            members={item.members}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ) : null
      )}
    </div>
  )
}

function MemberNode({
  member,
  isLeader = false,
  viewMode = "tree",
}: {
  member: TeamMember
  isLeader?: boolean
  viewMode?: "tree" | "accordion"
}) {
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

  const handleMemberClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActive(true)
  }

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActive(false)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`flex flex-col items-center ${hasChildren && viewMode === "tree" ? "mb-8" : ""}`}>
        <motion.div
          layoutId={`card-${member.id}-${id}`}
          onClick={handleMemberClick}
          className="relative cursor-pointer flex flex-col items-center"
        >
          <motion.div className={`relative ${isLeader ? "w-24 h-24" : "w-20 h-20"}`}>
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
          </motion.div>
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-[60] flex items-center justify-center"
            onClick={handleModalClose}
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

      {hasChildren && viewMode === "tree" && (
        <>
          <div className="w-px h-8 bg-blue-michigan/20" />
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-px h-px w-[calc(100%+2rem)] bg-blue-michigan/20" />
          </div>
          <div className="flex gap-12 pt-8">
            {member.children?.map((child) => (
              <div key={child.id} className="relative">
                <MemberNode member={child} viewMode="tree" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function OrgTree() {
  const [viewMode, setViewMode] = useState<"tree" | "accordion">("accordion")
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const levels = groupByLevel(orgData.leaders)

  const accordionItems = [
    { title: "Principal Investigators", members: levels["Principal Investigators"] },
    { title: "Lead Researchers", members: levels["Lead Researchers"] },
    { title: "Postdocs", members: levels["Postdocs"] },
    { title: "PhD Students", members: levels["PhD Students"] },
    { title: "Graduate Students", members: levels["Graduate Students"] },
    { title: "Undergraduate Students", members: levels["Undergraduate Students"] },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="w-full -mt-16 mb-32">
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-12 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-6">
            Our <span className="text-yellow-maize">People</span>
          </h2>
          <p className='text-xl text-center tracking-tight text-blue-michigan mb-4'>
            Meet the talented researchers, scientists, and students who make our lab's groundbreaking work possible.
          </p>

          {isLargeScreen && (
            <button
              onClick={() => setViewMode(viewMode === "tree" ? "accordion" : "tree")}
              className="mb-8 px-4 py-2 bg-blue-michigan text-yellow-maize font-bold rounded-lg hover:bg-blue-michigan/80 transition"
            >
              View By {viewMode === "tree" ? "Status" : "Group"}
            </button>
          )}
        </div>
        <div className="container mx-auto px-4">
          {viewMode === "tree" && isLargeScreen ? (
            <div className="min-w-[1000px] overflow-x-auto">
              <div className="flex flex-col items-center">
                <div className="flex justify-center gap-8 mb-8">
                  {orgData.leaders.map((leader) => (
                    <MemberNode key={leader.id} member={leader} isLeader viewMode="tree" />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <Accordion items={accordionItems} />
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/members">
            <Button
              className="px-12 py-0 text-xl font-semibold text-yellow-maize bg-blue-michigan rounded-full hover:bg-blue-michigan/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              size="lg"
            >
              Member Directory
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}