import { useState } from "react";

type ContactStatus = "idle" | "sending" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const formData = new FormData(form);
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) form.reset();
    } catch {
      setStatus("error");
    }
  };

  return { status, handleSubmit };
}
