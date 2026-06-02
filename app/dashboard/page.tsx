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
    ["Active agents", activeAgents.length, "+2 this week"],
    ["Workflows ready", ws.workflows.length, "3 triggered today"],
    ["Completed runs", ws.runs.filter((r) => r.status === "success").length, "92% success rate"],
    ["Pending approvals", pendingApprovals.length, "2 high-risk"],
  ];

  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/86 p-6 shadow-[0_24px_80px_rgba(24,24,27,0.08)] backdrop-blur-2xl md:p-8">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_20%,rgba(24,24,27,.05),transparent_34%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              <Sparkles size={14} /> Command Center
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-zinc-950 md:text-6xl">Run your startup with an AI operating team.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">Give CoAgent an outcome. Your agents plan the work, delegate tasks, create artifacts, and pause for approval before anything risky.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Today&apos;s operating rhythm</p>
            <div className="mt-4 space-y-3">
              {[["Research", 86], ["Drafting", 64], ["Approvals", 38]].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-xs text-zinc-500"><span>{label}</span><span>{value}%</span></div>
                  <div className="h-2 rounded-full bg-zinc-200"><div className="h-full rounded-full bg-zinc-950" style={{ width: `${value}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-zinc-200 bg-white/86 p-5 shadow-[0_20px_70px_rgba(24,24,27,0.06)] backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-zinc-950 text-white"><Zap size={18} /></div>
          <input className="min-w-0 flex-1 bg-transparent text-lg text-zinc-950 outline-none placeholder:text-zinc-400" placeholder="What outcome do you want your AI team to complete?" />
          <button className="hidden rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white md:inline-flex">Delegate outcome</button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{suggested.map((s) => <button key={s} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-600 transition hover:bg-white hover:text-zinc-950 hover:shadow-sm">{s}</button>)}</div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {metrics.map(([label, value, helper]) => (
          <div key={label} className="group rounded-[1.5rem] border border-zinc-200 bg-white/86 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(24,24,27,0.08)]">
            <div className="mb-5 h-1.5 w-16 rounded-full bg-zinc-950" />
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950">{value}</p>
            <p className="mt-2 text-sm text-zinc-500">{helper}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-zinc-200 bg-white/86 p-5 shadow-[0_20px_70px_rgba(24,24,27,0.06)] backdrop-blur-2xl">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-zinc-950">Active execution runs</p>
              <p className="text-sm text-zinc-500">Live work moving through your AI team</p>
            </div>
            <ArrowRight className="text-zinc-400" size={18} />
          </div>
          <div className="space-y-3">
            {activeRuns.map((run, index) => (
              <div key={run.id} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-zinc-950">{run.title}</p>
                    <p className="mt-1 text-sm text-zinc-500">{run.output || "Generating run output..."}</p>
                  </div>
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">{run.status}</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-zinc-200"><div className="h-full rounded-full bg-zinc-950" style={{ width: `${82 - index * 18}%` }} /></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-zinc-200 bg-white/86 p-5 shadow-[0_20px_70px_rgba(24,24,27,0.06)] backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between"><p className="text-lg font-semibold text-zinc-950">Approval queue</p><ShieldAlert size={18} className="text-zinc-600" /></div>
            <div className="space-y-3">
              {pendingApprovals.slice(0, 3).map((approval) => (
                <div key={approval.id} className="rounded-2xl border border-zinc-200 bg-[#fbfaf7] p-4">
                  <p className="text-sm font-medium text-zinc-950">{approval.action}</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">{approval.reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white/86 p-5 shadow-[0_20px_70px_rgba(24,24,27,0.06)] backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between"><p className="text-lg font-semibold text-zinc-950">Artifact preview</p><FileText size={18} className="text-zinc-500" /></div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-medium text-zinc-950">Sponsor Campaign Plan</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-500">
                {['Sponsor categories', 'Pricing tiers', 'Initial outreach', 'Follow-up sequence'].map((item) => <li key={item} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-zinc-700" />{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-zinc-200 bg-white/86 p-5 shadow-[0_20px_70px_rgba(24,24,27,0.06)] backdrop-blur-2xl">
          <p className="text-lg font-semibold text-zinc-950">AI employee roster</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {activeAgents.slice(0, 4).map((agent) => (
              <div key={agent.id} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-zinc-950 text-sm font-bold text-white">{agent.avatar}</div>
                <p className="text-sm font-medium text-zinc-950">{agent.name}</p>
                <p className="mt-1 text-xs text-zinc-500">{agent.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white/86 p-5 shadow-[0_20px_70px_rgba(24,24,27,0.06)] backdrop-blur-2xl">
          <div className="mb-4 flex items-center justify-between"><p className="text-lg font-semibold text-zinc-950">Recent activity</p><Clock3 size={18} className="text-zinc-500" /></div>
          <div className="space-y-3">
            {activity.map(([agent, message, time]) => (
              <div key={`${agent}-${message}`} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-zinc-600"><Bot size={15} /></div>
                <div className="min-w-0 flex-1"><p className="text-sm text-zinc-600"><span className="font-medium text-zinc-950">{agent}</span> {message}</p><p className="mt-1 text-xs text-zinc-500">{time}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
