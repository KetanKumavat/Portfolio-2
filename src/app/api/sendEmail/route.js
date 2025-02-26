import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: `${name} <portfolio@ketankumavat.me>`,
            to: [process.env.NEXT_PUBLIC_USER2],
            subject: `New message from ${name} via portfolio`,
            // text: message,
            html: `<html>
              <body>
                <p>Sender Name: ${name}</p>
                <p>Sender Email: ${email}</p>
                <br/>
                <p>${message}</p>
              </body>
            </html>`,
        });

        if (error) {
            throw new Error(error.message);
        }

        console.log("Message sent with Resend:", data.id);

        return NextResponse.json({
            success: true,
            message: "Email sent successfully!",
            messageId: data.id,
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email", details: error.message },
            { status: 500 }
        );
    }
}
