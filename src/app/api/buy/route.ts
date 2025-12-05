import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const order = {
      timestamp: new Date().toISOString(),
      name: data.name,
      contact: data.contact,
      product: data.product,
      price: data.price,
      quantity: data.quantity,
    };

    // Log to console (visible in Vercel logs)
    console.log("New order received:", order);

    // Send email notification
    await sendEmailNotification(order);

    return NextResponse.json({ 
      success: true, 
      message: "Order placed successfully! We will contact you soon." 
    });
  } catch (error) {
    console.error("Error processing order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process order" },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(order: {
  timestamp: string;
  name: string;
  contact: string;
  product: string;
  price: string;
  quantity: string;
}) {
  // Create transporter using Gmail SMTP
  // For this to work, you need to set up environment variables in Vercel:
  // EMAIL_USER: your Gmail address (e.g., ganeshaagrohub@gmail.com)
  // EMAIL_PASS: your Gmail App Password (not regular password)
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "ganeshaagrohub@gmail.com",
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  });

  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #166534, #064e3b); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">🛒 New Order Received!</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">Ganesha Agro Hub</p>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb;">
        <h2 style="color: #166534; margin-top: 0;">Order Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Product:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #166534; font-weight: bold;">${order.product}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Quantity:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${order.quantity} kg</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Price per kg:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${order.price}</td>
          </tr>
        </table>
        
        <h2 style="color: #166534; margin-top: 20px;">Customer Information</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${order.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Contact:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${order.contact}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Order Time:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${new Date(order.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
          </tr>
        </table>
      </div>
      
      <div style="background: #166534; color: white; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
        <p style="margin: 0; font-size: 14px;">Please contact the customer to confirm the order.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Ganesha Agro Hub" <${process.env.EMAIL_USER || "ganeshaagrohub@gmail.com"}>`,
    to: "ganeshaagrohub@gmail.com",
    subject: `🛒 New Order: ${order.product} (${order.quantity} kg) - ${order.name}`,
    html: emailContent,
  };

  // Only send email if EMAIL_PASS is configured
  if (process.env.EMAIL_PASS) {
    await transporter.sendMail(mailOptions);
    console.log("Email notification sent successfully");
  } else {
    console.log("Email not sent - EMAIL_PASS not configured. Order details:", order);
  }
}
