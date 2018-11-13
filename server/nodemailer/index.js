const nodemailer = require('nodemailer');
const path = require('path');

module.exports = (orderInfo, itemsOrdered) => {
   nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
         host: 'smtp.ethereal.email',
         port: 587,
         auth: {
            user: 'hqid6w3qdffigjvw@ethereal.email',
            pass: 'Z23Pvjj5dbbMkkEptE'
         }
      });

      // const attachments = itemsOrdered.map(item => {
      //    return {
      //       filename: '1.jpg',
      //       path: `/images/${ item.brand }/${ item.imageFolderName }`,
      //       cid: item.imageFolderName
      //    }
      // });

      const itemsHTML = itemsOrdered.map(item =>
         `<div style="text-align: center;">
            <h3>
            ${ item.brand } <br/>
            ${ item.model } ${ item.colorway }
            </h3>
            <p><b>Quantity:</b> 1</p>
            <p><b>Price:</b> $${ item.price }</p>
         </div>`
      );

      const emailBody = `<div style="text-align: center; width: 90%; margin: auto;">
                           <h1>Order Confirmation</h1>
                           <p>${ orderInfo.address }</p>
                           <p>${ orderInfo.city } ${ orderInfo.state }</p>
                           <p>Order #${ orderInfo.orderId }</p>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <h2>Order Info:</h2>
                        ${ itemsHTML }
                        <h2>Total: ${ orderInfo.total }</h2>`;

      const date = new Date();

      // setup email data with unicode symbols
      const mailOptions = {
         from: '', // sender address
         to: orderInfo.email, // list of receivers
         subject: `React Ecommerce Order: ${ date.getUTCMonth } ${ date.getUTCDay } ${ date.getUTCFullYear }`, // Subject line
         html: emailBody, // html body
         // attachments: attachments
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
            return console.log(error);
         }
         console.log('Message sent: %s', info.messageId);
         // Preview only available when sending through an Ethereal account
         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
   });
}