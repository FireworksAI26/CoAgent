import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Clock3,
  LockKeyhole,
  Play,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const navItems = ["Platform", "Agents", "Workflows", "Security", "Pricing"];

const agents = [
  { name: "Atlas", role: "Research Lead", color: "from-sky-400 to-cyan-300" },
  { name: "Nova", role: "Product Strategist", color: "from-violet-400 to-indigo-300" },
  { name: "Echo", role: "Growth Agent", color: "from-emerald-400 to-teal-300" },
  { name: "Ledger", role: "Ops & Finance", color: "from-amber-300 to-orange-300" },
];

const workflowSteps = [
  "Parse founder outcome",
  "Assign specialist agent team",
  "Research, draft, and assemble artifacts",
  "Request approval before risky action",
];

const features = [
  {
    icon: BrainCircuit,
    title: "Role-based AI employees",
    copy: "Specialist agents with clear responsibilities, instructions, tools, memory, and permission levels.",
  },
  {
    icon: Workflow,
    title: "Workflow-native execution",
    copy: "Turn repeatable founder jobs into reusable operating playbooks with logs and handoffs.",
  },
  {
    icon: ShieldCheck,
    title: "Human approval guardrails",
    copy: "Require founder approval before external messages, spend, deletes, deploys, or other risky actions.",
  },
  {
    icon: PlugZap,
    title: "Tool-connected operating system",
    copy: "Mocked today, structured for Gmail, GitHub, Notion, Slack, calendars, and code sandboxes tomorrow.",
  },
];

const logos = ["Kova Labs", "Northstar", "LaunchKit", "SignalOps", "FounderOS", "VentureDesk"];

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050713] text-white">
      <div className="absolute inset-0 landing-aurora" />
      <div className="absolute inset-0 landing-dots opacity-60" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 rounded-[1.75rem] border border-white/10 bg-[#080d1c]/80 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-300 shadow-lg shadow-cyan-500/20">
                <Bot size={19} />
              </span>
              <span>
                <span className="block text-xl font-semibold tracking-[-0.03em]">CoAgent</span>
                <span className="hidden text-[10px] uppercase tracking-[0.28em] text-cyan-200/70 sm:block">AI Team OS</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">
              {navItems.map((item) => (
                <a key={item} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button className="hidden rounded-2xl border border-white/12 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08] md:block">
                Contact sales
              </button>
              <Link
                href="/dashboard"
                className="rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition hover:scale-[1.02] sm:px-5"
              >
                Launch app
              </Link>
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

        <section className="grid gap-10 pb-16 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-24 lg:pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles size={14} /> AI employee team for founders
            </div>
            <h1 className="mt-6 text-[3.6rem] font-semibold leading-[0.88] tracking-[-0.075em] text-white sm:text-[5.4rem] lg:text-[6.6rem]">
              Delegate outcomes to an AI operating team.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              CoAgent gives founders role-based AI employees that plan, collaborate, use tools, keep company memory, produce artifacts, and ask for approval before risky actions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-4 text-base font-semibold text-white shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-0.5"
              >
                Open Command Center <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </Link>
              <Link
                href="/workflows"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.04] px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/[0.08]"
              >
                Watch sponsor workflow <Play size={17} />
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["5", "AI employees"],
                ["12", "tools ready"],
                ["0", "risky actions without approval"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{label}</p>
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

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-cyan-500/10 to-emerald-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#080d1c]/88 shadow-2xl shadow-black/50 backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-white">Sponsor Outreach Campaign</p>
                  <p className="mt-1 text-xs text-slate-400">Outcome delegated to specialist agents</p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">Live run</span>
              </div>

              <div className="space-y-4 p-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">Founder command</p>
                  <p className="mt-2 text-lg font-medium text-white">Prepare a sponsor outreach campaign for Kova Labs.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {agents.map((agent) => (
                    <div key={agent.name} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                      <div className={`mb-3 h-10 w-10 rounded-2xl bg-gradient-to-br ${agent.color}`} />
                      <p className="font-medium text-white">{agent.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{agent.role}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1224] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-white">Execution trace</p>
                    <span className="inline-flex items-center gap-1 text-xs text-cyan-200"><Clock3 size={13} /> 4m 18s</span>
                  </div>
                  <div className="space-y-3">
                    {workflowSteps.map((step, index) => (
                      <div key={step} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-400/15 text-xs font-semibold text-cyan-200">{index + 1}</span>
                        <div className="min-w-0 flex-1 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                  <div className="flex items-center gap-3">
                    <LockKeyhole className="text-amber-200" size={18} />
                    <div>
                      <p className="text-sm font-medium text-amber-100">Approval required</p>
                      <p className="mt-1 text-xs text-amber-100/70">Echo wants to send 12 sponsor emails. Waiting for founder approval.</p>
                    </div>
                  </div>
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

        <section className="border-y border-white/10 py-6">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.24em] text-slate-500">Built for ambitious founder-led teams</p>
          <div className="grid grid-cols-2 gap-3 text-center text-sm font-medium text-slate-400 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <div key={logo} className="rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3">{logo}</div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.055]">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-semibold tracking-tight text-white">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{feature.copy}</p>
              </div>
            );
          })}
        </section>

        <section className="mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-indigo-500/15 via-sky-500/10 to-cyan-400/15 p-6 backdrop-blur md:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-medium text-cyan-200">Ready to replace prompt chaos with operating rhythm?</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">Launch the CoAgent Command Center demo.</h2>
            </div>
            <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]">
              Enter demo <ChevronRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </main>
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
