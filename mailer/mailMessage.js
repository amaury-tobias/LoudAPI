const pug = require('pug');

module.exports = function (from, to, subject) {
    const htmlMailCompiled = pug.renderFile(`./mailer/mailTemplate.pug`,
        {
            title: 'Funciona :U',
            user: 'huehuehu'
        });

    return message = {
        from,
        to,
        subject,
        html: htmlMailCompiled,
        attachments: [
            {
                filename: 'abBBer.jpg',
                path: `./mailer/aber.jpg`,
                cid: 'oaber'
            }
        ]
    };
};