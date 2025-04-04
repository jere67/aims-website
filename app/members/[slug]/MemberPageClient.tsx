"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect } from "react"
import {
  ArrowLeft,
  Mail,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Lightbulb,
  MapPin,
  Calendar,
} from "lucide-react"

export default function MemberPageClient({ member }: { member: any }) {
  useEffect(() => {
    document.body.style.overflow = "auto"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={member.heroImageUrl || "/default.webp"}
            alt={`${member.name} hero image`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white" />
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-end gap-6 md:gap-12"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white overflow-hidden shadow-xl">
                <Image
                  src={member.imageUrl || "/placeholder.svg?height=500&width=500"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-michigan">{member.name}</h1>
                  <p className="text-xl md:text-2xl text-yellow-maize/70 mt-2">
                    {member.status} - {member.role}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-blue-michigan mb-4">Contact & Info</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-michigan/70 mt-1" />
                  <div>
                    <p className="text-blue-michigan">{member.department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-michigan/70" />
                  <p className="text-blue-michigan">Joined {member.joinedDate}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-lg bg-blue-michigan text-yellow-maize hover:bg-blue-michigan/90 transition"
                >
                  <Mail className="w-5 h-5" />
                </a>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-blue-michigan text-yellow-maize hover:bg-blue-michigan/90 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-blue-michigan text-yellow-maize hover:bg-blue-michigan/90 transition"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {member.bio && (
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-blue-michigan mb-4">Biography</h2>
                <p className="text-blue-michigan/80 leading-relaxed">{member.bio}</p>
              </div>
            )}

            {member.interests && (
              <div>
                <h2 className="text-2xl font-bold text-blue-michigan mb-6">Research Interests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {member.interests.map((interest, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <div className="p-2 rounded-lg bg-blue-michigan/5">
                        <Lightbulb className="w-6 h-6 text-blue-michigan" />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-michigan">{interest}</h3>
                        <p className="text-sm text-blue-michigan/70 mt-1">Current research focus</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {member.education && (
              <div>
                <h2 className="text-2xl font-bold text-blue-michigan mb-6">Education</h2>
                <div className="space-y-6">
                  {member.education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      className="flex items-start gap-4"
                    >
                      <div className="p-2 rounded-lg bg-blue-michigan/5 mt-1">
                        <GraduationCap className="w-6 h-6 text-blue-michigan" />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-michigan">{edu}</h3>
                        <p className="text-sm text-blue-michigan/70 mt-1">
                          {member.degree}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <Link
            href="/members"
            className="inline-flex items-center px-6 py-3 bg-blue-michigan text-yellow-maize rounded-lg hover:bg-blue-michigan/90 transition group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

