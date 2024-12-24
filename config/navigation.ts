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
      title: "assetmanagement",
      description: "Manage your assets and inventory with ease"
    },
    {
      title: "hrms",
      description: "Manage your employees and improve your business."
    },
    {
      title: "ecommerce",
      description: "Multi-vendor e-commerce platform for your business."
    },
    {
      title: "elearning",
      description: "Online learning platform for your business."
    },
    {
      title: "inventoryandwarehouse",
      description: "Inventory and warehouse management services."
    }
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
