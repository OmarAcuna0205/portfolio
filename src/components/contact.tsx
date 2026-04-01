"use client";
import { Mail } from "lucide-react";
import { useContactForm } from "@/services/contactService";

const statusMessages: Record<string, string> = {
  sending: "Sending...",
  success: "Message sent successfully!",
  error: "Something went wrong. Please try again.",
};

export const Contact = () => {
  const { status, handleSubmit } = useContactForm();

  return (
    <div
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-10"
    >
      <h4 className="font-jakarta mb-2 text-center text-lg">Connect with me</h4>
      <h2 className="font-playfair text-center text-5xl">Get in touch</h2>

      <p className="font-jakarta mx-auto mt-5 mb-12 max-w-2xl text-center">
        I&apos;d love to hear from you. Please use the form below to get in
        touch.
      </p>

      <form onSubmit={handleSubmit} className="mx-auto max-w-5xl">
        <div className="mt-10 mb-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 rounded-md border-2 border-black bg-white/50 p-3 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 rounded-md border-2 border-black bg-white/50 p-3 outline-none"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="mb-6 w-full rounded-md border-2 border-black bg-white/50 p-4 outline-none"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="mx-auto flex w-max cursor-pointer items-center justify-between gap-3 rounded-full bg-black px-8 py-3 text-white shadow-sm disabled:opacity-60"
        >
          Submit now
          <Mail />
        </button>

        {status !== "idle" && (
          <p className="mt-4 text-center">{statusMessages[status]}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
