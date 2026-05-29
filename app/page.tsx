import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, ShieldCheck, Sparkles, WandSparkles } from "lucide-react";

const metrics = [
  { label: "Active AI employees", value: "5" },
  { label: "Automation workflows", value: "32" },
  { label: "Approval accuracy", value: "98.4%" },
];

const features = [
  "Role-based AI employees",
  "Multi-agent delegation",
  "Human approval queue",
  "Tool-connected execution",
  "Company memory",
  "Run logs and audits",
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#040814] text-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,rgba(59,130,246,.26),transparent_35%),radial-gradient(circle_at_82%_7%,rgba(34,211,238,.20),transparent_36%),radial-gradient(circle_at_70%_65%,rgba(99,102,241,.15),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <header className="pt-6 md:pt-8">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur-xl px-4 md:px-6 py-4 flex items-center justify-between shadow-[0_14px_60px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 grid place-items-center"><Bot size={18} /></span>
              <div>
                <p className="font-semibold text-2xl leading-none tracking-tight">CoAgent</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mt-1">AI Team OS</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button className="px-5 py-2.5 rounded-xl border border-white/15 text-sm text-slate-200 hover:bg-white/5">Contact sales</button>
              <Link href="/dashboard" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-sm font-medium shadow-[0_8px_24px_rgba(56,189,248,0.35)]">Launch CoAgent</Link>
            </div>
          </div>
        </header>

        <section className="pt-12 md:pt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cyan-300/95"><Sparkles size={14}/> AI team for founders</p>
            <h1 className="mt-5 text-[52px] md:text-[84px] leading-[0.95] tracking-[-0.045em] font-semibold text-white">Hire an AI operating team in minutes.</h1>
            <p className="mt-7 text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">CoAgent gives founders AI employees with roles, memory, tools, workflows, run logs, and human approvals so you can delegate outcomes, not prompts.</p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl">
              <Link href="/dashboard" className="rounded-2xl px-6 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 font-medium text-lg inline-flex items-center justify-between">Start now <ArrowRight size={20}/></Link>
              <Link href="/workflows" className="rounded-2xl px-6 py-4 border border-white/15 bg-white/[0.02] font-medium text-lg hover:bg-white/[0.05]">View demo workflow</Link>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                  <p className="text-2xl font-semibold text-white">{m.value}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_80px_rgba(0,0,0,0.45)]">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-300/90">Live Command Preview</p>
            <div className="mt-4 rounded-xl border border-white/10 bg-[#0b1122] p-4 text-sm text-slate-200">Prepare a sponsor outreach campaign for Kova Labs.</div>
            <div className="mt-4 space-y-2.5">
              {["Atlas: researching sponsor categories","Ledger: pricing package tiers","Echo: outreach and follow-up drafts","Nova: final campaign assembly"].map((s)=>(
                <div key={s} className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 flex items-center justify-between text-sm">
                  <span className="text-slate-200">{s}</span>
                  <span className="inline-flex items-center gap-1 text-cyan-300 text-xs"><WandSparkles size={12}/> Running</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-3 flex items-center justify-between">
              <span className="text-sm text-emerald-200">Approval required before sending emails</span>
              <ShieldCheck size={16} className="text-emerald-300"/>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Production-grade foundations</p>
          <div className="mt-4 grid md:grid-cols-3 gap-3">
            {features.map((f)=><div key={f} className="rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-slate-200 inline-flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-300"/>{f}</div>)}
          </div>
        </section>
      </div>
    </div>
  );
}
