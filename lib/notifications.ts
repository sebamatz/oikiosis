import nodemailer from "nodemailer";

export async function sendEmailNotification(
  sessionId: string,
  messageContent: string,
  userName: string = "Anonymous",
) {
  const adminEmail = process.env.SMTP_USER; // Sending to yourself

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Oikiosis SOS" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `🚨 SOS: New Message from ${userName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #d32f2f; padding: 20px; text-align: center;">
            <h2 style="color: white; margin: 0;">🚨 New S.O.S. Message</h2>
          </div>
          
          <div style="padding: 20px;">
            <p style="font-size: 16px; color: #333;"><strong>User:</strong> ${userName}</p>
            <p style="font-size: 14px; color: #666;"><strong>Session ID:</strong> ${sessionId}</p>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #d32f2f;">
              <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #333;">
                ${messageContent.replace(/\n/g, "<br>")}
              </p>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            
            <div style="text-align: center;">
              <a href="http://localhost:3000/admin" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                Go to Admin Dashboard
              </a>
              <p style="font-size: 12px; color: #999; margin-top: 15px;">
                (Link works locally. Change to your real domain when live)
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("✅ Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("❌ Email failed to send:", error);
    return false;
  }
}
