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
  { name: "Atlas", role: "Research Lead", tone: "bg-zinc-950 text-white" },
  { name: "Nova", role: "Product Strategist", tone: "bg-zinc-200 text-zinc-900" },
  { name: "Echo", role: "Growth Agent", tone: "bg-zinc-100 text-zinc-900" },
  { name: "Ledger", role: "Ops & Finance", tone: "bg-white text-zinc-900 border border-zinc-200" },
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
    copy: "Specialist agents with responsibilities, instructions, tools, memory, and permission levels.",
  },
  {
    icon: Workflow,
    title: "Workflow-native execution",
    copy: "Turn repeatable founder jobs into reusable operating playbooks with logs and handoffs.",
  },
  {
    icon: ShieldCheck,
    title: "Human approval guardrails",
    copy: "Require founder approval before external messages, spend, deletes, deploys, or risky actions.",
  },
  {
    icon: PlugZap,
    title: "Tool-connected OS",
    copy: "Structured for Gmail, GitHub, Notion, Slack, calendars, and code sandboxes.",
  },
];

const logos = ["Kova Labs", "Northstar", "LaunchKit", "SignalOps", "FounderOS", "VentureDesk"];

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden landing-paper text-zinc-950">
      <div className="pointer-events-none absolute inset-0 landing-grid opacity-80" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-white/80 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 rounded-[1.75rem] border border-zinc-200 bg-white/82 px-4 py-3 shadow-[0_18px_60px_rgba(24,24,27,0.08)] backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-950 text-white shadow-sm">
                <Bot size={19} />
              </span>
              <span>
                <span className="block text-xl font-semibold tracking-[-0.03em]">CoAgent</span>
                <span className="hidden text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:block">AI Team OS</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1 lg:flex">
              {navItems.map((item) => (
                <a key={item} className="rounded-full px-4 py-2 text-sm text-zinc-600 transition hover:bg-white hover:text-zinc-950 hover:shadow-sm">
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button className="hidden rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-950 md:block">
                Contact sales
              </button>
              <Link
                href="/dashboard"
                className="rounded-2xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 sm:px-5"
              >
                Launch app
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-10 pb-16 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-24 lg:pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/75 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-zinc-600 shadow-sm">
              <Sparkles size={14} /> AI employee team for founders
            </div>
            <h1 className="mt-6 text-[3.4rem] font-semibold leading-[0.9] tracking-[-0.075em] text-zinc-950 sm:text-[5.2rem] lg:text-[6.4rem]">
              Delegate outcomes to an AI operating team.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
              CoAgent gives founders role-based AI employees that plan, collaborate, use tools, keep company memory, produce artifacts, and ask for approval before risky actions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-zinc-950 px-6 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(24,24,27,0.18)] transition hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                Open Command Center <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </Link>
              <Link
                href="/workflows"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white/75 px-6 py-4 text-base font-semibold text-zinc-950 shadow-sm backdrop-blur transition hover:bg-white"
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
                <div key={label} className="rounded-2xl border border-zinc-200 bg-white/78 p-4 shadow-sm backdrop-blur">
                  <p className="text-2xl font-semibold tracking-tight text-zinc-950">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-white/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/86 shadow-[0_28px_90px_rgba(24,24,27,0.10)] backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-zinc-950">Sponsor Outreach Campaign</p>
                  <p className="mt-1 text-xs text-zinc-500">Outcome delegated to specialist agents</p>
                </div>
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">Live run</span>
              </div>

              <div className="space-y-4 p-5">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Founder command</p>
                  <p className="mt-2 text-lg font-medium text-zinc-950">Prepare a sponsor outreach campaign for Kova Labs.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {agents.map((agent) => (
                    <div key={agent.name} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                      <div className={`mb-3 grid h-10 w-10 place-items-center rounded-2xl text-sm font-semibold ${agent.tone}`}>{agent.name[0]}</div>
                      <p className="font-medium text-zinc-950">{agent.name}</p>
                      <p className="mt-1 text-xs text-zinc-500">{agent.role}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-zinc-950">Execution trace</p>
                    <span className="inline-flex items-center gap-1 text-xs text-zinc-500"><Clock3 size={13} /> 4m 18s</span>
                  </div>
                  <div className="space-y-3">
                    {workflowSteps.map((step, index) => (
                      <div key={step} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-zinc-950 text-xs font-semibold text-white">{index + 1}</span>
                        <div className="min-w-0 flex-1 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-[#fbfaf7] p-4">
                  <div className="flex items-center gap-3">
                    <LockKeyhole className="text-zinc-700" size={18} />
                    <div>
                      <p className="text-sm font-medium text-zinc-950">Approval required</p>
                      <p className="mt-1 text-xs text-zinc-500">Echo wants to send 12 sponsor emails. Waiting for founder approval.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 py-6">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.24em] text-zinc-500">Built for ambitious founder-led teams</p>
          <div className="grid grid-cols-2 gap-3 text-center text-sm font-medium text-zinc-500 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <div key={logo} className="rounded-2xl border border-zinc-200 bg-white/60 px-4 py-3 shadow-sm">{logo}</div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="group rounded-[1.75rem] border border-zinc-200 bg-white/78 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_70px_rgba(24,24,27,0.08)]">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-zinc-100 text-zinc-700 ring-1 ring-zinc-200">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-950">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{feature.copy}</p>
              </div>
            );
          })}
        </section>

        <section className="mb-16 overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_24px_80px_rgba(24,24,27,0.16)] md:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-medium text-zinc-300">Ready to replace prompt chaos with operating rhythm?</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Launch the CoAgent Command Center demo.</h2>
            </div>
            <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-zinc-950 transition hover:bg-zinc-200">
              Enter demo <ChevronRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
