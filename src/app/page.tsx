'use client';

import { FaReact, FaRust, FaJava, FaLinux } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiSupabase, SiTailwindcss, SiGtk, SiFlutter } from "react-icons/si";
import React, { JSX, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/themeToggle";
import Link from "next/link";

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
  Java: { icon: <FaJava />, color: "text-red-600" },
  Linux: { icon: <FaLinux />, color: "text-gray-700 dark:text-gray-200" },
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
      'Rust + GTK4 Sleek gtk bar for BTDE.',
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
      <header className="w-full py-4 px-6 flex items-center justify-between">
        <span className="font-semibold tracking-wide">SAN DESH</span>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <ThemeToggle/>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="flex flex-col items-center text-center py-20 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Hi, I&apos;m <span className="text-blue-600">Sandesh</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-lg max-w-xl opacity-80"
          >
            Programmer focused on modern web & software, with a taste for clean UI.
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
                <div
                  key={skill}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl glass outline outline-primary hover:shadow-sm transition"
                >
                  <span className={`text-3xl ${meta?.color}`}>{meta?.icon}</span>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {projects.map((p) => (
              <article
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
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      GitHub
                    </a>
                  )}
                  {p.demo && isValidLink(p.demo) && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="opacity-80 mb-6">
            Have an idea or want to collaborate? Let&apos;s connect.
          </p>
          <Link
            href="mailto:sandeshsharma924@gmail.com"
            className="px-6 py-3 rounded-xl outline outline-primary inline-block"
          >
            Contact Me
          </Link>
        </section>
      </main>

      <footer className="py-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Sandesh Paudel.
      </footer>
    </div>
  );
}
