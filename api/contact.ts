import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // ============================================================
  // CORS
  // ============================================================

  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://www.vextordata.com"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  // Responder al preflight del navegador
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ============================================================
  // SOLO POST
  // ============================================================

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

    // ============================================================
    // VALIDACIÓN
    // ============================================================

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // ============================================================
    // 1. EMAIL INTERNO
    // ============================================================

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

          subject: `Nueva solicitud de contacto — ${name}`,

          html: `
            <div
              style="
                font-family: Arial, Helvetica, sans-serif;
                max-width: 650px;
                margin: 0;
                padding: 30px;
                color: #1e293b;
                background-color: #ffffff;
                text-align: left;
              "
            >

              <h2
                style="
                  margin: 0 0 8px 0;
                  color: #2563eb;
                  font-size: 24px;
                  line-height: 1.3;
                "
              >
                Nueva solicitud de contacto
              </h2>

              <p
                style="
                  margin: 0 0 28px 0;
                  color: #64748b;
                  font-size: 15px;
                  line-height: 1.6;
                "
              >
                Hemos recibido un nuevo mensaje a través del
                formulario de contacto de VextorData.
              </p>

              <div
                style="
                  border-top: 1px solid #e2e8f0;
                  border-bottom: 1px solid #e2e8f0;
                  padding: 22px 0;
                "
              >

                <p style="margin: 0 0 16px 0;">
                  <strong>Nombre</strong><br />

                  <span style="color: #475569;">
                    ${name}
                  </span>
                </p>

                <p style="margin: 0 0 16px 0;">
                  <strong>Email</strong><br />

                  <a
                    href="mailto:${email}"
                    style="
                      color: #2563eb;
                      text-decoration: none;
                    "
                  >
                    ${email}
                  </a>
                </p>

                <p style="margin: 0;">
                  <strong>Mensaje</strong><br />

                  <span
                    style="
                      display: block;
                      margin-top: 8px;
                      padding: 16px;
                      background: #f8fafc;
                      border-radius: 8px;
                      color: #334155;
                      line-height: 1.6;
                      white-space: pre-line;
                    "
                  >
                    ${message}
                  </span>
                </p>

              </div>

              <p
                style="
                  margin: 24px 0 0 0;
                  color: #94a3b8;
                  font-size: 13px;
                "
              >
                VextorData · Contact Form
              </p>

            </div>
          `,
        }),
      }
    );

    if (!internalEmail.ok) {
      const errorData = await internalEmail.text();

      console.error(
        "Internal email failed:",
        errorData
      );

      throw new Error(
        "Failed to send internal email"
      );
    }

    // ============================================================
    // 2. AUTORESPUESTA AL CLIENTE
    // ============================================================

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
            "Hemos recibido tu mensaje — VextorData",

          html: `
            <div
              style="
                font-family: Arial, Helvetica, sans-serif;
                max-width: 600px;
                margin: 0;
                padding: 32px;
                color: #1e293b;
                background-color: #ffffff;
                text-align: left;
              "
            >

              <!-- ESPAÑOL -->

              <h2
                style="
                  margin: 0 0 18px 0;
                  color: #2563eb;
                  font-size: 24px;
                  line-height: 1.3;
                  text-align: left;
                "
              >
                Gracias por contactar con VextorData
              </h2>

              <p
                style="
                  margin: 0 0 16px 0;
                  font-size: 16px;
                  line-height: 1.6;
                  text-align: left;
                "
              >
                Hola ${name},
              </p>

              <p
                style="
                  margin: 0 0 16px 0;
                  font-size: 15px;
                  line-height: 1.7;
                  color: #475569;
                  text-align: left;
                "
              >
                Hemos recibido correctamente tu mensaje y
                agradecemos que te hayas puesto en contacto con
                nosotros.
              </p>

              <p
                style="
                  margin: 0 0 28px 0;
                  font-size: 15px;
                  line-height: 1.7;
                  color: #475569;
                  text-align: left;
                "
              >
                Nuestro equipo revisará tu solicitud y se pondrá
                en contacto contigo lo antes posible.
              </p>

              <!-- SEPARADOR -->

              <div
                style="
                  border-top: 1px solid #e2e8f0;
                  margin: 28px 0;
                "
              ></div>

              <!-- ENGLISH -->

              <h2
                style="
                  margin: 0 0 18px 0;
                  color: #2563eb;
                  font-size: 22px;
                  line-height: 1.3;
                  text-align: left;
                "
              >
                Thank you for contacting VextorData
              </h2>

              <p
                style="
                  margin: 0 0 16px 0;
                  font-size: 16px;
                  line-height: 1.6;
                  text-align: left;
                "
              >
                Hi ${name},
              </p>

              <p
                style="
                  margin: 0 0 16px 0;
                  font-size: 15px;
                  line-height: 1.7;
                  color: #475569;
                  text-align: left;
                "
              >
                We have received your message and appreciate you
                reaching out to us.
              </p>

              <p
                style="
                  margin: 0 0 28px 0;
                  font-size: 15px;
                  line-height: 1.7;
                  color: #475569;
                  text-align: left;
                "
              >
                Our team will review your request and get back to
                you as soon as possible.
              </p>

              <!-- FIRMA / IMAGEN -->

              <div
                style="
                  border-top: 1px solid #e2e8f0;
                  padding-top: 24px;
                  margin-top: 28px;
                "
              >

                <img
                  src="https://vextordata-contact-api.vercel.app/mail.jpg"
                  alt="VextorData"
                  width="600"
                  style="
                    display: block;
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                    border: 0;
                    outline: none;
                    text-decoration: none;
                  "
                />

              </div>

            </div>
          `,
        }),
      }
    );

    if (!autoReply.ok) {
      const errorData = await autoReply.text();

      console.error(
        "Auto-reply failed:",
        errorData
      );
    }

    // ============================================================
    // 3. RESPUESTA
    // ============================================================

    return res.status(200).json({
      success: true,
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