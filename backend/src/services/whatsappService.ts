import twilio from "twilio";

let client: any = null;

try {
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
    client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    console.log("✓ Twilio client initialized");
  } else {
    console.warn("⚠ Twilio credentials missing - WhatsApp notifications disabled");
  }
} catch (err: any) {
  console.warn("⚠ Twilio initialization failed:", err.message);
}

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

    console.log("[WhatsApp] Message sent successfully");
    return message;
  } catch (error: any) {
    console.warn("[WhatsApp] Failed (non-critical):", error.message);
    return null;
  }
};