import EmailTemplate from "../../UI/Components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: [`${process.env.DELIVER_TO}`],
      subject: `Message From ${email} 📧`,
      react: <EmailTemplate message={message} email={email} />,
    });

    if (error) {
      console.log(error);
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
