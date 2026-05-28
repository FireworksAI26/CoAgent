// @ts-nocheck
export const dynamic = "force-dynamic";
import Link from "next/link";import { db } from "@/lib/db";
export default async function(){const runs=await db.run.findMany({include:{workflow:true},orderBy:{createdAt:'desc'}});return <div><h1 className="text-3xl mb-4">Runs</h1><div className="space-y-3">{runs.map(r=><div key={r.id} className="surface p-4 flex justify-between"><div><p>{r.title}</p><p className="text-sm text-slate-400">{r.status} · {r.riskLevel}</p></div><Link href={`/runs/${r.id}`} className="text-accent">View details</Link></div>)}</div></div>}
