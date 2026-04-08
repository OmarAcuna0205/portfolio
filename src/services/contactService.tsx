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
      formData.append("access_key", "49c9b5ee-280a-42a8-8c69-4fbda9444ba6");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
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
