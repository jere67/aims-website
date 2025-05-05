"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { Button } from "@heroui/react"

export const orgData: OrgTreeData = {
  leaders: [
    {
      id: "radaideh",
      name: "Majdi Radaideh",
      status: "Principal Investigator",
      role: "AIMS Lead",
      imageUrl: "/people/radaideh.jpg",
      children: [
        {
          id: "hyungjki",
          name: "Dr. Hyungjun Kim",
          status: "Group Lead",
          role: "Research Scientist",
          imageUrl: "/people/hyungjki.jpg",
        },
        {
          id: "oferdem",
          name: "Omer Erdem",
          status: "Group Lead",
          role: "Reactors Lead",
          imageUrl: "/people/oferdem.png",
          children: [
            {
              id: "eaheart",
              name: "Meredith Eaheart",
              status: "PhD",
              role: "PhD",
              imageUrl: "/people/eaheart.jpg",
              children: [
                {
                  id: "davidgw",
                  name: "David Wenger",
                  status: "Undergraduate",
                  role: "Undergraduate",
                  imageUrl: "/people/davidgw.jpg",
                },
                {
                  id: "jacc",
                  name: "Jacob T. Cooper",
                  status: "Undergraduate",
                  role: "Undergraduate",
                  imageUrl: "/people/jacc.jpg",
                },
              ]
            },
            {
              id: "npanczyk",
              name: "Nataly Panczyk",
              status: "PhD",
              role: "PhD",
              imageUrl: "/people/npanczyk.JPG",
              children: [
                {
                  id: "clairekm",
                  name: "Clair Kaufman",
                  status: "Undergraduate",
                  role: "Undergraduate",
                  imageUrl: "/people/clairekm.jpg",
                },
                {
                  id: "jelenes",
                  name: "Jazmin Elenes",
                  status: "Undergraduate",
                  role: "Undergraduate",
                  imageUrl: "/people/jelenes.jpg",
                },
              ]
            },
            {
              id: "sarmiento",
              name: "Marco Sarmiento",
              status: "Graduate",
              role: "Graduate",
              imageUrl: "/people/sarmiento.jpg",
            },
          ],
        },
        {
          id: "mohammed",
          name: "Mohammed Al-Radaideh",
          status: "Group Lead",
          role: "Computing Lead",
          imageUrl: "/people/malradai.jpg",
          children: [
            {
              id: "shebromi",
              name: "Fares Shebromi",
              status: "PhD",
              role: "PhD",
              imageUrl: "/people/shebromi.png",
            },
            {
              id: "almulhim",
              name: "Yasir Almulhim",
              status: "PhD",
              role: "PhD",
              imageUrl: "/people/almulhim.png",
            },
            {
              id: "namanb",
              name: "Naman Bhargava",
              status: "Graduate",
              role: "Graduate",
              imageUrl: "/people/namanb.jpg",
              children: [
                {
                  id: "asgala",
                  name: "Andre Gala-Garza",
                  status: "Undergraduate",
                  role: "Undergraduate",
                  imageUrl: "/people/asgala.jpg",
                },
                {
                  id: "akutira",
                  name: "Arvind Kutirakulam",
                  status: "Undergraduate",
                  role: "Undergraduate",
                  imageUrl: "/people/akutira.png",
                },
                {
                  id: "jeremoon",
                  name: "Jeremy Moon",
                  status: "Undergraduate",
                  role: "Undergraduate",
                  imageUrl: "/people/jeremoon.jpeg",
                },
              ],
            },
            {
              id: "shomas",
              name: "Shoma Sawa",
              status: "Graduate",
              role: "Graduate",
              imageUrl: "/people/shomas.jpg",
              children: [
                {
                  id: "huawens",
                  name: "Huawen Shen",
                  status: "Undergraduate",
                  role: "Undergraduate",
                  imageUrl: "/people/huawens.jpg",
                },
                {
                  id: "yikuny",
                  name: "Yikun Yang",
                  status: "Undergraduate",
                  role: "Undergraduate",
                  imageUrl: "/people/yikuny.jpg",
                },
              ],
            },
          ],
        },
        {
          id: "leo",
          name: "Leo Tunkle",
          status: "Group Lead",
          role: "Controls Lead",
          imageUrl: "/people/tunkleo.jpg",
          children: [
            {
              id: "abkamal",
              name: "Kamal Kayode Abdulraheem",
              status: "Postdoc",
              role: "Postdoc",
              imageUrl: "/people/abkamal.jpg",
            },
            {
              id: "lprotche",
              name: "Lada Protcheva",
              status: "PhD",
              role: "PhD",
              imageUrl: "/people/lprotche.jpg",
            },
            {
              id: "nucleai",
              name: "Logan Burnett",
              status: "PhD",
              role: "PhD",
              imageUrl: "/people/nucleai.jpg",
            },
            {
              id: "unabila",
              name: "Umme Mahbuba Nabila",
              status: "PhD",
              role: "PhD",
              imageUrl: "/people/unabila.jpg",
            },
            {
              id: "njotwani",
              name: "Nitin Jotwani",
              status: "Graduate",
              role: "Graduate",
              imageUrl: "/people/njotwani.jpg",
            },
          ],
        },
        {
          id: "myerspat",
          name: "Patrick Myers",
          status: "Group Lead",
          role: "HPC Lead",
          imageUrl: "/people/myerspat.jpg",
          children: [
            {
              id: "aims01-machine",
              name: "AIMS01 Machine",
              status: "AIMS01 Machine",
              role: "AIMS01 Machine",
              imageUrl: "/people/default.jpg",
            },
            {
              id: "aims02-machine",
              name: "AIMS02 Machine",
              status: "AIMS02 Machine",
              role: "AIMS02 Machine",
              imageUrl: "/people/default.jpg",
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
    "Group Leads": [],
    "Research Fellows and Scientists": [],
    "PhD + Graduate": [],
    "Undergraduates": [],
  }

  const flattenMembers = (member: TeamMember) => {
    if (member.status === "Principal Investigator") {
      levels["Principal Investigators"].push(member)
    } else if (member.status === "Group Lead") {
      levels["Group Leads"].push(member)
    } else if (member.status === "Research Fellow and Scientist") {
      levels["Research Fellows and Scientists"].push(member)
    } else if (member.status === "PhD" || member.status === "Graduate") {
      levels["PhD + Graduate"].push(member)
    } else if (member.status === "Undergraduate") {
      levels["Undergraduates"].push(member)
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
        <div className="flex flex-wrap gap-4 justify-center">
          {members.map((member) => (
            <MemberNode key={member.id} member={member} viewMode="accordion" />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedStates, setExpandedStates] = useState<boolean[]>(
    items.map(() => true)
  );

  const handleToggle = (index: number) => {
    setExpandedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) =>
        item.members.length > 0 ? (
          <AccordionItem
            key={index}
            title={item.title}
            members={item.members}
            isExpanded={expandedStates[index]}
            onToggle={() => handleToggle(index)}
          />
        ) : null
      )}
    </div>
  );
};

function MemberNode({
  member,
  isLeader = false,
  viewMode = "tree",
}: {
  member: TeamMember
  isLeader?: boolean
  viewMode?: "tree" | "accordion"
}) {
  const hasChildren = member.children && member.children.length > 0

  return (
    <div className={`member-node-container relative flex flex-col items-center ${viewMode === 'tree' ? 'inline-block align-top px-10 py-4' : ''}`}>
      {!isLeader && viewMode === 'tree' && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-blue-michigan/20" />
      )}

      <Link href={`/members/${member.id}`} className="relative z-10 flex flex-col items-center bg-white dark:bg-zinc-900 mt-8 cursor-pointer group">
        <div className={`relative ${isLeader ? "w-48 h-48" : "w-40 h-40"} rounded-full overflow-hidden border-8 border-white dark:border-zinc-800 group-hover:border-yellow-maize transition-colors duration-200`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-michigan to-blue-michigan/80" />
          <Image
            src={member.imageUrl || "/people/default.jpg"}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 160px, (max-width: 1200px) 160px, 192px"
            className="relative z-10 object-cover"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-lg text-blue-michigan dark:text-white group-hover:text-yellow-maize transition-colors duration-200">{member.name}</h3>
          <p className="text-md text-blue-michigan/70 dark:text-zinc-400">{member.role}</p>
        </div>
      </Link>

      {hasChildren && viewMode === 'tree' && (
        <div className="children-section relative w-full pt-8">
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-8 bg-blue-michigan/20" />
          <div className="absolute top-0 left-10 right-10 h-px bg-blue-michigan/20" />
          <div className="flex justify-center gap-x-0 mt-0 whitespace-nowrap">
            {member.children?.map((child) => (
              <MemberNode key={child.id} member={child} viewMode="tree" />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function OrgTree() {
  const [viewMode, setViewMode] = useState<"tree" | "accordion">("accordion")
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const levels = groupByLevel(orgData.leaders)

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const majdiNodeRef = useRef<HTMLDivElement>(null);

  const accordionItems = [
    { title: "Principal Investigators", members: levels["Principal Investigators"] },
    { title: "Group Leads", members: levels["Group Leads"] },
    { title: "Research Fellows and Scientists", members: levels["Research Fellows and Scientists"] },
    { title: "PhD + Graduate", members: levels["PhD + Graduate"] },
    { title: "Undergraduates", members: levels["Undergraduates"] },
  ]

  useEffect(() => {
    const handleResize = () => {
      const largeScreen = window.innerWidth >= 768;
      setIsLargeScreen(largeScreen);
      if (!largeScreen && viewMode === "tree") {
        setViewMode("accordion");
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [viewMode])

  useEffect(() => {
    if (viewMode === 'tree' && isLargeScreen && scrollContainerRef.current && majdiNodeRef.current) {
      const container = scrollContainerRef.current;
      const majdiNodeWrapper = majdiNodeRef.current;

      if (majdiNodeWrapper) {
          const majdiNodeCenter = majdiNodeWrapper.offsetLeft + majdiNodeWrapper.offsetWidth / 2;
          const containerCenter = container.offsetWidth / 2;

          const scrollLeftTarget = majdiNodeCenter - containerCenter;

          container.scrollTo({
            left: scrollLeftTarget,
            behavior: 'auto'
          });
      }

    }
  }, [viewMode, isLargeScreen]);


  return (
    <div className="w-full -mt-16 mb-32">
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-12 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-6 dark:text-white">
            Our <span className="text-yellow-maize">People</span>
          </h2>
          <p className='text-xl text-center tracking-tight text-blue-michigan mb-4 dark:text-zinc-300'>
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
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto w-full cursor-grab active:cursor-grabbing relative pb-4"
            >
              <div className="inline-block py-8 text-center">
                {orgData.leaders.map((leader) => (
                   <div key={leader.id} ref={leader.id === 'radaideh' ? majdiNodeRef : null} className="inline-block">
                     <MemberNode member={leader} isLeader viewMode="tree" />
                   </div>
                ))}
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