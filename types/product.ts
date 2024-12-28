export interface Product {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: ProductFeature[];
  techStack: TechStack[];
  testimonials: Testimonial[];
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface TechStack {
  name: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  author: string;
  company: string;
  content: string;
  image?: string;
} 