import dbConnect, { collectionName } from "@/lib/dbConnect"
import { NextResponse } from "next/server"


export const GET = async (req) => {

    const data = dbConnect(collectionName.orders)
    const result = await data.find().toArray()

    return NextResponse.json(result)
}