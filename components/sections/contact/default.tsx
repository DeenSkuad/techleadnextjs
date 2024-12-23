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

// Form schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const INTERESTS = ["Web", "Mobile App", "IoT", "Maintenance", "Other"] as const;

// Add these type definitions
type StepProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  watch?: UseFormWatch<FormData>;
  setValue?: UseFormSetValue<FormData>;
};

// Step components
const Step1 = ({ register, errors }: StepProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <div className=" flex flex-col">
      <Label className="text-sm text-neutral-400 text-left sr-only">Hello, my name is</Label>
      <Input 
        {...register("name")}
        placeholder="Your Name" 
        className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600"
      />
      {errors.name && (
        <span className="text-xs text-red-500">{errors.name.message}</span>
      )}
    </div>

    <div className=" flex flex-col">
      <Label className="text-sm text-neutral-400 sr-only">at</Label>
      <Input 
        {...register("email")}
        type="email" 
        placeholder="Your Email" 
        className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600"
      />
      {errors.email && (
        <span className="text-xs text-red-500">{errors.email.message}</span>
      )}
    </div>

    <div className=" flex flex-col">
      <Label className="text-sm text-neutral-400 sr-only">or you can reach me on</Label>
      <Input 
        {...register("phone")}
        type="tel" 
        placeholder="Your Phone" 
        className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600"
      />
      {errors.phone && (
        <span className="text-xs text-red-500">{errors.phone.message}</span>
      )}
    </div>
  </motion.div>
);

const Step2 = ({ register, errors, watch, setValue }: Required<Omit<StepProps, 'watch' | 'setValue'>> & {
  watch: UseFormWatch<FormData>;
  setValue: UseFormSetValue<FormData>;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <div className="space-y-2">
      <Label className="text-sm text-neutral-400 sr-only">I&apos;m interested in</Label>
      <div className="flex flex-wrap gap-2">
        {INTERESTS.map((interest) => {
          const interests: string[] = watch("interests") || [];
          return (
            <Button
              key={interest}
              type="button"
              variant="outline"
              className={`rounded-full border-neutral-800 bg-neutral-900 
                ${interests.includes(interest) 
                  ? "text-blue-500 border-blue-500" 
                  : "text-neutral-400"
                } hover:bg-neutral-800 hover:text-white`}
              onClick={() => {
                const newInterests = interests.includes(interest)
                  ? interests.filter(i => i !== interest)
                  : [...interests, interest];
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
      <Label className="text-sm text-neutral-400">Tell us about your project</Label>
      <textarea
        {...register("message")}
        className="w-full min-h-[100px] rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Message..."
      />
      {errors.message && (
        <span className="text-xs text-red-500">{errors.message.message}</span>
      )}
    </div>
  </motion.div>
);

const ThankYouStep = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center space-y-4 py-8"
  >
    <div className="text-5xl">🎉</div>
    <h3 className="text-2xl font-bold text-white">Thank You!</h3>
    <p className="text-neutral-400">
      We&apos;ve received your message and will get back to you soon.
    </p>
  </motion.div>
);

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

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
      alert('Failed to send message. Please try again.');
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
        return <Step1 register={register} errors={errors} />;
      case 2:
        return <Step2 register={register} errors={errors} watch={watch} setValue={setValue} />;
      case 3:
        return <ThankYouStep />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white">Hire Us</h2>
        <p className="text-neutral-400 mt-2">
          {/* TODO: Add a description here   */}
          We are a team of experienced developers and designers who are passionate about creating beautiful and functional websites and mobile applications.
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
                Previous
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
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}