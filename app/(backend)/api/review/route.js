import { PhoneReview } from "@/(backend)/model";
import MongoConnection from "@/(backend)/mongoConnection";
import { NextResponse } from "next/server";

MongoConnection();

export async function GET(req) {
  const data = await PhoneReview.find();
  console.log(data);
  try {
    return NextResponse.json({ result: data, success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ result: err, success: false }, { status: 404 });
  }
}

export async function POST(req) {
  const request = await req.json();
  console.log(request);
  try {
    await PhoneReview.create(request);
    return NextResponse.json(
      { result: "Review Added Successfully", success: true },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ result: err, success: false }, { status: 404 });
  }
}
