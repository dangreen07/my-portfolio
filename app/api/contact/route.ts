import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, projectDescription, budget, timeline } =
      await request.json();

    // Validate required fields
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Create transporter for Spacemail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.spacemail.app",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to Daniel
    const adminEmailContent = `
New contact form submission:

Name: ${name}
Email: ${email}
Company: ${company || "Not specified"}
Budget: ${budget || "Not specified"}
Timeline: ${timeline || "Not specified"}

Project Description:
${projectDescription}

---
Reply directly to: ${email}
        `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New project inquiry from ${name}`,
      text: adminEmailContent,
      replyTo: email,
    });

    // Send confirmation email to user
    const userEmailContent = `
Hi ${name.split(" ")[0]},

Thanks for reaching out! I received your project inquiry and will get back to you within 24 hours.

Here's what you sent:
Budget: ${budget || "Not specified"}
Timeline: ${timeline || "Not specified"}

I'll review your project details and send you a response soon.

Best regards,
Daniel Green
        `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Project inquiry received — Daniel Green",
      text: userEmailContent,
    });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 },
    );
  }
}
