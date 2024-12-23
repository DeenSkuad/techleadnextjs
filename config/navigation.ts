// src/config/navigation.ts
interface ServiceItem {
  title: string;
  slug: string;
  href: string;
  description: string;
}

export const navigationItems = {
  services: [
    {
      title: "Web Development",
      slug: "webdevelopment",
      href: "/services/webdevelopment",
      description: "We build custom websites for businesses of all sizes"
    },
    {
      title: "Cyber Security",
      slug: "cybersecurity",
      href: "/services/cybersecurity",
      description: "We provide cyber security services to protect your business"
    },
    {
      title: "UI/UX Design",
      slug: "uiuxdesign",
      href: "/services/uiuxdesign",
      description: "Create user-friendly and visually appealing websites"
    },
    {
      title: "Training",
      slug: "training",
      href: "/services/training",
      description: "FE & BE training for your internal team"
    },
    {
      title: "Consulting",
      slug: "consulting",
      href: "/services/consulting",
      description: "We provide consulting services to help improve your business"
    }
  ] as ServiceItem[],
  products: [
    {
      title: "Asset Management",
      description:
        "Manage your assets and inventory with ease?, we have the solution for you.",
    },
    {
      title: "HRMS",
      description:
        "Manage your employees and improve your business.",
    },
    {
      title: "e-Commerce",
      description:
        "Multi-vendor e-commerce platform for your business. sync with any marketplace.",
    },
    {
      title: "e-Learning",
      description:
        "online learning platform for your business. we provide the best learning management system.",
    },
    {
      title: "Inventory & Warehouse",
      description:
        "inventory and warehouse management services to track your inventory and warehouse.",
    },
  ],
  mainNav: [
    {
      title: "About us",
      href: "/about-us",
      isLink: true,
    },
    {
      title: "Case Studies",
      href: "/case-studies",
      isLink: true,
    },
    {
      title: "Our Work",
      sectionId: "ourwork",
      isScroll: true,
    },
    {
      title: "Training",
      href: "/training",
      isLink: true,
    },
  ],
};
