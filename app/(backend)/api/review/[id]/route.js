import { PhoneReview } from "@/(backend)/model";
import MongoConnection from "@/(backend)/mongoConnection";
import { NextResponse } from "next/server";

MongoConnection();

export async function GET(req, content) {
  console.log(content);
  const data = await PhoneReview.findById(content.params.id);
  try {
    return NextResponse.json({ result: data, success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ result: err, success: false }, { status: 404 });
  }
}

export async function PUT(req, content) {
  const request = await req.json();
  console.log(request);
  const _id = content.params.id;
  try {
    await PhoneReview.findByIdAndUpdate(_id, { ...request });
    return NextResponse.json(
      { result: "Review Updated Successfully", success: true },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ result: err, success: false }, { status: 404 });
  }
}

export async function DELETE(req, content) {
  console.log(content);
  const data = await PhoneReview.findByIdAndDelete(content.params.id);
  try {
    return NextResponse.json(
      { result: "Review Deleted Successfully", success: true },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ result: err, success: false }, { status: 404 });
  }
}
