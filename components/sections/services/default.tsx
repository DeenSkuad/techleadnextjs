"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaPlug, FaRobot, FaDocker, FaPenNib, FaShieldAlt } from "react-icons/fa";
import { IoHardwareChip } from "react-icons/io5";

const services = [
  {
    icon: FaGraduationCap,
    title: "Training",
    description: "Latihan profesional dalam pembangunan sistem, pengaturcaraan dan pengurusan IT.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: FaCode,
    title: "Software Development",
    description: "Pembangunan sistem web aplikasi kustom dengan teknologi terkini dan skalabel.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App",
    description: "Aplikasi mudah alih iOS & Android dengan pengalaman pengguna yang lancar.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: FaPaintBrush,
    title: "Web Design",
    description: "Rekabentuk laman web moden, responsif dan mesra pengguna.",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: IoHardwareChip,
    title: "IOT",
    description: "Penyelesaian Internet of Things untuk automasi dan pemantauan pintar.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: FaServer,
    title: "Web Hosting",
    description: "Perkhidmatan hosting yang pantas, selamat dan boleh dipercayai.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: FaPlug,
    title: "Integration",
    description: "Integrasi sistem dan API untuk menghubungkan pelbagai platform.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: FaRobot,
    title: "AI Solutions",
    description: "Penyelesaian kecerdasan buatan untuk automasi dan analitik pintar.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: FaDocker,
    title: "DevOps",
    description: "Automasi deployment, CI/CD pipeline dan pengurusan infrastruktur.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: FaPenNib,
    title: "UI/UX Design",
    description: "Rekabentuk antaramuka dan pengalaman pengguna yang intuitif.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: FaShieldAlt,
    title: "Cyber Security",
    description: "Perlindungan sistem dan data daripada ancaman siber.",
    color: "from-red-500 to-orange-600",
  },
];

export default function Services() {
  return (
    <section id="perkhidmatan" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
            Perkhidmatan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Apa Yang Kami Tawarkan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perkhidmatan teknologi menyeluruh untuk memenuhi keperluan digital organisasi anda.
          </p>
        </div>

        {/* Services Grid - Row 1: 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Services Grid - Row 2: 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {services.slice(4, 8).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 4} />
          ))}
        </div>

        {/* Services Grid - Row 3: 3 items centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.slice(8, 11).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 8} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
  };
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-border transition-all duration-300"
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
