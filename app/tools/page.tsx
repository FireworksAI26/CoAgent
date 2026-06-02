// @ts-nocheck
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
export default async function(){const tools=await db.tool.findMany();return <div><h1 className="text-3xl mb-4">Tools</h1><div className="grid md:grid-cols-2 gap-4">{tools.map(t=><form key={t.id} action={`/api/tools/${t.id}`} method="post" className="surface p-4"><p>{t.name}</p><p className="text-sm text-slate-400">{t.description}</p><p>{t.status}</p><button className="mt-2 bg-accent rounded p-2">Enable/Disable</button></form>)}</div></div>}
