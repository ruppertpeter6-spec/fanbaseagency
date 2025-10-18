"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: new FormData(form).get("email"),
          name: new FormData(form).get("name"),
        }),
      });

      const payload = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(payload?.error || \`HTTP \${res.status}\`);

      setStatus("submitted");
      setMessage("Invitation requests are reviewed weekly. We will reach out if the fit is right for the next cohort.");
      form.reset();
    } catch (err) {
      console.error("Waitlist submission failed", err);
      setStatus("error");
      setMessage(err?.message || "Unable to submit waitlist form.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required />
      <input name="name" type="text" />
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Join waitlist"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
