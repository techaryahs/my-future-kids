import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1️⃣ Database मध्ये save कर
    const { error: dbError } = await supabase.from("program_enquiries").insert({
      parent_name: data.parentName,
      student_name: data.studentName,
      email: data.email,
      phone: data.phone,
      student_age: data.studentAge,
      city: data.city,
      interested_in: data.interestedIn,
      experience_level: data.experienceLevel,
      preferred_learning: data.preferredLearning,
      message: data.message,
    });

    if (dbError) {
      console.error("Database insert error:", dbError);
    }

    // 2️⃣ Email पाठवण्यासाठी transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Company la notification mail
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

    // User la confirmation mail
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