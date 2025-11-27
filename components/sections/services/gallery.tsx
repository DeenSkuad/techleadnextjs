import { motion } from "framer-motion";
import Image from "next/image";

interface Content {
  hero2: {
    title: string;
    subtitle: string;
    description: string;
  };
  features: {
    title: string;
    description: string;
  }[];
}

interface GallerySectionProps {
  content: Content;
}

export function GallerySection({ content }: GallerySectionProps) {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
  ];

  return (
    <section className="relative bg-card px-4 md:px-20">
      <div className="py-24">
        <div>
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium tracking-wider text-primary"
            >
              {content.hero2.title}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-balance text-4xl font-bold tracking-tight sm:text-5xl"
            >
              {content.hero2.subtitle}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 space-y-4"
            >
              <p className="text-muted-foreground">
                {content.hero2.description}
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold">Features</h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary mt-0.5">•</span>
                      <div>
                        <span className="font-medium">{feature.title}</span>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                }}
                className="aspect-square overflow-hidden rounded-lg relative"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
