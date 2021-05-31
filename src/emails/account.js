const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rautsk22@gmail.com',
        subject: 'Welcome to Task Manager',
        text: `Welcome to the task manager ${name}, Please let us know how did you like it. Thank You`
    })
}

const sendGoodByeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rautsk22@gmail.com',
        subject: 'Sorry to see you go',
        text: `Good bye from the task manager ${name}, Please let us know how we can improve it. Thank You`
    })
}

module.exports = {
    sendWelcomeMail,
    sendGoodByeMail
}
