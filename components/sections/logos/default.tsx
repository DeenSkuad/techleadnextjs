"use client";

import { Section } from "../../ui/section";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Logos() {
  const t = useTranslations('logos');

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
        <h2 className="text-md font-semibold">{t('title')}</h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.image}
                alt={logo.name}
                width={100}
                height={48}
                className="h-12 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
