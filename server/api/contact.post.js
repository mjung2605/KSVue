import nodemailer from 'nodemailer';

// defineEventHandler definiert API route
export default defineEventHandler(async (event) => {


  // lädt in nuxt.config.ts assignte .env
  const config = useRuntimeConfig();
  
  // awaited Daten vom Frontend / http post body als json
  const body = await readBody(event);

  // nodemailer library als unser http client
  const transporter = nodemailer.createTransport({

    host: config.mailHost,
    port: config.mailPort,
    secure: false, // verwendet nicht ssl, sondern verschlüsselte Verbindung (STARTTLS)
    auth: {
      user: config.mailUser,
      pass: config.mailPass
    },
    tls: {
      rejectUnauthorized: false // optional, manchmal nötig bei IONOS
    }
    
  });

  // Inhalt der Mail
    const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `Neue Kontaktanfrage von ${body.name}`,
    text: `
      Nachricht: ${body.message}

      Telefon: ${body.tel}
      E-Mail: ${body.email}`
  };


  // Senden und error catching
   try {
    const info = await transporter.sendMail(mailOptions)
    console.log('sending...')
    console.log('Mail info:', info);

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Mail send error:', error)
    return { success: false, error: error.message }
  }



})