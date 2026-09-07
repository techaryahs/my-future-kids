import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Company la notification mail
    await transporter.sendMail({
      from: `"BeFutureKids Website" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `New Program Enquiry: ${data.interestedIn || "General"}`,
      html: `
        <h2>New Program Booking</h2>
        <p><strong>Parent Name:</strong> ${data.parentName}</p>
        <p><strong>Student Name:</strong> ${data.studentName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Student Age:</strong> ${data.studentAge}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Interested In:</strong> ${data.interestedIn}</p>
        <p><strong>Experience Level:</strong> ${data.experienceLevel}</p>
        <p><strong>Preferred Learning:</strong> ${data.preferredLearning}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    // 2️⃣ User la confirmation mail (jo book karel tyala)
    await transporter.sendMail({
      from: `"BeFutureKids" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: `We received your enquiry - BeFutureKids`,
      html: `
        <h2>Thank you, ${data.parentName}!</h2>
        <p>We've received your enquiry for <strong>${data.interestedIn}</strong>.</p>
        <p>Our team will contact you shortly on ${data.phone} or this email.</p>
        <br/>
        <p>— Team BeFutureKids</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}