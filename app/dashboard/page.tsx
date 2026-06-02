// @ts-nocheck
export const dynamic = "force-dynamic";
import { getWorkspace } from "@/lib/mock-ai";
import { ArrowRight, Bot, CheckCircle2, Clock3, FileText, ShieldAlert, Sparkles, Zap } from "lucide-react";

const suggested = [
  "Prepare a sponsor outreach campaign",
  "Research competitors",
  "Draft a landing page",
  "Review GitHub issues",
  "Summarize weekly progress",
];

const activity = [
  ["Atlas", "mapped sponsor categories", "2m ago"],
  ["Ledger", "modeled package tiers", "6m ago"],
  ["Echo", "drafted outreach sequence", "11m ago"],
  ["Nova", "queued final campaign artifact", "18m ago"],
];

export default async function Page() {
  const ws = await getWorkspace();
  if (!ws) return <div>Seed data missing.</div>;
  const activeRuns = ws.runs.slice(0, 3);
  const pendingApprovals = ws.approvals.filter((a) => a.status === "pending");
  const activeAgents = ws.agents.filter((agent) => agent.status === "active");

  const metrics = [
    ["Active agents", activeAgents.length, "+2 this week", "from-cyan-300 to-sky-400"],
    ["Workflows ready", ws.workflows.length, "3 triggered today", "from-violet-300 to-indigo-400"],
    ["Completed runs", ws.runs.filter((r) => r.status === "success").length, "92% success rate", "from-emerald-300 to-teal-400"],
    ["Pending approvals", pendingApprovals.length, "2 high-risk", "from-amber-300 to-orange-400"],
  ];

  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080d1c]/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl md:p-8">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,.18),transparent_34%),radial-gradient(circle_at_45%_72%,rgba(99,102,241,.18),transparent_32%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              <Sparkles size={14} /> Command Center
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Run your startup with an AI operating team.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">Give CoAgent an outcome. Your agents plan the work, delegate tasks, create artifacts, and pause for approval before anything risky.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Today&apos;s operating rhythm</p>
            <div className="mt-4 space-y-3">
              {[["Research", 86], ["Drafting", 64], ["Approvals", 38]].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-400"><span>{label}</span><span>{value}%</span></div>
                  <div className="h-2 rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" style={{ width: `${value}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-[#080d1c]/78 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white"><Zap size={18} /></div>
          <input className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-slate-500" placeholder="What outcome do you want your AI team to complete?" />
          <button className="hidden rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 md:inline-flex">Delegate outcome</button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{suggested.map((s) => <button key={s} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100">{s}</button>)}</div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {metrics.map(([label, value, helper, gradient]) => (
          <div key={label} className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/20">
            <div className={`mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r ${gradient}`} />
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white">{value}</p>
            <p className="mt-2 text-sm text-slate-400">{helper}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#080d1c]/78 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-white">Active execution runs</p>
              <p className="text-sm text-slate-500">Live work moving through your AI team</p>
            </div>
            <ArrowRight className="text-slate-500" size={18} />
          </div>
          <div className="space-y-3">
            {activeRuns.map((run, index) => (
              <div key={run.id} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-white">{run.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{run.output || "Generating run output..."}</p>
                  </div>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">{run.status}</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" style={{ width: `${82 - index * 18}%` }} /></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-white/10 bg-[#080d1c]/78 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between"><p className="text-lg font-semibold text-white">Approval queue</p><ShieldAlert size={18} className="text-amber-200" /></div>
            <div className="space-y-3">
              {pendingApprovals.slice(0, 3).map((approval) => (
                <div key={approval.id} className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.07] p-4">
                  <p className="text-sm font-medium text-amber-100">{approval.action}</p>
                  <p className="mt-1 text-xs leading-5 text-amber-100/65">{approval.reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#080d1c]/78 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between"><p className="text-lg font-semibold text-white">Artifact preview</p><FileText size={18} className="text-cyan-200" /></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-sm font-medium text-white">Sponsor Campaign Plan</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                {['Sponsor categories', 'Pricing tiers', 'Initial outreach', 'Follow-up sequence'].map((item) => <li key={item} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-300" />{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#080d1c]/78 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <p className="text-lg font-semibold text-white">AI employee roster</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {activeAgents.slice(0, 4).map((agent) => (
              <div key={agent.id} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-400 to-cyan-300 text-sm font-bold text-white">{agent.avatar}</div>
                <p className="text-sm font-medium text-white">{agent.name}</p>
                <p className="mt-1 text-xs text-slate-500">{agent.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#080d1c]/78 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <div className="mb-4 flex items-center justify-between"><p className="text-lg font-semibold text-white">Recent activity</p><Clock3 size={18} className="text-slate-500" /></div>
          <div className="space-y-3">
            {activity.map(([agent, message, time]) => (
              <div key={`${agent}-${message}`} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200"><Bot size={15} /></div>
                <div className="min-w-0 flex-1"><p className="text-sm text-slate-300"><span className="font-medium text-white">{agent}</span> {message}</p><p className="mt-1 text-xs text-slate-500">{time}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
