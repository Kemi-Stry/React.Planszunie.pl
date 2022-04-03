module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: 'planszunie@gmail.com',
            pass: 'Kotki#1024',
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'planszunie@gmail.com',
          defaultReplyTo: 'planszunie@gmail.com',
        },
      },
    },
    // ...
  });