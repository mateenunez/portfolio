"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Ticker } from "@/components/Ticker";
import { useState, useEffect } from "react";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:mateenunez@gmail.com",
    value: "mateenunez@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mateenunez/",
  },
  {
    label: "GitHub",
    href: "https://github.com/mateenunez",
  },
];

const proyects = [
  {
    label: "F1 Telemetry",
    description:
      "F1 Telemetry es un dashboard en tiempo real de Formula 1, con datos de telemetría originales y un mapa del circuito en vivo.",
    href: "https://f1telemetry.vercel.app/",
    img: "https://res.cloudinary.com/dvukvnmqt/image/upload/v1758038796/F1_Telemetry_-_Google_Chrome_9_16_2025_1_05_43_PM_n2vozy.png",
  },
];

const experiences = [
  {
    company: "E-Learning FRCU",
    period: "2023 - ",
    description:
      "Actualmente formo parte del equipo de E-Learning dentro de la Universidad Tecnológica Nacional con el objetivo de subir contenido educativo a dicha plataforma. Mi rol en el equipo es el de editar los videos a subir y organizar los materiales de estudio.",
  },
  {
    company: "Freelance",
    period: "Sep 2021 - Oct 2021",
    description:
      "Realicé proyectos de manera freelance, coordinamos diversas entregas con un cliente en Estados Unidos. Mi trabajo se enfocaba mayormente en Frontend utilizando HTML y CSS.",
  },
];

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative flex flex-col items-center bg-white min-h-screen font-sans">
      <div
        id="main-container"
        className="w-full min-h-screen bg-white z-10 px-4 sm:px-6 md:px-8 py-6 sm:py-8 mb-[1500px] transition-all duration-500 ease-in-out shadow-[0_0_20px_rgba(0,0,0,0.1)]"
      >
        <Card className="border-none bg-transparent mb-8 sm:mb-16 w-full max-w-[400px] mx-auto shadow-none">
          <CardContent className="flex flex-col gap-8 sm:gap-12 p-0 sm:p-4">
            <Header isLoaded={isLoaded} />
            <Description isLoaded={isLoaded} />
            <CTAButtons isLoaded={isLoaded} />
            <Experience isLoaded={isLoaded} experiences={experiences} />
            <Proyects isLoaded={isLoaded} proyects={proyects} />
            <SocialLinks isLoaded={isLoaded} links={socialLinks} />
          </CardContent>
        </Card>
      </div>
      <Ticker />
    </main>
  );
}

function Header({ isLoaded }: { isLoaded: boolean }) {
  return (
    <header
      className={`flex flex-col gap-1.5 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "100ms" }}
    >
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
        Mateo Nuñez
      </h1>
      <p className="text-sm font-medium text-[#62748e]">
        Estudiante de Ingeniería en Sistemas de Información
      </p>
    </header>
  );
}

function Description({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      className={`flex flex-col gap-4 sm:gap-6 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "200ms" }}
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        <p className="text-sm text-neutral-900">
          Estudiante de Ingeniería en Sistemas con 3 años de experiencia en
          proyectos académicos y personales, adaptándome activamente a las
          mejores tecnologías para contribuir exitosamente a soluciones
          innovadoras.
        </p>
      </div>
    </div>
  );
}

function CTAButtons({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-start justify-start sm:items-center gap-3 sm:gap-2.5 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "300ms" }}
    >
      <Button
        variant="default"
        className="w-full sm:w-auto inline-flex h-[34px] items-center justify-center gap-2.5 pl-4 pr-3 py-0 bg-[#020618] rounded-[99px] hover:bg-[#020618]/90 text-slate-50 "
      >
        <span className="font-medium text-[13px] leading-5 text-slate-50">
          Mandame un email
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className="text-slate-50"
        >
          <title>chevron-right</title>
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <polyline points="4.25 10.25 8.5 6 4.25 1.75"></polyline>
          </g>
        </svg>
      </Button>
      <Button
        variant="default"
        className="w-full sm:w-auto inline-flex h-[34px] items-center justify-center gap-2.5 pl-4 pr-3 py-0 bg-[#020618] rounded-[99px] hover:bg-[#020618]/90 text-slate-50 "
        download="/CVMateo.pdf"
        href=""
      >
        <span className="font-medium text-[13px] leading-5 text-slate-50">
          Currículum
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className="text-slate-50"
        >
          <title>chevron-down</title>
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <polyline points="1.75 4.25 6 8.5 10.25 4.25"></polyline>
          </g>
        </svg>
      </Button>
    </div>
  );
}

function Experience({
  isLoaded,
  experiences: any,
}: {
  isLoaded: boolean;
  experiences: typeof experiences;
}) {
  return (
    <div
      className={`flex flex-col gap-6 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "400ms" }}
    >
      <h2 className="text-sm text-neutral-400 uppercase">EXPERIENCIA</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-neutral-900">
                {exp.company}
              </span>
              <span className="text-sm text-neutral-500">{exp.period}</span>
            </div>
            <p className="text-sm text-neutral-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Proyects({
  isLoaded,
  proyects: any,
}: {
  isLoaded: boolean;
  proyects: typeof proyects;
}) {
  return (
    <div
      className={`flex flex-col gap-6 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "400ms" }}
    >
      <h2 className="text-sm text-neutral-400 uppercase">HOBBIES</h2>
      <div className="flex flex-col gap-6">
        {proyects.map((proy: any) => (
          <div key={proy.label} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-neutral-900">
                {proy.label}
              </span>
            </div>
            <p className="text-sm text-neutral-700">{proy.description}</p>
            <div className="w-full flex justify-center py-2 items-center flex-col gap-2">
              <img
                width="full"
                height={280}
                src={proy.img}
                className="rounded"
              />
              <a
                href={proy.href}
                className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-1 group"
                rel="noopener noreferrer"
                target="_blank"
              >
                {proy.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialLinks({
  isLoaded,
  links,
}: {
  isLoaded: boolean;
  links: typeof socialLinks;
}) {
  return (
    <div
      className={`flex flex-col gap-6 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "500ms" }}
    >
      <h2 className="text-sm text-neutral-400 uppercase">MIS REDES SOCIALES</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {links.map((link) => (
          <div key={link.label} className="group">
            {link.label === "Email" ? (
              <button
                onClick={() => navigator.clipboard.writeText(link.value!)}
                className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-1 group"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            ) : (
              <a
                href={link.href}
                className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-1 group"
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
