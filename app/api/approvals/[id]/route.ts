import { db } from "@/lib/db";import { NextResponse } from "next/server";
export async function POST(req:Request,{params}:{params:{id:string}}){const f=await req.formData();await db.approval.update({where:{id:params.id},data:{status:String(f.get('status'))}});return NextResponse.redirect(new URL('/approvals',req.url));}
