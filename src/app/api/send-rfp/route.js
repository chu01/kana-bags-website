import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { company, email, volume, leadTime, specs } = body;

    const data = await resend.emails.send({
      from: 'Kanabags Web <info@kanabagsllc.com>', // Update to info@kanabagsllc.com once verified
      to: ['kanabags001@gmail.com', 'abiyu.tegegn@gmail.com'], // Where you want to receive the leads
      subject: `🚨 NEW ENTERPRISE RFP: ${company}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
            <h2 style="color: #2e7d32;">New Website Inquiry</h2>
            <p><strong>From:</strong> ${leadTime} (${email})</p> 
            <p><strong>Subject/Company:</strong> ${company}</p>
            <p><strong>Type:</strong> ${volume}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${specs}</p>
        </div>
        `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}