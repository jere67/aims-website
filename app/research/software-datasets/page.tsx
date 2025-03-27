"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Github, FileText, Download, Code, Database, Search, Filter, Book } from "lucide-react"
import { softwareItems, datasetItems } from "@/data/software-datasets"

type Category = "all" | "reactors" | "controls" | "computing"
type ContentType = "all" | "software" | "datasets"

export default function SoftwareAndDatasetsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [activeType, setActiveType] = useState<ContentType>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedItem, setSelectedItem] = useState<any | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredSoftware = softwareItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory
    const matchesType = activeType === "all" || activeType === "software"
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesType && matchesSearch
  })

  const filteredDatasets = datasetItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory
    const matchesType = activeType === "all" || activeType === "datasets"
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesType && matchesSearch
  })

  const openModal = (item: any) => {
    setSelectedItem(item)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-blue-michigan py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00274C_1px,transparent_1px),linear-gradient(to_bottom,#00274C_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Software & Datasets
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our open-source tools and datasets for Nuclear Engineering and AI research.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://github.com/aims-umich"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-maize text-blue-michigan px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-yellow-400 transition-colors"
              >
                <Github size={20} />
                Visit Our GitHub
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              <FilterButton
                active={activeType === "all"}
                onClick={() => setActiveType("all")}
                icon={<Filter size={16} />}
              >
                All Resources
              </FilterButton>
              <FilterButton
                active={activeType === "software"}
                onClick={() => setActiveType("software")}
                icon={<Code size={16} />}
              >
                Software
              </FilterButton>
              <FilterButton
                active={activeType === "datasets"}
                onClick={() => setActiveType("datasets")}
                icon={<Database size={16} />}
              >
                Datasets
              </FilterButton>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <FilterButton active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
                All Categories
              </FilterButton>
              <FilterButton active={activeCategory === "reactors"} onClick={() => setActiveCategory("reactors")}>
                Reactors
              </FilterButton>
              <FilterButton active={activeCategory === "controls"} onClick={() => setActiveCategory("controls")}>
                Controls
              </FilterButton>
              <FilterButton active={activeCategory === "computing"} onClick={() => setActiveCategory("computing")}>
                Computing
              </FilterButton>
            </div>

            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-michigan"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-8 text-gray-600">
            <p>
              Showing {filteredSoftware.length + filteredDatasets.length} resources
              {activeType !== "all" && ` in ${activeType}`}
              {activeCategory !== "all" && ` for ${activeCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        </div>
      </section>

      {(activeType === "all" || activeType === "software") && filteredSoftware.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-michigan mb-12 flex items-center">
              <Code size={28} className="mr-3 text-yellow-maize" />
              Software
            </h2>

            <div className="grid grid-cols-1 gap-12">
              {filteredSoftware.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="md:w-2/5 relative">
                      <div className="relative h-64 md:h-full w-full">
                        <Image
                          src={item.screenshotUrl || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-michigan/70 to-transparent md:bg-gradient-to-r md:from-blue-michigan/70 md:to-transparent"></div>
                        <div className="absolute bottom-4 left-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-4">
                          <div className="bg-white p-3 rounded-full shadow-lg h-16 w-16 flex items-center justify-center">
                            <Image
                              src={item.logoUrl || "/placeholder.svg"}
                              alt={`${item.title} logo`}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-3/5 p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-blue-michigan mb-3">{item.title}</h3>
                      <p className="text-gray-700 mb-4">{item.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.technologies.slice(0, 5).map((tech) => (
                          <span key={tech} className="bg-gray-100 text-blue-michigan px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 5 && (
                          <span className="bg-gray-100 text-blue-michigan px-3 py-1 rounded-full text-sm">
                            +{item.technologies.length - 5} more
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-michigan text-yellow-maize px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-michigan/90 transition-colors"
                        >
                          <Github size={18} />
                          GitHub
                        </a>

                        {item.paperUrl && (
                          <a
                            href={item.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-blue-michigan text-blue-michigan px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
                          >
                            <FileText size={18} />
                            Paper
                          </a>
                        )}

                        {item.documentationUrl && (
                          <a
                            href={item.documentationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-blue-michigan text-blue-michigan px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
                          >
                            <Book size={18} />
                            Docs
                          </a>
                        )}

                        <button
                          onClick={() => openModal(item)}
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors ml-auto"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(activeType === "all" || activeType === "datasets") && filteredDatasets.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-michigan mb-12 flex items-center">
              <Database size={28} className="mr-3 text-yellow-maize" />
              Datasets
            </h2>

            <div className="grid grid-cols-1 gap-12">
              {filteredDatasets.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-gray-50 rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="md:w-2/5 relative">
                      <div className="relative h-64 md:h-full w-full">
                        <Image
                          src={item.imageUrl || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-michigan/70 to-transparent md:bg-gradient-to-r md:from-blue-michigan/70 md:to-transparent"></div>
                      </div>
                    </div>

                    <div className="md:w-3/5 p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-blue-michigan mb-3">{item.title}</h3>
                      <p className="text-gray-700 mb-4">{item.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-gray-500">Size</p>
                          <p className="font-medium text-blue-michigan">{item.size}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Samples</p>
                          <p className="font-medium text-blue-michigan">{item.samples.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Category</p>
                          <p className="font-medium text-blue-michigan capitalize">{item.category}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Year</p>
                          <p className="font-medium text-blue-michigan">{item.year}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={item.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-michigan text-yellow-maize px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-michigan/90 transition-colors"
                        >
                          <Download size={18} />
                          Download
                        </a>

                        {item.paperUrl && (
                          <a
                            href={item.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-blue-michigan text-blue-michigan px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
                          >
                            <FileText size={18} />
                            Paper
                          </a>
                        )}

                        {item.documentationUrl && (
                          <a
                            href={item.documentationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-blue-michigan text-blue-michigan px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
                          >
                            <Book size={18} />
                            Docs
                          </a>
                        )}

                        <button
                          onClick={() => openModal(item)}
                          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-300 transition-colors ml-auto"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredSoftware.length === 0 && filteredDatasets.length === 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Search size={64} className="mx-auto text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-blue-michigan mb-4">No resources found</h3>
            <p className="text-gray-600 mb-8">We couldn't find any resources matching your current filters.</p>
            <button
              onClick={() => {
                setActiveCategory("all")
                setActiveType("all")
                setSearchQuery("")
              }}
              className="bg-blue-michigan text-yellow-maize px-6 py-3 rounded-lg font-medium hover:bg-blue-michigan/90 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </section>
      )}

      <section className="py-16 bg-blue-michigan text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            All Our Code and Publications are <span className="text-yellow-maize">Open Source</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            We believe in the power of open science and collaborative research. All our software and datasets are freely
            available to the research community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/aims-umich"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-maize text-blue-michigan px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-yellow-400 transition-colors"
            >
              <Github size={20} />
              GitHub Organization
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image
                  src={"screenshotUrl" in selectedItem ? selectedItem.screenshotUrl : selectedItem.imageUrl}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-michigan/80 to-transparent"></div>

                {"logoUrl" in selectedItem && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-white p-3 rounded-full shadow-lg h-16 w-16 flex items-center justify-center">
                      <Image
                        src={selectedItem.logoUrl || "/placeholder.svg"}
                        alt={`${selectedItem.title} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-blue-michigan hover:bg-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>

                <div className="absolute bottom-6 left-6">
                  <h2 className="text-2xl font-bold text-white mb-1">{selectedItem.title}</h2>
                  <p className="text-gray-200">
                    {"category" in selectedItem && <span className="capitalize">{selectedItem.category}</span>} •{" "}
                    {selectedItem.year}
                  </p>
                </div>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <p className="text-gray-700 mb-6">{selectedItem.longDescription}</p>

                {"technologies" in selectedItem && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-michigan mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.technologies.map((tech: string) => (
                        <span key={tech} className="bg-gray-100 text-blue-michigan px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {"size" in selectedItem && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Size</p>
                      <p className="font-medium text-blue-michigan">{selectedItem.size}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Samples</p>
                      <p className="font-medium text-blue-michigan">{selectedItem.samples.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium text-blue-michigan capitalize">{selectedItem.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-medium text-blue-michigan">{selectedItem.year}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mt-8">
                  {"githubUrl" in selectedItem ? (
                    <a
                      href={selectedItem.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-michigan text-yellow-maize px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-michigan/90 transition-colors"
                    >
                      <Github size={18} />
                      View on GitHub
                    </a>
                  ) : (
                    <a
                      href={selectedItem.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-michigan text-yellow-maize px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-michigan/90 transition-colors"
                    >
                      <Download size={18} />
                      Download Dataset
                    </a>
                  )}

                  {selectedItem.paperUrl && (
                    <a
                      href={selectedItem.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-blue-michigan text-blue-michigan px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
                    >
                      <FileText size={18} />
                      Read Paper
                    </a>
                  )}

                  {selectedItem.documentationUrl && (
                    <a
                      href={selectedItem.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-blue-michigan text-blue-michigan px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
                    >
                      <Book size={18} />
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FilterButton({
  children,
  active,
  onClick,
  icon,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
  icon?: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
        active ? "bg-blue-michigan text-yellow-maize" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {icon && icon}
      {children}
    </button>
  )
}

