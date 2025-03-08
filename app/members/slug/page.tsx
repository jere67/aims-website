import Image from "next/image"; // Correct import
import { teamMembers } from "@/data/members";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default function MemberPage({ params }: { params: { slug: string } }) {
  console.log("Params received:", params);

  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-cyan-900/20 opacity-50" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="relative w-full h-96 mb-8">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-blue-300 mb-4">{member.name}</h1>
        <p className="text-blue-400 mb-6">
          {member.status} - {member.role}
        </p>
        <div className="space-y-6">
          {member.bio && <p className="text-blue-200">{member.bio}</p>}
          {member.interests && (
            <div>
              <h2 className="text-blue-300 font-medium">Interests</h2>
              <ul className="list-disc list-inside text-blue-200">
                {member.interests.map((interest, idx) => (
                  <li key={idx}>{interest}</li>
                ))}
              </ul>
            </div>
          )}
          {member.education && (
            <div>
              <h2 className="text-blue-300 font-medium">Education</h2>
              <ul className="list-disc list-inside text-blue-200">
                {member.education.map((edu, idx) => (
                  <li key={idx}>{edu}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <a
          href="/members"
          className="mt-8 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Team
        </a>
      </div>
    </div>
  );
}