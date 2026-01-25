import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { company, email, volume, leadTime, specs } = body;

    const data = await resend.emails.send({
      from: 'Kanabags Web <info@kanabagsllc.com>', // Update to info@kanabagsllc.com once verified
      to: ['abiyu.tegegn@gmail.com'], // Where you want to receive the leads
      subject: `🚨 NEW ENTERPRISE RFP: ${company}`,
      html: `
        <h2>New Procurement Inquiry from Kanabags Website</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Corporate Email:</strong> ${email}</p>
        <p><strong>Monthly Volume:</strong> ${volume}</p>
        <p><strong>Lead Time:</strong> ${leadTime}</p>
        <p><strong>Specifications:</strong> ${specs}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}