"use client";
import { Mail } from "lucide-react";
import { useContactForm } from "@/services/contactService";
import { motion } from "motion/react";

const statusMessages: Record<string, string> = {
  sending: "Sending...",
  success: "Message sent successfully!",
  error: "Something went wrong. Please try again.",
};

export const Contact = () => {
  const { status, handleSubmit } = useContactForm();

  return (
    <motion.div
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4
        className="font-jakarta mb-2 text-center text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        className="font-playfair text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Get in touch
      </motion.h2>

      <motion.p
        className="font-jakarta mx-auto mt-5 mb-12 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        I&apos;d love to hear from you. Please use the form below to get in
        touch.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="mt-10 mb-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <motion.input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 rounded-md border-2 border-black bg-white/50 p-3 outline-none dark:border-white dark:bg-black/50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 rounded-md border-2 border-black bg-white/50 p-3 outline-none dark:border-white dark:bg-black/50"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </div>

        <motion.textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="mb-6 w-full rounded-md border-2 border-black bg-white/50 p-4 outline-none dark:border-white dark:bg-black/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        <motion.button
          type="submit"
          disabled={status === "sending"}
          className="mx-auto flex w-max cursor-pointer items-center justify-between gap-3 rounded-full bg-black px-8 py-3 text-white shadow-sm disabled:opacity-60 dark:bg-white dark:text-black"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          Submit now
          <Mail />
        </motion.button>

        {status !== "idle" && (
          <p className="mt-4 text-center">{statusMessages[status]}</p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
