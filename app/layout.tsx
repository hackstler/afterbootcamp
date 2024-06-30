import { Inter, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Layout from "./components/layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afterbootcamp",
  description:
    "Impulsa tu carrera con After Bootcamp. Descubre cómo con nuestra programa te ayuda a mejorar tus habilidades, encontrar oportunidades laborales y avanzar en tu trayectoria profesional. Únete a una comunidad de profesionales y accede a recursos exclusivos para maximizar tu éxito después de tu fomración.",
  keywords: [
    "bootcamp",
    "cómo ser senior",
    "desarrollo de software",
    "devops",
    "after bootcamp",
    "afterbootcamp",
    "afterbootcamp.es",
    "senioridad",
    "desarrollador",
    "ingeniero de software",
    "arquitecto de software",
    "líder técnico",
    "cto",
    "trayectoria profesional",
    "desarrollo profesional",
    "crecimiento profesional",
    "carrera en tecnología",
    "mejora de habilidades",
    "oportunidades laborales en tecnología",
    "comunidad de desarrolladores",
    "recursos para desarrolladores",
    "aprendizaje continuo",
    "formación en tecnología",
    "éxito profesional",
    "avanzar en tu carrera",
    "empleabilidad en tecnología",
    "impulsa tu carrera",
    "mejorar tus habilidades",
    "oportunidades laborales",
    "avanzar en tu trayectoria profesional",
    "comunidad de profesionales",
    "recursos exclusivos",
    "éxito después del bootcamp",
    "mejorar habilidades",
    "encontrar oportunidades laborales",
    "avanzar en la carrera",
    "únete a una comunidad",
    "accede a recursos exclusivos",
  ],
  openGraph: {
    title: "Afterbootcamp",
    description: "Grow your career with After Bootcamp",
    url: "https://afterbootcamp.es",
    type: "website",
    images: [
      "https://storage.googleapis.com/afterbootcamp/openart-image_Zssjbb-I_1716376231201_raw.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <Layout>
        <SpeedInsights />
        <body className={montserrat.className}>{children}</body>
      </Layout>
    </html>
  );
}
