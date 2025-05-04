"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { FaHandsHelping, FaTrophy, FaUsers, FaBalanceScale, FaRegCommentDots } from "react-icons/fa"
import { QuoteIcon } from "lucide-react"

const coreValues = [
  {
    id: "welcome",
    title: "Welcome",
    icon: <FaUsers className="h-5 w-5" />,
    color: "#00274C",
    description: [
      "Joining a PhD research group is an exciting step, and we believe a warm, supportive welcome is essential. New members are greeted with openness, encouragement, and a spirit of collaboration. We take time to introduce students to the group's values, research goals, and available resources, ensuring they feel included and empowered from day one. Mentorship, clear communication, and a genuine interest in each student's growth help create a strong foundation for a rewarding academic journey.",
      "Indeed, Prof. Radaideh acknowledges that although he played a role in recruiting the first few members when the group started, it is the AIMS members who are truly the driving force behind the group's continued growth and its success in recruitment as they keep providing a welcoming environment to prospective members.",
      "Undergraduate students are welcomed into our group, where they typically interact more frequently with a postdoctoral fellow and/or graduate student mentors, while also meeting with Prof. Radaideh on a bi-weekly basis. The undergraduate students who have worked with AIMS, whether during regular semesters or as summer SURE interns, have been exceptional and highly talented. Several of them have continued their journey in the lab as graduate students after graduation. From utilizing large language models and nuclear reactor design to computational fluid dynamics and software development for social media computing, the achievements of our undergraduates are vast and varied. Almost all of the undergraduates who have contributed to AIMS have been co-authors on publications with their graduate student mentors, and a few have even published as first authors!",
      "Disclosure: As we write this article, our group has grown to include more than 20 active members over its first two years. Although Prof. Radaideh would love to accept every student who reaches out, he must be mindful of his other commitments to ensure he can give proper attention to both new and existing members of his lab.",
    ],
    quote: {
      text: "The first time I speak with you, I close my eyes and listen carefully — I try to read your mind and see if you are a fit for this culture: Will you treat your colleagues with respect? Will you collaborate and support your team? Are you self-motivated and driven to compete? Can you handle feedback and criticism with maturity? If the answer is yes to all, you are welcome.",
      author: "Prof. Radaideh",
    },
    testimonials: [
      {
        text: "From the very first day in the AIMS lab, I felt like I belonged both professionally and socially. Prof. Radaideh met with me to discuss my research interests and how they aligned with the lab's goals and what I could do to contribute to the lab's overall mission. AIMS also encourages strong friendships outside the lab; my favorite event has to be AIMS cookout, where I had only recently joined but got to meet everyone in other groups and have an amazing time.",
        author: "Jeremy Moon, Undergraduate Student",
        imageUrl: "/people/jeremoon.jpeg"
      },
    ],
    topImageUrl: "/culture/Welcome.jpg",
    bottomImageUrl: "/culture/Welcome2.jpg",
  },
  {
    id: "support",
    title: "Support",
    icon: <FaHandsHelping className="h-5 w-5" />,
    color: "#4D7FA6",
    description: [
      "Support A truly successful and respectful member of our community embraces a welcoming and competitive spirit that extends beyond personal achievement. They are always ready to share these core values with new members, ensuring they feel included and supported from the very start. When challenges arise, they offer both professional guidance and personal encouragement, helping others navigate tough times with resilience. Additionally, they understand the importance of collaboration, re adily working together when research overlaps, and fostering an environment where shared knowledge and teamwork drive collective success. This mutual support and collaboration strengthen the group's bond, ensuring that all members can thrive and contribute to the group's growth.",
      "The collaborative and supportive culture at AIMS encourages transparency, where no member should withhold ideas, data, or models from their peers. Everyone's contributions will be recognized, with Prof. Radaideh overseeing all research activities to ensure fair credit for all. All members will enjoy shared co-authorships and collective success. Unless restricted by sponsors or export control regulations, which limit access to certain members, all research data and methods are stored in group-wide GitHub repositories. Each member is expected to upload their research there, making it accessible to the entire group.",
      "Throughout the semester, we organize social events as a way to foster stronger connections among team members. These events provide an opportunity to get to know each other beyond the academic setting, allowing us to build trust, empathy, and a sense of camaraderie. By sharing experiences in a relaxed atmosphere, we cultivate compassion and a deeper understanding, which helps us support one another not only professionally but also personally. When members face personal or family challenges, the bonds we develop through these interactions create a network of care and encouragement, ensuring that everyone feels supported during tough times.",
    ],
    testimonials: [
        {
        text: "One of the most meaningful parts of my experience at AIMS has been witnessing the power of an open and collaborative research culture — whether it's sharing ideas, troubleshooting research challenges, or simply being there during tough times. Collaborating closely with my fellow lab members on research that led to shared publications has shown me the value of teamwork at AIMS. We succeed not just individually, but together — and that makes all the difference.",
        author: "Umme Nabila, PhD Student in Nuclear Engineering and Radiological Sciences",
        imageUrl: "/people/unabila.jpg"
        }
    ],
    topImageUrl: "/culture/Support1.jpg",
    bottomImageUrl: "/culture/Support2.jpg",
  },
  {
    id: "compete",
    title: "Compete",
    icon: <FaTrophy className="h-5 w-5" />,
    color: "#FFCB05",
    description: [
      "In addition to the importance of fostering a healthy lab climate, which is often cited by members as a major reason they choose to join AIMS, the other primary reason is the high caliber of research produced by the group, which is typically associated with the exceptional skills and talents of the group members. AIMS thrives on a healthy competitive spirit, where each member is encouraged to push themselves to reach their full potential. This environment not only elevates the standard of research but also inspires members to continuously grow, strive for excellence, and contribute to the lab's overall success.",
      "You will quickly observe that the members of this group are brilliant, talented, and dedicated. We place a strong emphasis on the quality of our research, adhering to strict ethical standards. Our focus is on producing high-quality publications, steering clear of a “publish or perish” mentality, ensuring the reproducibility of our research (with all models and data accessible), and maintaining a high level of confidence and quality when presenting our work at conferences.",
    ],
    quote: {
      text: "I have never settled for mediocrity, and I refuse to accept it in any part of my life. I expect the same from every member of this group — mediocrity will never become our standard. With dedication and hard work, you can unlock your full potential and build a reputation of excellence.",
      author: "Prof. Radaideh",
    },
    testimonials: [
      {
        text: "In a research group, competition isn't about outshining your peers—it's about challenging each other to ask better questions, push boundaries, and raise the standard of discovery together.",
        author: "Patrick Myers, PhD Student in Nuclear Engineering and Radiological Sciences ",
        imageUrl: "/people/myerspat.jpg"
      },
      {
        text: "The culture at AIMS constantly challenged me to improve, both personally and professionally. Every interaction — whether during research discussions, project collaborations, or lab meetings — served as an opportunity to learn, grow, and push my limits. Being surrounded by such driven and brilliant people instilled in me a mindset of continuous growth, where excellence was the expectation, not the exception. In this environment, competition wasn't about beating others; it was about holding yourself to the highest standards and striving each day to become the best version of yourself. This spirit of healthy competition, coupled with strong mentorship and peer support, created a space where ambition, collaboration, and innovation naturally thrived.",
        author: "Naman Bhargava, MS Student in Data Science",
        imageUrl: "/people/namanb.jpg"
      },
    ],
    topImageUrl: "/culture/Compete.jpg",
  },
  {
    id: "respect",
    title: "Respect",
    icon: <FaBalanceScale className="h-5 w-5" />,
    color: "#7A9A01",
    description: [
      "Nobody likes to be disrespected or feel undervalued, but in scientific communities, we recognize that being a woman may subject you to additional scrutiny and stereotypes in the field of science. In our group, we are committed to creating an environment where every scientist, regardless of gender, is respected and celebrated for their contributions. We strive to eliminate biases, support female scientists in their professional journeys, and ensure equal opportunities for growth, recognition, and leadership. By fostering a supportive culture, we empower all members to reach their full potential and contribute to the advancement of knowledge.",
      "Prof. Radaideh is serious in creating a safe and respectful environment for women in the research group. He holds himself accountable first for fostering this atmosphere and ensures that all members follow that model.",
      "As a side note, it's worth mentioning that the record for the fastest student to publish original work from their PhD research after joining AIMS was actually set by a woman—she impressively prepared her first journal article just seven months into graduate school! We promise, you will have to be extremely good to match the talent of our female students.",
      "AIMS members deeply value and respect our diverse cultures. We come from all corners of the world to Michigan to pursue groundbreaking science and to grow as individuals. Every person in AIMS is welcomed and is expected to be treated with respect, regardless of their background, race, color, religion, gender, or any other visible or non-visible differences.",
    ],
    quote: {
      text: "I strive to make this group one less obstacle for women in their career journeys. I believe every woman in this group is already talented; they don't need to work hard to prove themselves to me or anybody else — only to work hard to become leaders and the very best in our field.",
      author: "Prof. Radaideh",
    },
    testimonials: [
      {
        text: "I don't regularly think about how my personal identity will impact the success of my research, which is a testament to the inclusive environment of the AIMS Lab. I'm hopeful for a day when this section becomes obsolete, as every lab exhibits such mutual respect for its members, regardless of their demographics.",
        author: "Nataly Panczyk, PhD Student in Nuclear Engineering and Radiological Sciences",
        imageUrl: "/people/npanczyk.JPG"
      },
      {
        text: "Joining the AIMS laboratory at the University of Michigan has been an enriching experience for me, where RESPECT is not just a value but a guiding principle. In this diverse and inclusive environment, I have learned that the strength of science lies not only in groundbreaking discoveries but in the mutual respect we share for each other's unique perspectives and backgrounds. This collective respect fuels both our professional growth and personal development, allowing us to truly thrive together. Personally, it has been a key factor in my scientific growth, helping me push boundaries and advance my research in a collaborative and supportive atmosphere.",
        author: "Dr. Kamal Abdulraheem, Postdoctoral Scholar and Schmidt AI in Science Fellow ",
        imageUrl: "/people/abkamal.jpg"
      },
    ],
    topImageUrl: "/culture/Respect1.jpg",
    bottomImageUrl: "/culture/Respect2.jpg",
  },
  {
    id: "listen",
    title: "Listen",
    icon: <FaRegCommentDots className="h-5 w-5" />,
    color: "#A37B45",
    description: [
      "Listening is a cornerstone of effective communication, and it is essential to close the feedback loop. This value flows in both directions—mentor to student and student to mentor. One of the most challenging aspects of this journey is learning how to internalize feedback and constructive criticism. It requires humility and the recognition that none of us are perfect. We must accept that rejection is a part of growth, and it is an opportunity to refine ourselves and improve. Through active listening and the ability to reflect on feedback, we become better researchers, better colleagues, and better individuals.",
      "Prof. Radaideh describes himself as a blend of both “kindness and toughness”. He believes that most of the time, students will encounter his kind, approachable side, especially if they demonstrate dedication and commitment. However, the tougher side emerges when he feels a student is consistently underperforming without valid reasons or when there are issues of accountability. He emphasizes that this “tough” approach is not about being harsh, but rather about holding students to AIMS high standards that we aim from the “competitive” category and helping them grow by challenging them to improve.",
      "This commitment to listening extends beyond formal meetings to everyday interactions, mentorship relationships, and research collaborations. We believe that some of the best ideas emerge when diverse perspectives are heard and integrated, and that listening is essential for building trust and resolving conflicts constructively.",
      "More about the mentoring style of Prof. Radaideh can be found here: https://ners.engin.umich.edu/majdi-radaideh-mentoring/",
    ],
    quote: {
      text: "I am not perfect, nor will I ever be. I continue to learn each day as I work with students, striving to be the best version of myself. I make a point to listen closely to their concerns and take their feedback seriously, especially when it's genuine and based on a consistent pattern.",
      author: "Prof. Radaideh",
    },
    testimonials: [{
        text: "We chose Majdi as an advisor because we trust his judgement and want to learn from him. He tries not to betray this trust. When he gives feedback, it is specific and always with our growth in mind. Even as our group has increased in size, he makes sure that each and every one of us knows how we're doing through weekly one-on-ones and a holistic review each semester. If you can communicate your needs and reflect on how you can better develop as an independent researcher, you will be successful in this group.",
        author: "Leo Tunkle, PhD Student in Nuclear Engineering and Radiological Sciences",
        imageUrl: "/people/tunkleo.jpg"
    }],
    topImageUrl: "/culture/Listen1.png",
    bottomImageUrl: "/culture/Listen2.png",
  },
]

