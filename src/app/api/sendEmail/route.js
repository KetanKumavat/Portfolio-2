import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  try {
    const { name, email, message } = await req.json();
    let transporter = await nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_USER,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });
    console.log(name, email, message);
    let info = await transporter.sendMail({
      from: {
        name: name,
        address: email,
      },
      to: process.env.NEXT_PUBLIC_USER2,
      subject: "!!Message from Portfolio!!",
      text: message,
      html: `<html>
              <body>
                <h3>Sender Name: ${name}</h3>
                <h3>Sender Email: ${email}</h3>
                </br>
                <p>${message}</p>
              </body>
            </html>`,
    });
    return NextResponse.json({
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error sending email" });
  }
}
