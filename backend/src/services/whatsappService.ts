import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export const sendWhatsappMessage = async ({
  to,
  message,
}: {
  to: string;
  message: string;
}) => {
  await client.messages.create({
    body: message,

    from: "whatsapp:+14155238886",

    to: `whatsapp:+${to}`,
  });
};
