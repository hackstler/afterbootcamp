import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, phoneNumber, country, message } =
    await request.json();
  const calendlyLink = process.env.CALENDLY_LINK;

  const transporter = nodemailer.createTransport({
    host: "smtp.serviciodecorreo.es",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const htmlMessage = `
  <div style="font-family: Arial, sans-serif; color: #333;">
      <p>Hola ${firstName},</p>
      <p>Gracias por solicitar información sobre nuestras mentorías After-bootcamp.</p>
      <p>Puedes reservar tu primera sesión con nosotros en el siguiente enlace:</p>
      <p><a href="${calendlyLink}" style="color: #007BFF;">Reserva tu sesión</a></p>
      <p>Saludos,</p>
      <p>El equipo de Mentorías After-Bootcamp</p>
    <br>
    <div style="border-top: 1px solid #ccc; padding-top: 10px; backgroud-color: white;">
      <img src="https://storage.googleapis.com/afterbootcamp/openart-image_1meb51Ew_1716370930361_raw.png" alt="AfterBootcamp Logo" style="height: 50px; backgroud-color: white;">
      <p style="margin: 0; color: #555;">AfterBootcamp</p>
      <p style="margin: 0; color: #555;">Tu éxito, nuestra misión.</p>
      <p style="margin: 0; color: #555;">Email: info@afterbootcamp.com | Teléfono: 699 211 701</p>
      <p style="margin: 0; color: #555;">
        <a href="https://afterbootcamp.es" style="color: #007BFF;">Visita nuestra web</a> | 
        <a href="https://linkedin.com/company/afterbootcamp" style="color: #007BFF;">LinkedIn</a> | 
        <a href="https://twitter.com/afterbootcamp" style="color: #007BFF;">Twitter</a>
      </p>
    </div>
  </div>
`;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.YOUR_EMAIL,
    subject: "Nuevo lead de mentorías post-bootcamp",
    text: `
      Nombre: ${firstName} ${lastName}
      Correo: ${email}
      Teléfono: ${phoneNumber}
      País: ${country}
      Mensaje: ${message}
    `,
  };

  const confirmationMailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Confirmación de solicitud de información",
    text: `Hola ${firstName},

    Gracias por solicitar información sobre nuestras mentorías After-bootcamp. Nos pondremos en contacto contigo pronto.

    Saludos,
    El equipo de Mentorías After-Bootcamp`,
    html: htmlMessage,
  };

  try {
    const message = await transporter.sendMail(mailOptions);
    console.log("🚀 ~ POST ~ message:", message);
    await transporter.sendMail(confirmationMailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
