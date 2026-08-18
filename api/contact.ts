import type { VercelRequest, VercelResponse } from "@vercel/node";

const allowedOrigins = [
  "https://vextordata.com",
  "https://www.vextordata.com",
];

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const origin = req.headers.origin;

  // CORS
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  // Preflight request
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // Only POST is allowed
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

    // Validate fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return res.status(500).json({
        error: "Email service is not configured",
      });
    }

    // =====================================================
    // 1. INTERNAL EMAIL
    // =====================================================

    const internalEmail = await fetch(
      "https://api.resend.com/emails",
      {
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
            <div style="
              font-family: Arial, sans-serif;
              max-width: 650px;
              margin: 0 auto;
              color: #1e293b;
            ">

              <h2 style="color: #2563eb;">
                New contact from VextorData
              </h2>

              <p>
                <strong>Name:</strong> ${name}
              </p>

              <p>
                <strong>Email:</strong> ${email}
              </p>

              <p>
                <strong>Message:</strong>
              </p>

              <div style="
                background: #f8fafc;
                border-left: 4px solid #06b6d4;
                padding: 15px;
                margin-top: 10px;
              ">
                ${message}
              </div>

              <hr style="
                border: none;
                border-top: 1px solid #e2e8f0;
                margin: 30px 0;
              " />

              <p style="
                color: #64748b;
                font-size: 13px;
              ">
                Sent from vextordata.com
              </p>

            </div>
          `,
        }),
      }
    );

    // Get Resend error if sending failed
    if (!internalEmail.ok) {
      const errorData = await internalEmail
        .json()
        .catch(() => null);

      console.error(
        "Internal email failed:",
        errorData
      );

      return res.status(500).json({
        error:
          errorData?.message ||
          "Failed to send internal email",
      });
    }

    // =====================================================
    // 2. AUTOMATIC REPLY TO USER
    // =====================================================

    const autoReply = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "VextorData <contact@vextordata.com>",
          to: [email],
          subject:
            "Thank you for contacting VextorData",
          html: `
            <div style="
              font-family: Arial, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              padding: 30px;
              color: #1e293b;
            ">

              <h2 style="
                color: #2563eb;
                margin-bottom: 25px;
              ">
                Thank you for contacting VextorData
              </h2>

              <p>
                Hi ${name},
              </p>

              <p>
                We have received your message and
                appreciate you reaching out to us.
              </p>

              <p>
                Our team will review your request
                and get back to you as soon as possible.
              </p>

              <hr style="
                border: none;
                border-top: 1px solid #e2e8f0;
                margin: 30px 0;
              " />

              <h2 style="
                color: #2563eb;
                margin-bottom: 25px;
              ">
                Gracias por contactar con VextorData
              </h2>

              <p>
                Hola ${name},
              </p>

              <p>
                Hemos recibido tu mensaje y agradecemos
                que te hayas puesto en contacto con nosotros.
              </p>

              <p>
                Nuestro equipo revisará tu solicitud
                y te responderá lo antes posible.
              </p>

              <p style="margin-top: 30px;">
                Un saludo,<br />
                <strong>Equipo VextorData</strong>
              </p>

              <p style="
                color: #64748b;
                font-size: 14px;
                margin-top: 25px;
              ">
                contact@vextordata.com<br />
                vextordata.com
              </p>

            </div>
          `,
        }),
      }
    );

    // Auto-reply failing should not fail
    // the whole contact request
    if (!autoReply.ok) {
      const errorData = await autoReply
        .json()
        .catch(() => null);

      console.error(
        "Auto-reply failed:",
        errorData
      );
    }

    // =====================================================
    // SUCCESS
    // =====================================================

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error(
      "Contact error:",
      error
    );

    return res.status(500).json({
      error: "Failed to process contact form",
    });
  }
}