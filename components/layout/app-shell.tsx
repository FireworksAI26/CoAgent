import Link from "next/link";
import { ReactNode } from "react";
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
