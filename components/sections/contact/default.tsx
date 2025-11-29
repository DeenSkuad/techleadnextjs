"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm, UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Progress } from "@/components/ui/progress";
import { sendContactEmail } from '@/lib/services/email';
import { useTranslations } from 'next-intl';

type FormData = {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  message: string;
};

// Add these type definitions
type StepProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  watch?: UseFormWatch<FormData>;
  setValue?: UseFormSetValue<FormData>;
  t: ReturnType<typeof useTranslations>;
  interests?: string[];
};

// Step components
const Step1 = ({ register, errors, t }: StepProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <div className=" flex flex-col">
      <Label className="text-sm text-neutral-400 text-left sr-only">{t('contact.name')}</Label>
      <Input
        {...register("name")}
        placeholder={t('contact.namePlaceholder')}
        className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600"
      />
      {errors.name && (
        <span className="text-xs text-red-500">{errors.name.message}</span>
      )}
    </div>

    <div className=" flex flex-col">
      <Label className="text-sm text-neutral-400 sr-only">{t('contact.email')}</Label>
      <Input
        {...register("email")}
        type="email"
        placeholder={t('contact.emailPlaceholder')}
        className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600"
      />
      {errors.email && (
        <span className="text-xs text-red-500">{errors.email.message}</span>
      )}
    </div>

    <div className=" flex flex-col">
      <Label className="text-sm text-neutral-400 sr-only">{t('contact.phone')}</Label>
      <Input
        {...register("phone")}
        type="tel"
        placeholder={t('contact.phonePlaceholder')}
        className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600"
      />
      {errors.phone && (
        <span className="text-xs text-red-500">{errors.phone.message}</span>
      )}
    </div>
  </motion.div>
);

const Step2 = ({ register, errors, watch, setValue, t, interests }: Required<Omit<StepProps, 'watch' | 'setValue' | 'interests'>> & {
  watch: UseFormWatch<FormData>;
  setValue: UseFormSetValue<FormData>;
  interests: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <div className="space-y-2">
      <Label className="text-sm text-neutral-400 sr-only">{t('contact.interests')}</Label>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => {
          const selectedInterests: string[] = watch("interests") || [];
          return (
            <Button
              key={interest}
              type="button"
              variant="outline"
              className={`rounded-full border-neutral-800 bg-neutral-900
                ${selectedInterests.includes(interest)
                  ? "text-blue-500 border-blue-500"
                  : "text-neutral-400"
                } hover:bg-neutral-800 hover:text-white`}
              onClick={() => {
                const newInterests = selectedInterests.includes(interest)
                  ? selectedInterests.filter(i => i !== interest)
                  : [...selectedInterests, interest];
                setValue("interests", newInterests);
              }}
            >
              {interest}
            </Button>
          );
        })}
      </div>
      {errors.interests && (
        <span className="text-xs text-red-500">{errors.interests.message}</span>
      )}
    </div>

    <div className="space-y-2 flex flex-col">
      <Label className="text-sm text-neutral-400">{t('contact.message')}</Label>
      <textarea
        {...register("message")}
        className="w-full min-h-[100px] rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder={t('contact.messagePlaceholder')}
      />
      {errors.message && (
        <span className="text-xs text-red-500">{errors.message.message}</span>
      )}
    </div>
  </motion.div>
);

const ThankYouStep = ({ t }: { t: ReturnType<typeof useTranslations> }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center space-y-4 py-8"
  >
    <div className="text-5xl">🎉</div>
    <h3 className="text-2xl font-bold text-white">{t('contact.success')}</h3>
    <p className="text-neutral-400">
      {t('contact.subtitle')}
    </p>
  </motion.div>
);

export default function ContactForm() {
  const t = useTranslations();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Get translated interest options
  const INTERESTS = [
    t('contact.interestOptions.web'),
    t('contact.interestOptions.mobileApp'),
    t('contact.interestOptions.iot'),
    t('contact.interestOptions.maintenance'),
    t('contact.interestOptions.other')
  ];

  // Form schema with translated messages
  const formSchema = z.object({
    name: z.string().min(2, t('contact.validation.nameRequired')),
    email: z.string().email(t('contact.validation.emailInvalid')),
    phone: z.string().min(10, t('contact.validation.phoneRequired')),
    interests: z.array(z.string()).min(1, t('contact.validation.interestRequired')),
    message: z.string().min(10, t('contact.validation.messageMin')),
  });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: [],
    }
  });

  const progress = (step / totalSteps) * 100;

  const onSubmit = async (data: FormData) => {
    try {
      await sendContactEmail(data);
      setStep(3); // Show thank you screen
    } catch (error) {
      console.error('Error:', error);
      alert(t('contact.error'));
    }
  };

  const handleNext = async () => {
    if (step === 1) {
      const isValid = await trigger(['name', 'email', 'phone']);
      if (isValid) setStep(2);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 register={register} errors={errors} t={t} />;
      case 2:
        return <Step2 register={register} errors={errors} watch={watch} setValue={setValue} t={t} interests={INTERESTS} />;
      case 3:
        return <ThankYouStep t={t} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white">{t('hero.buttons.hireUs')}</h2>
        <p className="text-neutral-400 mt-2">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="mb-6">
        <Progress value={progress} className="h-1" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {renderStep()}

        {step < 3 && (
          <div className="flex justify-between">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                {t('products.nav.back').replace('Kembali ke Produk', 'Previous').replace('Back to Products', 'Previous')}
              </Button>
            )}

            {step < 2 ? (
              <Button
                type="button"
                onClick={handleNext}
                className="ml-auto"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-600 ml-auto"
              >
                {isSubmitting ? t('contact.sending') : t('contact.submit')}
              </Button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
