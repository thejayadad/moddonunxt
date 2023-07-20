import Note from "@/model/Note";
const mongoose = require("mongoose")
import connect from "@/lib/db";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    const body = await request.json();
  
    const newNote = new Note(body);
  
    try {
      await connect();
  
      await newNote.save();
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };

