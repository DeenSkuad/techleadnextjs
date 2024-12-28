"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  twitter: string;
  avatar: string;
  bgColor: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    role: "CEO, founder",
    twitter: "@stylokit",
    avatar: "/memoji/1.png",
    bgColor: "bg-yellow-100",
  },
  {
    name: "David Miller",
    role: "COO",
    twitter: "@stylokit",
    avatar: "/memoji/2.png",
    bgColor: "bg-orange-100",
  },
  {
    name: "Amanda Davis",
    role: "Head of marketing",
    twitter: "@stylokit",
    avatar: "/memoji/3.png",
    bgColor: "bg-red-100",
  },
  {
    name: "Robert Turner",
    role: "Software engineer",
    twitter: "@stylokit",
    avatar: "/memoji/4.png",
    bgColor: "bg-pink-100",
  },
  {
    name: "Sophie White",
    role: "UX/UI Designer",
    twitter: "@stylokit",
    avatar: "/memoji/5.png",
    bgColor: "bg-rose-100",
  },
  {
    name: "Andrew Wilson",
    role: "Sales",
    twitter: "@stylokit",
    avatar: "/memoji/6.png",
    bgColor: "bg-blue-100",
  },
  {
    name: "Michael Lee",
    role: "Analyst",
    twitter: "@stylokit",
    avatar: "/memoji/7.png",
    bgColor: "bg-gray-100",
  },
  {
    name: "Olena Kurcherenko",
    role: "Marketing specialist",
    twitter: "@stylokit",
    avatar: "/memoji/8.png",
    bgColor: "bg-purple-100",
  },
  {
    name: "Anastasia Solovyova",
    role: "Product manager",
    twitter: "@stylokit",
    avatar: "/memoji/9.png",
    bgColor: "bg-yellow-100",
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

export function TeamSection() {
  const t = useTranslations("about");

  return (
    <section className="my-20 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="text-sm font-medium tracking-wider text-primary">
          {t("team.label")}
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {t("team.title")}
        </h2>
        <p className="mt-4 text-muted-foreground">{t("team.description")}</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            variants={itemVariants}
            className="group relative rounded-2xl bg-card p-6 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className={`rounded-full ${member.bgColor} p-2`}>
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
                <a
                  href={`https://twitter.com/${member.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  <FaTwitter className="h-4 w-4" />
                  <span>{member.twitter}</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
