import { PageTransition } from "@/components/PageTransition";

export default function ServiceLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return <PageTransition>{children}</PageTransition>;
} 