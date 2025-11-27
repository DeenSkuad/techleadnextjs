"use client";

export default function Clients() {
  return (
    <section className="h-screen w-full py-20">
      {/* Your existing client logo */}
      <div className="container mx-auto text-center flex flex-col items-center gap-4">
        <h1 className="text-2xl relative z-10 animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-xl sm:leading-tight md:text-4xl md:leading-tight">
          Our Clients
        </h1>
        <p className="md:text-xl font-thin mx-6 md:w-[800px] bg-clip-text">
          We all share a common goal: combining the power of creativity with the
          strength of code to build digital experiences that can change people's
          lives.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-20 overflow-y-hidden h-[70vh] md:h-full">
        <div className="flex items-center justify-center border py-6">
          <img
            src="/images/clients/logo/grey/tentera-darat-logo.png"
            alt="Tentera Darat"
            className="h-1/2 md:h-1/2"
          />
        </div>
        <div className="flex items-center justify-center border py-6">
          <img
            src="/images/clients/logo/grey/majlis-perbandaran-sungai-petani-logo.png"
            alt="Masjlid Perbandaran Sungai Petani"
            className="w-[6rem]"
          />
        </div>
        <div className="flex items-center justify-center border py-6">
          <img
            src="/images/clients/logo/grey/mpsp.png"
            alt="Masjlid Perbandaran Seberang Perai"
            className="w-[6rem]"
          />
        </div>
        <div className="flex items-center justify-center border py-6">
          <img
            src="/images/clients/logo/grey/perbadanan-putrajaya-logo.png"
            alt="Perbadanan Putrajaya"
            className="w-[6rem]"
          />
        </div>
        <div className="flex items-center justify-center border py-6">
          <img
            src="/images/clients/logo/grey/picoms-logo.png"
            alt="picoms"
            className="w-[6rem]"
          />
        </div>
        <div className="flex items-center justify-center border py-6">
          <img
            src="/images/clients/logo/grey/emesys-logo.png"
            alt="emesys"
            className="md:w-[6rem]"
          />
        </div>
        <div className="flex items-center justify-center border py-6">
          <img
            src="/images/clients/logo/grey/bank-rakyat-logo.png"
            alt="Bank Rakyat"
            className="md:w-[6rem]"
          />
        </div>
      </div>
    </section>
  );
}
