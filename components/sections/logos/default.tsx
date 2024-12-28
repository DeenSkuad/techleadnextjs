// import Figma from "../../logos/figma";
import React from "../../logos/react";
// import ShadcnUi from "../../logos/shadcn-ui";
// import Tailwind from "../../logos/tailwind";
// import TypeScript from "../../logos/typescript";
// import Logo from "../../ui/logo";
import { Section } from "../../ui/section";
import Image from 'next/image';

export default function Logos() {
  const logos = [
    { image: "/images/clients/logo/bank-rakyat.jpg", name: "Bank Rakyat" },
    { image: "/images/clients/logo/emesys.png", name: "Emesys" },
    { image: "/images/clients/logo/kolejuniversitiantarabangsapicoms.png", name: "KUIN PICOMS" },
    { image: "/images/clients/logo/mada.png", name: "MADA" },
    { image: "/images/clients/logo/majlis-perbandaran-sungai-petani.png", name: "MPSP" },
    { image: "/images/clients/logo/mpsp.png", name: "MPSP" },
    { image: "/images/clients/logo/perbadanan-putrajaya.png", name: "Perbadanan Putrajaya" },
    { image: "/images/clients/logo/seal-of-george-town.svg.png", name: "George Town" }
  ];

  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 text-center">
        <h2 className="text-md font-semibold">We have worked with over 200 happy clients</h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image 
                src={logo.image}
                alt={logo.name}
                width={100}
                height={48}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
