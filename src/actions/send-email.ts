"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "./contact-email-form";

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
  email: string;
  title: string;
  message: string;
}

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.email;
  const message = formData.message;
  const title = formData.title;

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "rafalpompa2000@gmail.com",
      subject: "[PORTFOLIO] Wiadomość od " + senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
        title: title,
      }),
    });
  } catch (error: unknown) {
    return {
      error: error,
    };
  }

  return {
    data,
  };
};
