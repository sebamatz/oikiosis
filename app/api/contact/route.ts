import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, wantsResponse, noResponseNeeded } =
      body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Determine the single contact preference
    let contactPreference = "Δεν διευκρινίστηκε"; // "Not specified" (if they checked neither)
    if (wantsResponse) {
      contactPreference = "Ναι, επιθυμεί επικοινωνία";
    } else if (noResponseNeeded) {
      contactPreference = "Όχι, δεν ζητά απάντηση";
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Sends to yourself
      replyTo: email, // Allows you to hit "Reply" and email the user back
      subject: `Νέα επικοινωνία: ${subject}`,
      text: `
        Όνομα: ${name || "Not provided"}
        Email: ${email}
        Θέμα: ${subject}
        
        Προτίμηση Επικοινωνίας: ${contactPreference}
        
        Μήνυμα:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
