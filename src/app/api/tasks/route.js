import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma";

export async function GET() {

    const tasks = await prisma.task.findMany()
    
    return NextResponse.json(tasks);
     
}

export async function POST(request) {
    const {title, description, completed} = await request.json();
    const newTask = await prisma.task.create({
        data: {
            title,
            description,
            completed: false,

        },
    });
    return NextResponse.json(newTask);
     
}