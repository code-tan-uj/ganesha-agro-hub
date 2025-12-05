import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const inquiry = {
      timestamp: new Date().toISOString(),
      name: data.name,
      contact: data.contact,
      interest: data.interest,
      message: data.message,
    };

    // Log to console (visible in Vercel logs)
    console.log("New contact inquiry:", inquiry);

    // Send email notification
    await sendEmailNotification(inquiry);

    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully!" 
    });
  } catch (error) {
    console.error("Error processing contact:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(inquiry: {
  timestamp: string;
  name: string;
  contact: string;
  interest: string;
  message: string;
}) {
  const interestLabels: { [key: string]: string } = {
    "toor-dal": "Premium Toor Dal",
    "turmeric": "Aromatic Turmeric",
    "chana": "Kabuli Chana",
    "bulk-order": "Bulk Order Inquiry",
    "partnership": "Partnership / Retail",
    "other": "Other",
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "ganeshaagrohub@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #166534, #064e3b); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">📬 New Contact Inquiry</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">Ganesha Agro Hub</p>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb;">
        <h2 style="color: #166534; margin-top: 0;">Customer Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${inquiry.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Contact:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${inquiry.contact}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Interest:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #166534; font-weight: bold;">${interestLabels[inquiry.interest] || inquiry.interest}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Time:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${new Date(inquiry.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
          </tr>
        </table>
        
        <h2 style="color: #166534; margin-top: 20px;">Message</h2>
        <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="margin: 0; white-space: pre-wrap;">${inquiry.message}</p>
        </div>
      </div>
      
      <div style="background: #166534; color: white; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
        <p style="margin: 0; font-size: 14px;">Please respond to this inquiry promptly.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Ganesha Agro Hub" <${process.env.EMAIL_USER || "ganeshaagrohub@gmail.com"}>`,
    to: "ganeshaagrohub@gmail.com",
    subject: `📬 New Inquiry: ${interestLabels[inquiry.interest] || inquiry.interest} - ${inquiry.name}`,
    html: emailContent,
  };

  if (process.env.EMAIL_PASS) {
    await transporter.sendMail(mailOptions);
    console.log("Email notification sent successfully");
  } else {
    console.log("Email not sent - EMAIL_PASS not configured. Inquiry details:", inquiry);
  }
}
