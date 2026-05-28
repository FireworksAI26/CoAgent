import { db } from "@/lib/db";import { NextResponse } from "next/server";
export async function POST(req:Request,{params}:{params:{id:string}}){const t=await db.tool.findUnique({where:{id:params.id}});if(t) await db.tool.update({where:{id:t.id},data:{status:t.status==='enabled'?'disabled':'enabled'}});return NextResponse.redirect(new URL('/tools',req.url));}
