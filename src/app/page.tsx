"use client";

import { motion } from "framer-motion";
import NoteHeader from "@/components/NoteHeader";
import { Quote, MessageSquare, Shield, Lock, Heart, Fingerprint, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] relative pt-32 pb-20 px-4 md:px-8">
      <NoteHeader />

      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <Sparkles size={14} className="text-red-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">The Origin Story</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
            FOUNDER’S <span className="text-white/20 font-serif italic">NOTE</span>
          </h1>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: The Observation */}
          <BentoCard delay={0.1} className="lg:col-span-2">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 text-white/80">
                <Quote size={28} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">More Than Clothing</h3>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Drotes was never meant to be just a brand. It started with an observation — that many people walk through life carrying stories no one ever hears.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: The Silence */}
          <BentoCard delay={0.2} className="bg-gradient-to-br from-red-950/20 to-black/40 border-red-900/20">
            <div className="space-y-6">
              <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 w-fit">
                <MessageSquare size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The Silence</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  Not because they don’t want to speak, but because they don’t know how. Or because they were taught not to.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Especially Men */}
          <BentoCard delay={0.3} className="md:row-span-2 flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />

            <div className="relative z-20 p-2 space-y-4">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white w-fit">
                <Shield size={24} />
              </div>
              <h3 className="text-3xl font-black text-white uppercase italic">Especially<br />Men.</h3>
              <p className="text-white/70 text-sm">We’re expected to stay strong, provide, endure, and move forward quietly.</p>
            </div>
          </BentoCard>

          {/* Card 4: The Impact */}
          <BentoCard delay={0.4} className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">The Hidden Weight</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  Over time, that silence becomes heavy. Struggles go unnoticed. Emotions get buried. And some stories never find a place to exist.
                </p>
              </div>
              <div className="h-full w-full bg-white/5 rounded-xl border border-white/5 p-6 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <h4 className="text-4xl font-black text-white/20">SILENCE</h4>
                  <div className="w-full h-px bg-white/10" />
                  <h4 className="text-4xl font-black text-white">RESPONSE</h4>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 5: The Solution */}
          <BentoCard delay={0.5} className="md:col-span-2 lg:col-span-3 bg-white/10 border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="p-6 rounded-full bg-white text-black shrink-0">
                <Lock size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white">The Anecdote Collection</h3>
                <p className="text-lg text-white/80 font-medium max-w-2xl">
                  It’s our way of saying that stories — even the quiet ones — matter. That clothing doesn’t have to be empty.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Card 6: The Meaning */}
          <BentoCard delay={0.6}>
            <div className="space-y-4 h-full flex flex-col">
              <Heart size={32} className="text-red-500" />
              <h3 className="text-xl font-bold text-white mt-auto">Meaning & Care</h3>
              <p className="text-white/60 text-sm">
                Something as simple as a hoodie can carry meaning, memory, and care.
              </p>
            </div>
          </BentoCard>

          {/* Card 7: The Lock */}
          <BentoCard delay={0.7} className="md:col-span-2">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Fingerprint size={24} className="text-white/60" />
                  <h3 className="text-xl font-bold text-white">Hidden Until Unlocked</h3>
                </div>
                <p className="text-white/60 leading-relaxed">
                  Every piece is designed to hold a personal message — a reminder, a voice, a moment — hidden until the wearer chooses to unlock it.
                </p>
                <ul className="flex gap-4 pt-2">
                  <Tag text="Not for attention" />
                  <Tag text="Not for validation" />
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-center border-l border-white/10 pl-6">
                <p className="text-2xl font-serif italic text-white/80">"Just for truth."</p>
              </div>
            </div>
          </BentoCard>

        </div>

        {/* Footer Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center border-t border-white/10 pt-10"
        >
          <p className="text-white font-medium text-lg mb-2">This collection is for you.</p>
          <p className="text-sm tracking-widest font-mono text-white/40 uppercase">— Founder, Drotes</p>
        </motion.div>

      </div>
    </main>
  );
}

function BentoCard({ children, className = "", delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className={`group relative p-8 rounded-[2rem] bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-colors overflow-hidden ${className}`}
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
      {text}
    </span>
  );
}
