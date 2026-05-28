// @ts-nocheck
export const dynamic = "force-dynamic";
import { getWorkspace } from "@/lib/mock-ai";

const suggested = [
  "Prepare a sponsor outreach campaign",
  "Research competitors",
  "Draft a landing page",
  "Review GitHub issues",
  "Summarize weekly progress",
];

export default async function Page() {
  const ws = await getWorkspace();
  if (!ws) return <div>Seed data missing.</div>;
  const activeRuns = ws.runs.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="muted-label">Command Center</p>
          <h1 className="text-3xl font-semibold tracking-tight mt-1">Your AI team, ready to work.</h1>
        </div>
        <div className="text-xs text-slate-400">Last sync: just now</div>
      </div>

      <div className="surface p-5">
        <p className="text-sm text-slate-300">What outcome do you want your AI team to complete?</p>
        <input className="mt-3 w-full bg-muted/70 rounded-xl p-3.5 border border-border/70" placeholder="Prepare a sponsor outreach campaign for Kova Labs"/>
        <div className="mt-3 flex flex-wrap gap-2">{suggested.map((s) => <button key={s} className="text-xs bg-white/5 border border-border/60 rounded-lg px-2.5 py-1.5 hover:bg-white/10">{s}</button>)}</div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {[ ["Active agents", ws.agents.length, "+2 this week"], ["Running workflows", ws.workflows.length, "3 triggered today"], ["Completed runs", ws.runs.filter((r) => r.status === "success").length, "92% success rate"], ["Pending approvals", ws.approvals.filter((a) => a.status === "pending").length, "2 high-risk"], ].map((m) => (
          <div key={m[0]} className="kpi"><p className="muted-label">{m[0]}</p><p className="text-3xl font-semibold mt-2">{m[1]}</p><p className="text-xs text-slate-400 mt-2">{m[2]}</p></div>
        ))}
      </div>

      <div className="grid xl:grid-cols-3 gap-4">
        <div className="surface p-4 xl:col-span-2"><h2 className="font-medium">Active runs</h2>{activeRuns.map((r) => <div key={r.id} className="mt-3 p-3 rounded-xl bg-white/[0.03] border border-border/60 flex justify-between"><p className="text-sm">{r.title}</p><span className="text-xs px-2 py-1 rounded-full bg-cyan-500/15 text-cyan-300">{r.status}</span></div>)}</div>
        <div className="surface p-4"><h2 className="font-medium">Approval queue</h2>{ws.approvals.filter((a) => a.status === "pending").map((a) => <div key={a.id} className="mt-3 p-3 rounded-xl bg-white/[0.03] border border-border/60"><p className="text-sm">{a.action}</p><p className="text-xs text-slate-400 mt-1">Human approval required</p></div>)}</div>
      </div>
    </div>
  );
}
