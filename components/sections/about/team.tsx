"use client";

import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  twitter: string;
  avatar: string;
  bgColor: string;
}

interface TeamSectionProps {
  content: {
    label: string;
    title: string;
    description: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Razlan Razak",
    role: "CEO, founder",
    twitter: "@razlanrazak",
    avatar: "/images/team/Razlan.png",
    bgColor: "bg-white",
  },
  {
    name: "Zahrin",
    role: "COO",
    twitter: "@zahrin",
    avatar: "/images/team/Zahrin.png",
    bgColor: "bg-white",
  },
  {
    name: "Ammar",
    role: "Software Developer",
    twitter: "@ammar",
    avatar: "/images/team/Ammar.png",
    bgColor: "bg-white",
  },
  // {
  //   name: "Sophie White",
  //   role: "UX/UI Designer",
  //   twitter: "@stylokit",
  //   avatar: "/images/team/Sophie.png",
  //   bgColor: "bg-transparent",
  // },
  {
    name: "Harith",
    role: "Software Developer",
    twitter: "@stylokit",
    avatar: "/images/team/Andrew.png",
    bgColor: "bg-transparent",
  },
  // {
  //   name: "Michael Lee",
  //   role: "Analyst",
  //   twitter: "@stylokit",
  //   avatar: "/images/team/Michael.png",
  //   bgColor: "bg-transparent",
  // },
  {
    name: "Faiz",
    role: "Jr Software Developer",
    twitter: "@Faiz",
    avatar: "/images/team/Faiz.png",
    bgColor: "bg-transparent",
  },
  {
    name: "Mahyudin",
    role: "UX/UI Designer",
    twitter: "@mahyudin",
    avatar: "/images/team/Din.png",
    bgColor: "bg-white",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function TeamSection({ content }: TeamSectionProps) {
  return (
    <section className="my-20 px-4 flex  flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="text-sm font-medium tracking-wider text-primary">
          {content.label}
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 text-muted-foreground">{content.description}</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-screen items-center px-20"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            variants={itemVariants}
            className="group relative rounded-2xl bg-card p-6 transition-shadow hover:shadow-lg border"
          >
            <div className="flex items-center gap-4">
              <div className={`rounded-full ${member.bgColor}`}>
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
              </div>
              <div>
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                {/* <a
                  href={`https://twitter.com/${member.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  <FaTwitter className="h-4 w-4" />
                  <span>{member.twitter}</span>
                </a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
