"use client";
import { IconContainer } from "@/components/ui/IconContainer";
import { useTranslations } from 'next-intl';
import { AiFillDollarCircle, AiOutlineAntDesign } from "react-icons/ai";
// import { BsClipboardDataFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import { HiDocumentReport } from "react-icons/hi";
import { RiFilePaper2Fill } from "react-icons/ri";
import { Radar } from "@/components/ui/radar";

export default function Services() {
  const t = useTranslations('services');

  return (
    <section>
      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <h2 className="text-3xl font-bold text-slate-200 mb-8">{t('title')}</h2>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer text={t('webdevelopment.title')} delay={0.2} />
            <IconContainer
              delay={0.4}
              text={t('androidapp.title')}
              icon={<AiFillDollarCircle className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              text={t('uiuxdesign.title')}
              delay={0.3}
              icon={<AiOutlineAntDesign className="h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Maintenence"
              delay={0.5}
              icon={<BiSolidReport className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              text="Server management"
              icon={
                <HiMiniDocumentArrowUp className="h-8 w-8 text-slate-600" />
              }
              delay={0.8}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              delay={0.6}
              text="Data Analytics"
              icon={<HiDocumentReport className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              delay={0.7}
              text="CMS Integration"
              icon={<RiFilePaper2Fill className="h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </section>
  );
}