export default function CulturePage() {
  const [activeTab, setActiveTab] = useState("welcome")
  const ref = useRef(null)

  return (
    <div className="min-h-screen bg-white text-blue-michigan py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Core <span className="text-yellow-maize">Values</span>
        </h1>
        <div className="mx-auto px-4 text-center text-blue-michigan">
          <h2 className="text-3xl font-bold mb-3">
            Join Our Research Community
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Experience a research environment where excellence meets support, and where your unique perspective is
            valued.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/members"
              className="inline-block bg-yellow-maize text-blue-michigan px-8 py-4 rounded-full font-bold hover:bg-yellow-maize/70 transition-colors"
            >
              Meet Our Team
            </a>
            <a
              href="/research"
              className="inline-block bg-blue-michigan border-2 text-yellow-maize px-8 py-4 rounded-full font-bold hover:bg-blue-michigan/70 transition-colors"
            >
              Explore Our Research
            </a>
          </div>
        </div>
      </div>

      <div className="px-48">
        <Tabs defaultValue="welcome" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-3 bg-transparent mb-48 md:mb-12">
            {coreValues.map((value) => (
              <TabsTrigger
                key={value.id}
                value={value.id}
                className={`
                  flex items-center gap-2 py-3 px-4 text-left border rounded-xl transition-all
                  data-[state=active]:border-blue-michigan data-[state=active]:bg-blue-michigan/5
                  data-[state=active]:shadow-md
                  min-w-0
                `}
              >
                <div
                  className={`p-2 rounded-full flex-shrink-0 ${activeTab === value.id ? "bg-blue-michigan text-yellow-maize" : "bg-gray-100 text-blue-michigan"}`}
                >
                  {value.icon}
                </div>
                <div className="text-left min-w-0">
                  <div className="font-bold">{value.title}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {coreValues.map((value) => (
            <TabsContent key={value.id} value={value.id} className="mt-0 animate-in fade-in-50 duration-500">
              <div className="rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-[600px] w-full">
                  <Image
                    src={value.topImageUrl}
                    alt={value.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-white rounded-full shadow-md" style={{ color: value.color }}>
                        {value.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-white">{value.title}</h2>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="space-y-4 mb-12">
                      {value.description.map((paragraph, idx) => (
                        <p key={idx} className="text-blue-michigan/80 text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {value.quote && (
                      <div className="bg-blue-michigan/5 border-l-4 border-yellow-maize p-6 rounded-r-lg mb-12">
                        <div className="flex items-start">
                          <QuoteIcon className="text-yellow-maize h-8 w-8 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-blue-michigan text-lg italic mb-4">{value.quote.text}</p>
                            <p className="text-blue-michigan font-medium">— {value.quote.author}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {value.testimonials && value.testimonials.length > 0 && (
                      <div className="mb-12">
                        <h3 className="text-xl font-bold text-blue-michigan mb-6 flex items-center">
                          <span className="bg-yellow-maize/20 text-blue-michigan p-2 rounded-full mr-3">
                            <FaUsers className="h-5 w-5" />
                          </span>
                          Student Testimonial{value.testimonials.length > 1 ? "s" : ""}
                        </h3>
                        <div className="space-y-8">
                          {value.testimonials.map((testimonial, index) => (
                            <div
                              key={testimonial.author}
                              className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100"
                            >
                              <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                                  <Image
                                    src={testimonial.imageUrl}
                                    alt={testimonial.author}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="text-blue-michigan/80 italic mb-4">{testimonial.text}</p>
                                  <p className="text-blue-michigan font-medium">{testimonial.author}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {value.bottomImageUrl && (
                      <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-md mb-8">
                        <Image
                          src={value.bottomImageUrl}
                          alt={value.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}