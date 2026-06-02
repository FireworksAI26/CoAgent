// @ts-nocheck
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
export default async function({params}:{params:{id:string}}){const run=await db.run.findUnique({where:{id:params.id},include:{logs:true,approvals:true,workflow:true}});if(!run) return <div>Not found</div>;return <div className="space-y-4"><h1 className="text-3xl">{run.title}</h1><div className="surface p-4"><p>Input: {run.input}</p><p>Output: {run.output}</p></div><div className="surface p-4">{run.logs.map(l=><p key={l.id} className="text-sm">{l.message}</p>)}</div></div>}
