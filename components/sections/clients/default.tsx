"use client";

import { useTranslations } from 'next-intl';

export default function Clients() {
  const t = useTranslations('clients');

  const clients = [
    { src: "/images/clients/logo/mada.png", alt: "MADA" },
    { src: "/images/clients/logo/majlis-perbandaran-sungai-petani.png", alt: "Majlis Perbandaran Sungai Petani" },
    { src: "/images/clients/logo/mpsp.png", alt: "Majlis Perbandaran Seberang Perai" },
    { src: "/images/clients/logo/perbadanan-putrajaya.png", alt: "Perbadanan Putrajaya" },
    { src: "/images/clients/logo/kolejuniversitiantarabangsapicoms.png", alt: "PICOMS" },
    { src: "/images/clients/logo/emesys.png", alt: "Emesys" },
    { src: "/images/clients/logo/bank-rakyat.jpg", alt: "Bank Rakyat" },
    { src: "/images/clients/logo/seal-of-george-town.svg.png", alt: "George Town" },
  ];

  return (
    <section className="h-screen w-full py-20 mb-80">
      {/* Your existing client logo */}
      <div className="container mx-auto text-center flex flex-col items-center gap-4">
        <h1 className="text-2xl relative z-10 animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-xl sm:leading-tight md:text-4xl md:leading-tight">
          {t('title')}
        </h1>
        <p className="md:text-xl font-thin mx-6 md:w-[800px] bg-clip-text">
          {t('description')}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-20 overflow-y-hidden h-[70vh] md:h-full">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center justify-center border py-6 group">
            <img
              src={client.src}
              alt={client.alt}
              className="w-[6rem] h-auto grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
