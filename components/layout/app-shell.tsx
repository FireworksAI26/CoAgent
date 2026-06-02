import Link from "next/link";
import { ReactNode } from "react";
import {
  Bot,
  BrainCircuit,
  Building2,
  Command,
  LayoutDashboard,
  PlayCircle,
  Plug,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { Bot, LayoutDashboard, Users, Workflow, PlayCircle, Plug, ShieldCheck, BrainCircuit, Settings, Search, Plus } from "lucide-react";

const nav = [
  ["Dashboard", "/dashboard", LayoutDashboard],
  ["Agents", "/agents", Users],
  ["Workflows", "/workflows", Workflow],
  ["Runs", "/runs", PlayCircle],
  ["Tools", "/tools", Plug],
  ["Approvals", "/approvals", ShieldCheck],
  ["Memory", "/memory", BrainCircuit],
  ["Settings", "/settings", Settings],
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f7f4] text-zinc-950">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-80" />
      <div className="relative grid min-h-screen grid-cols-1 md:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-zinc-200/80 bg-[#fbfbf9]/88 p-5 backdrop-blur-2xl md:sticky md:top-0 md:flex md:h-screen md:flex-col">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-zinc-200 bg-zinc-950 text-white">
    <div className="min-h-screen bg-command text-slate-100">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_0%,rgba(79,70,229,.20),transparent_32%),radial-gradient(circle_at_85%_8%,rgba(34,211,238,.16),transparent_34%)]" />
      <div className="relative grid min-h-screen grid-cols-1 md:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-white/10 bg-[#070b17]/82 p-5 backdrop-blur-2xl md:sticky md:top-0 md:flex md:h-screen md:flex-col">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/20">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-300 shadow-lg shadow-cyan-500/20">
              <Bot size={18} />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-[-0.03em]">CoAgent</span>
              <span className="text-[10px] uppercase tracking-[0.26em] text-zinc-500">AI Team OS</span>
            </span>
          </Link>

          <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-100 text-zinc-600">
              <span className="text-[10px] uppercase tracking-[0.26em] text-cyan-200/70">AI Team OS</span>
            </span>
          </Link>

          <div className="mt-5 rounded-2xl border border-white/10 bg-[#0b1224]/80 p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.06] text-cyan-200">
                <Building2 size={16} />
              </div>
              <div>
                <p className="text-sm font-medium">Kova Labs</p>
                <p className="text-xs text-zinc-500">Founder workspace</p>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-100">
              <div className="h-full w-[72%] rounded-full bg-zinc-950" />
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-zinc-500">Team capacity 72%</p>
                <p className="text-xs text-slate-500">Founder workspace</p>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">Team capacity 72%</p>
          </div>

          <nav className="mt-6 space-y-1.5">
            {nav.map(([label, href, Icon]) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm text-zinc-600 transition hover:bg-white hover:text-zinc-950 hover:shadow-sm"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-zinc-100 text-zinc-500 transition group-hover:bg-zinc-950 group-hover:text-white">
                className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/[0.035] text-slate-500 transition group-hover:bg-cyan-300/10 group-hover:text-cyan-200">
                  <Icon size={16} />
                </span>
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 text-zinc-950">
              <Sparkles size={15} />
              <p className="text-sm font-medium">Demo mode active</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-zinc-500">Runs, approvals, and tools are mocked but wired to the Prisma demo data model.</p>
          <div className="mt-auto rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
            <div className="flex items-center gap-2 text-cyan-200">
              <Sparkles size={15} />
              <p className="text-sm font-medium">Demo mode active</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-400">Runs, approvals, and tools are mocked but wired to the Prisma demo data model.</p>
          </div>
        </aside>

        <main className="p-4 md:p-8">
          <header className="mb-7 flex items-center gap-3 rounded-[1.5rem] border border-zinc-200 bg-white/90 p-3 shadow-sm backdrop-blur-2xl">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-100 text-zinc-500">
          <header className="mb-7 flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-[#080d1c]/78 p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/[0.04] text-slate-400">
              <Search size={16} />
            </div>
            <input
              placeholder="Search commands, runs, approvals..."
              className="min-w-0 flex-1 bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
            />
            <div className="hidden items-center gap-1 rounded-xl border border-zinc-200 bg-zinc-50 px-2.5 py-2 text-xs text-zinc-500 sm:flex">
              <Command size={13} /> K
            </div>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800">
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-500"
            />
            <div className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/[0.035] px-2.5 py-2 text-xs text-slate-500 sm:flex">
              <Command size={13} /> K
            </div>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
              <Plus size={14} /> New run
            </button>
          </header>
          {children}
        </main>
      </div>
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] bg-grid">
      <aside className="border-r border-border/70 p-5 hidden md:flex md:flex-col md:sticky md:top-0 md:h-screen bg-slate-950/60 backdrop-blur-xl">
        <Link href="/dashboard" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 grid place-items-center"><Bot size={16} /></span>
          CoAgent
        </Link>
        <p className="text-xs text-slate-400 mt-2">Kova Labs Workspace</p>
        <nav className="mt-8 space-y-1.5">
          {nav.map(([label, href, Icon]) => (
            <Link key={href} href={href} className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-all">
              <Icon size={16} className="text-slate-400 group-hover:text-cyan-300" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="p-4 md:p-8">
        <header className="surface p-3.5 mb-6 flex items-center gap-3">
          <Search size={16} className="text-slate-400" />
          <input placeholder="Search commands, runs, approvals..." className="bg-transparent w-full outline-none text-sm placeholder:text-slate-500"/>
          <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 rounded-xl text-sm font-medium inline-flex items-center gap-2"><Plus size={14}/>Quick action</button>
        </header>
        {children}
      </main>
    </div>
  );
}
