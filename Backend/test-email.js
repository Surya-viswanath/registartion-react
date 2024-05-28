// const nodemailer = require('nodemailer');

// (async () => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail', // or another email service
//       auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-email-password',
//       },
//     });

//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: 'suryaviswanath22@gmail.com',
//       subject: 'Test Email',
//       text: 'This is a test email.',
//     };

//     let info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ' + info.response);
//   } catch (error) {
//     console.error('Error sending test email:', error);
//   }
// })();



const nodemailer = require('nodemailer');

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'suryaviswanath22@gmail.com',
      subject: 'Test Email',
      text: 'This is a test email.',
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending test email:', error.message);
  }
})();
