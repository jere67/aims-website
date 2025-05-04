"use client"
import Link from "next/link"
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Culture", href: "/culture" },
    { name: "News", href: "/news" },
    { name: "Research", href: "/research" },
    { name: "Members", href: "/members" },
    { name: "Teaching", href: "/teaching" },
    { name: "Gallery", href: "/gallery" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/aims-umich",
      icon: FaGithub,
    },
    {
      name: "Email",
      href: "mailto:radaideh@umich.edu",
      icon: FaEnvelope,
    },
  ],
}

const Footer = () => {
  return (
    <footer className="w-full bg-blue-michigan text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold tracking-wider uppercase mb-6">Stay Connected</h2>

            <div className="flex space-x-4 mb-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-maize text-blue-michigan p-2 rounded-full hover:opacity-90 transition-opacity"
                  aria-label={item.name}
                >
                  <item.icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>

            <p className="text-gray-300">radaideh@umich.edu</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold tracking-wider uppercase mb-6">Mailing Address</h2>

            <address className="not-italic text-gray-300 flex flex-col space-y-1">
              <p>Mortimer E. Cooley, University of Michigan</p>
              <p>2355 Bonisteel Blvd</p>
              <p>Nuclear Engineering & Radiological Sciences</p>
              <p>Ann Arbor, MI 48109-2104, USA</p>
            </address>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold tracking-wider uppercase mb-6">Affiliations</h2>

            <div className="text-gray-300 flex flex-col space-y-4">
              <p>
                Research group in the{" "}
                <a
                  href="https://ners.engin.umich.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-maize hover:underline"
                >
                  Department of Nuclear Engineering & Radiological Sciences
                </a>
              </p>

              <p>
                Affiliated with the{" "}
                <a
                  href="https://cse.engin.umich.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-maize hover:underline"
                >
                  Department of Computer Science & Engineering
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <nav className="flex flex-wrap justify-center mb-6">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link href={item.href} className="text-gray-300 hover:text-yellow-maize transition-colors">
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          <p className="text-sm text-gray-400 text-center">
            Copyright © {new Date().getFullYear()} AIMS Lab at the University of Michigan
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer