import Note from "@/model/Note";
const mongoose = require("mongoose")
import connect from "@/lib/db";
import { NextResponse } from "next/server";


export const GET = async (request) => {
    await connect();
  
    try {
     const notes = await Note.find({})
  
      return new NextResponse(JSON.stringify(notes), { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };

