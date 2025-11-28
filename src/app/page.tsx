'use client';

import { FaReact, FaRust } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiSupabase, SiTailwindcss, SiGtk, SiFlutter } from "react-icons/si";
import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Film, Github, Linkedin, Mail, MusicIcon } from 'lucide-react';
import Link from "next/link";
import { JavaOriginal, LinuxOriginal } from "devicons-react";
import SpotlightCard from "@/components/*/Components/SpotlightCard/SpotlightCard";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/navbar";
import { Instagram } from "@/components/icons/instagram";
import { Youtube } from "@/components/icons/youtube";

type Project = {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  tech: string[];
};


const techMeta: Record<string, { icon: JSX.Element; color: string }> = {
  React: { icon: <FaReact />, color: "text-sky-500" },
  "Next.js": { icon: <SiNextdotjs />, color: "text-black dark:text-white" },
  TypeScript: { icon: <SiTypescript />, color: "text-blue-600" },
  Rust: { icon: <FaRust />, color: "text-orange-700" },
  Supabase: { icon: <SiSupabase />, color: "text-emerald-600" },
  TailwindCSS: { icon: <SiTailwindcss />, color: "text-cyan-500" },
  GTK: { icon: <SiGtk />, color: "text-green-700" },
  GTK4: { icon: <SiGtk />, color: "text-green-700" },
  Flutter: { icon: <SiFlutter />, color: "text-sky-400" },
  Java: { icon: <JavaOriginal size={30} />, color: "text-red-600" },
  Linux: { icon: <LinuxOriginal size={30} />, color: "text-gray-700 dark:text-gray-200" },
};


const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Rust',
  'Supabase',
  'TailwindCSS',
  'GTK',
  'Flutter',
  'Java',
  'Linux'
] as const;

const projects: Project[] = [
  {
    title: 'Flippress',
    description:
      'Issuu-like publishing platform with Supabase auth and storage, built for smooth reading and fast uploads.',
    github: 'https://github.com/sandesh2007/flippress',
    demo: 'https://flippress.vercel.app',
    tech: ['Next.js', 'Supabase', 'TailwindCSS'],
  },
  {
    title: 'Better Bar',
    description:
      'Rust + GTK4 Sleek gtk bar for BTDE. (UNDER DEVELOPMENT)',
    github: 'https://github.com/better-ecosystem/better-bar',
    demo: '#',
    tech: ['Rust', 'GTK4'],
  },
];

function isValidLink(href: string): boolean {
  return /^https?:\/\/|^mailto:/.test(href);
}

export default function Portfolio(): JSX.Element {


  return (
    <div>
      {/* Header / Nav */}
      <Header />

      {/* Hero */}
      <main>
        <section className="flex flex-col items-center text-center py-20 px-6">
          <motion.h1
            initial={{ opacity: 0.8, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Hi, I&apos;m <span>Sandesh</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-lg max-w-xl opacity-80"
          >
            Linux enthusiast & programmer who loves contributing to open-source and learning rust, C++ and Java.
          </motion.p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/sandesh2007"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:opacity-80"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="www.linkedin.com/in/sandesh-paudel-747ab5277"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:sandeshsharma924@gmail.com" target="_blank" aria-label="Email" className="hover:opacity-80">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => {
              const meta = techMeta[skill];
              return (
                <SpotlightCard
                  key={skill}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl glass outline outline-primary hover:shadow-sm transition"
                >
                  <span className={`text-3xl ${meta?.color}`}>{meta?.icon}</span>
                  <span className="text-sm font-medium">{skill}</span>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* My Projects */}
        <section id="projects" className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-center mb-2">Projects</h2>
          <p className="text-center opacity-80 mb-6">
            Here are some of my recent projects that showcase my skills and interests.
          </p>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {projects.map((p) => (
              <SpotlightCard
                spotlightColor="rgba(59, 130, 246, 0.3)"
                key={p.title}
                className="p-6 rounded-xl glass outline outline-primary hover:shadow-sm transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="opacity-80 mb-4">{p.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs mb-4">
                  {p.tech.map((t) => {
                    const meta = techMeta[t];
                    return (
                      <li
                        key={t}
                        className="flex items-center gap-1 px-2 py-1 rounded-md border"
                      >
                        <span className={`text-base ${meta?.color}`}>{meta?.icon}</span>
                        {t}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex gap-4">
                  {p.github && isValidLink(p.github) && (
                    <Button
                      variant={"default"}
                      size={"sm"}
                      onClick={() => window.open(p.github, '_blank')}
                      className="flex items-center gap-2 transition-all duration-200 hover:scale-105 group/btn text-neutral-50"
                    >
                      <Github /> <span>Code</span>
                    </Button>
                  )}
                  {p.demo && isValidLink(p.demo) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(p.demo, '_blank')}
                      className='transition-all duration-200 hover:scale-105 group/btn'
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                      Visit
                    </Button>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* My hobbies */}
        <section id="hobbies" className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            <SpotlightCard className="flex flex-col items-center gap-3 p-6 rounded-xl glass outline outline-primary hover:shadow-sm transition">
              <Film size={32} />
              <span className="text-lg font-medium">Editing</span>
              <p className="text-sm opacity-80 text-center">
                I enjoy making edits of movies, web-series and anime in my free time.
              </p>
              <div className="flex items-center gap-4 mt-3">
                <Link
                  href="https://www.instagram.com/sanzo_am"
                  target="_blank"
                  className="hover:opacity-80 flex flex-col outline justify-center items-center hover:bg-blue-500/40 p-2 rounded-md"
                >
                  <Instagram className="text-3xl" />
                  <span>@sanzo_am</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@Sanzo_am"
                  target="_blank"
                  className="hover:opacity-80 flex flex-col outline justify-center items-center hover:bg-red-500/40 p-2 rounded-md"
                >
                  <Youtube className="text-3xl text-red-500" />
                  <span>@Sanzo_am</span>
                </Link>
              </div>
            </SpotlightCard>

            <SpotlightCard className="flex flex-col items-center gap-3 p-6 rounded-xl glass outline outline-primary hover:shadow-sm transition">
              <MusicIcon size={32} />
              <span className="text-lg font-medium">Listening to Music</span>
              <p className="text-sm opacity-80 text-center">
                Music keeps me inspired and focused while working on my projects.
              </p>
              <iframe
                src="https://open.spotify.com/embed/track/1WTlony1MLK4u5OaG8uTLg"
                width="full"
                height="152"
                allow="clipboard-write; encrypted-media; picture-in-picture"
                loading="lazy"
                className="rounded-lg mt-3"
              />

            </SpotlightCard>

          </div>
        </section>


        {/* Contact */}
        <section id="contact" className="py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="opacity-80 mb-6">
            Have an idea or want to collaborate? Let&apos;s connect.
          </p>
          <Link
            href="mailto:sandeshsharma924@gmail.com"
            className="px-6 py-3 rounded-xl glass outline outline-primary inline-block"
          >
            Contact Me
          </Link>
        </section>
      </main>

      <footer className="py-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Sandesh.

        <div className="compo">
          Components used in this site are from{' '}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className="underline hover:opacity-80"
          >
            shadcn/ui
          </a>
          {' '} and{' '}
          <a href="https://reactbits.dev"
          target="_blank"
          rel="noreferrer"
          className="underline hover:opacity-80"
          >
            react bits
          </a>
         .
        </div>
      </footer>
    </div>
  );
}
