"use client";
import { useState, useRef } from "react";

export default function WaitlistForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        // avoid backticks to prevent template issues
        throw new Error(payload && payload.error ? payload.error : "HTTP " + res.status);
      }

      setStatus("submitted");
      setMessage(
        "Invitation requests are reviewed weekly. We will reach out if the fit is right for the next cohort."
      );
      (formRef.current || form).reset();
    } catch (err) {
      console.error("Waitlist submission failed", err);
      setStatus("error");
      setMessage(err && err.message ? err.message : "Unable to submit waitlist form.");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="email" type="email" required />
      <input name="name" type="text" />
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Join waitlist"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}