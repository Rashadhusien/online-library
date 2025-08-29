import { Client as WorkflowClient } from "@upstash/workflow";
import config from "./config";
import { Client as QstashClient, resend } from "@upstash/qstash";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

const qstashClient = new QstashClient({
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: String;
  subject: String;
  message: String;
}) => {
  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken }),
    },
    body: {
      from: "Rashad <hello.rashadhussein.com>",
      to: [email],
      subject,
      html: message,
    },
  });
};
