const twilio = require("twilio");

const accountSid = <FIREBASE_ACCOUNT_SID>;
const authToken = <FIREBASE_AUTH_TOKEN>;

module.exports = new twilio.Twilio(accountSid, authToken);
