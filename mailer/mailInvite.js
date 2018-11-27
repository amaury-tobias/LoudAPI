const pug = require('pug');

module.exports = function (from, to) {
    const htmlMailCompiled = pug.renderFile(`./mailer/inviteTemplate.pug`,
        {
            title: 'Te invitamos Guía Comercial del Lago'
        });
    return message = {
        from,
        to,
        subject: 'Guía del Lago - Invitacion',
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