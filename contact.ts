import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // 1. Email interno para el equipo
    const internalEmail = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "VextorData <contact@vextordata.com>",
        to: ["team@vextordata.com"],
        reply_to: email,
        subject: `New contact from ${name}`,
        html: `
          <h2>New contact from VextorData</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!internalEmail.ok) {
      throw new Error("Failed to send internal email");
    }

    // 2. Email automático para el usuario
    const autoReply = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "VextorData <contact@vextordata.com>",
        to: [email],
        subject: "Thank you for contacting VextorData",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
            
            <h2 style="color: #2563eb;">
              Thank you for contacting VextorData
            </h2>

            <p>Hi ${name},</p>

            <p>
              We have received your message and appreciate you reaching out to us.
            </p>

            <p>
              Our team will review your request and get back to you as soon as possible.
            </p>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />

            <h2 style="color: #2563eb;">
              Gracias por contactar con VextorData
            </h2>

            <p>Hola ${name},</p>

            <p>
              Hemos recibido tu mensaje y agradecemos que te hayas puesto en contacto con nosotros.
            </p>

            <p>
              Nuestro equipo revisará tu solicitud y te responderá lo antes posible.
            </p>

            <br />

            <p>
              Un saludo,<br />
              <strong>Equipo VextorData</strong>
            </p>

            <p style="color: #64748b; font-size: 14px;">
              contact@vextordata.com<br />
              vextordata.com
            </p>

          </div>
        `,
      }),
    });

    if (!autoReply.ok) {
      console.error("Auto-reply failed");
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Contact error:", error);

    return res.status(500).json({
      error: "Failed to process contact form",
    });
  }
}