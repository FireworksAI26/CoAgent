import { db } from "@/lib/db";import { NextResponse } from "next/server";
export async function POST(req:Request,{params}:{params:{id:string}}){const f=await req.formData();await db.agent.update({where:{id:params.id},data:{description:String(f.get('description')),communicationStyle:String(f.get('communicationStyle'))}});return NextResponse.redirect(new URL(`/agents/${params.id}`,req.url));}
