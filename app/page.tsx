import Link from "next/link";
import { ArrowRight, Bot, ShieldCheck, Workflow, BrainCircuit, Sparkles } from "lucide-react";

const features = [
  { t: "Role-based AI employees", d: "Hire specialist agents for research, product, engineering, marketing, and ops." },
  { t: "Workflow-native execution", d: "Delegate outcomes, not prompts, with reusable workflows and step ownership." },
  { t: "Human approval guardrails", d: "Require approval before risky actions like outbound sends, spend, or deploy." },
  { t: "Shared company memory", d: "Keep durable context for brand, product, sponsor, and customer knowledge." },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <header className="h-20 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3"><span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 grid place-items-center"><Bot size={18}/></span><span className="font-semibold text-xl tracking-tight">CoAgent</span></div>
          <nav className="hidden md:flex gap-8 text-sm text-slate-300"><a>Product</a><a>Workflows</a><a>Approvals</a><a>Pricing</a><a>Docs</a></nav>
          <div className="flex items-center gap-3"><button className="px-4 py-2 rounded-xl border border-white/15 text-sm">Contact Sales</button><Link href="/dashboard" className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-sm font-medium">Launch CoAgent</Link></div>
        </header>

        <section className="py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-300/90"><Sparkles size={14}/> AI team for founders</p>
            <h1 className="mt-6 text-5xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95]">Hire an AI operating team in minutes.</h1>
            <p className="mt-8 text-lg text-slate-300 max-w-xl">CoAgent gives founders AI employees with roles, memory, tools, workflows, run logs, and human approvals so you can delegate outcomes, not prompts.</p>
            <div className="mt-10 flex gap-3"><Link href="/dashboard" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 font-medium inline-flex items-center gap-2">Start now <ArrowRight size={16}/></Link><Link href="/workflows" className="px-6 py-3 rounded-xl border border-white/15">View demo workflow</Link></div>
          </div>
          <div className="surface p-5">
            <p className="muted-label">Live Command Preview</p>
            <div className="mt-4 rounded-xl bg-[#0f1526] border border-white/10 p-4 text-sm text-slate-300">Prepare a sponsor outreach campaign for Kova Labs.</div>
            <div className="mt-4 space-y-3">{["Atlas researching sponsor categories","Ledger proposing sponsor tiers","Echo drafting outreach emails","Nova assembling final campaign"].map((s)=><div key={s} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 flex items-center justify-between"><span>{s}</span><span className="text-xs text-cyan-300">Running</span></div>)}</div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-20">{features.map((f)=><div key={f.t} className="surface p-5"><p className="font-medium">{f.t}</p><p className="mt-2 text-sm text-slate-300">{f.d}</p></div>)}</section>
      </div>

      <footer className="border-t border-white/10 py-8 px-6 lg:px-10 text-sm text-slate-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} CoAgent</p>
        <div className="flex items-center gap-5"><span className="inline-flex items-center gap-2"><Workflow size={14}/> Workflow-native</span><span className="inline-flex items-center gap-2"><ShieldCheck size={14}/> Guardrailed</span><span className="inline-flex items-center gap-2"><BrainCircuit size={14}/> Memory-first</span></div>
      </footer>
    </div>
  );
}
