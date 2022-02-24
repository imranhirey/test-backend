const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cimraannuur88@gmail.com",
    pass: "yaamaalik4321",
  },
});

// point to the template folder
const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
};

// use a template file with nodemailer
transporter.use("compile", hbs(handlebarOptions));
const subject = (link) => {
  if (link !== null) {
    if (link == "rp") {
      // rs = reset password
      return "Reset Your Password";
    } else {
      return "Reset Your Password";
    } // sa = security alert
  } else {
    return "Security Alert";
  }
};

const sendmail = (type, email, template, name, link) => {
  let date = new Date();
  let all =
    date.getDay() +
    " " +
    date.getDate() +
    " " +
    date.getFullYear() +
    " at " +
    date.getHours() +
    ":" +
    date.getMinutes();
  var mailOptions = {
    from: '"CSF" <adebola.rb.js@gmail.com>', // sender address
    to: email, // list of receivers
    subject: subject(type),
    template: template, // the name of the template file i.e email.handlebars
    context: {
      link: link, // replace {{name}} with Adebola
      name: name, // replace {{company}} with My Company
      data: all,
    },
  };

  // trigger the sending of the E-mail
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
};

module.exports = sendmail;
