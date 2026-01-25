import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Check for API key at the start of the request
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    
    // Destructure all fields including the new requestSample
    const { company, email, volume, leadTime, specs, requestSample } = body;

    const data = await resend.emails.send({
      from: 'Kanabags Web <info@kanabagsllc.com>', 
      to: ['kanabags001@gmail.com', 'abiyu.tegegn@gmail.com'], 
      subject: `${requestSample === "YES - Free Sample Kit Requested" ? '📦 SAMPLE REQ: ' : '🚨 RFP: '}${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #2e7d32; padding: 20px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Enterprise Inquiry</h1>
            </div>
            
            <div style="padding: 30px; line-height: 1.6; color: #333;">
                ${requestSample === "YES - Free Sample Kit Requested" ? 
                  `<div style="background-color: #fff9c4; border: 2px dashed #fbc02d; padding: 15px; margin-bottom: 25px; text-align: center; border-radius: 8px;">
                     <h3 style="margin: 0; color: #f57f17;">📦 Action Required: Free Sample Requested</h3>
                   </div>` : ''
                }

                <p style="font-size: 16px;">You have received a new inquiry from the <strong>Kanabags Website</strong>.</p>
                
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Contact Name:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${leadTime}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Target Volume:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${volume}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Sample Requested:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${requestSample === "YES - Free Sample Kit Requested" ? '#d32f2f' : '#333'}; font-weight: bold;">
                            ${requestSample}
                        </td>
                    </tr>
                </table>

                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
                    <h4 style="margin-top: 0; color: #2e7d32;">Specifications & Shipping Details:</h4>
                    <p style="white-space: pre-wrap; margin-bottom: 0;">${specs}</p>
                </div>
            </div>
            
            <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #777;">
                Sent from the Kanabags LLC Enterprise Portal
            </div>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';