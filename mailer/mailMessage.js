const pug = require('pug');

module.exports = function (from, to, subject) {
    const htmlMailCompiled = pug.renderFile(`./mailer/mailTemplate.pug`,
        {
            title: 'Completa tu registro',
            token: subject
        });
    return message = {
        from,
        to,
        subject: 'Guía del Lago - Completa tu registro',
        html: htmlMailCompiled,
        attachments: [
            {
                filename: 'logo.jpg',
                path: `./mailer/logo.jpg`,
                cid: 'head'
            }
        ]
    };
};