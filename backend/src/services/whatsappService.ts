import twilio from "twilio";

console.log("TWILIO SID:");
console.log(process.env.TWILIO_ACCOUNT_SID);

console.log("TWILIO TOKEN:");
console.log(process.env.TWILIO_AUTH_TOKEN);

console.log("TWILIO NUMBER:");
console.log(process.env.TWILIO_WHATSAPP_NUMBER);

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendWhatsAppMessage = async (
  to: string,
  body: string
) => {
  try {

    // CLEAN NUMBER

    let formattedNumber = to
      .replace(/\s/g, "")
      .replace(/\+/g, "");

    // FORCE INDIA CODE

    if (!formattedNumber.startsWith("91")) {
      formattedNumber = `91${formattedNumber}`;
    }

    // FINAL FORMAT

    const finalNumber = `whatsapp:+${formattedNumber}`;

    console.log("Sending WhatsApp To:");
    console.log(finalNumber);

    console.log("Message:");
    console.log(body);

    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: finalNumber,
      body,
    });

    console.log("WhatsApp Sent Successfully");
    console.log(message.sid);

    return message;

  } catch (error: any) {

    console.log("TWILIO ERROR:");

    console.log(error.message);

    if (error.code) {
      console.log("Error Code:", error.code);
    }

    if (error.moreInfo) {
      console.log(error.moreInfo);
    }

    throw error;
  }
};