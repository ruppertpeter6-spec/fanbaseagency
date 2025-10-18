'use client'

import { useState, useTransition } from 'react'

export default function WaitlistForm() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name'),
      contact: formData.get('contact'),
      artist: formData.get('artist'),
      spotifyUrl: formData.get('spotifyUrl'),
    }

    startTransition(async () => {
      setStatus('submitting')
      setMessage('')

      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        const data = await response.json().catch(() => ({}))
        if (!response.ok) {
          throw new Error(data?.error || 'Unable to submit waitlist form.')
        }

        setStatus('submitted')
        setMessage(
          'Invitation requests are reviewed weekly. We will reach out if the fit is right for the next cohort.',
        )
        form.reset()
      } catch (error) {
        console.error('Waitlist submission failed', error)
        setStatus('error')
        setMessage(
          error.message ||
            'We could not complete your request. Please try again or email pr@peterruppert.com directly.',
        )
      }
    })
  }

  return (
    <div className="waitlist-shell">
      <form className="waitlist-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            <span>Name *</span>
            <input name="name" type="text" placeholder="Full name" required />
          </label>
          <label>
            <span>Contact *</span>
            <input name="contact" type="text" placeholder="Email or phone" required inputMode="email" />
          </label>
        </div>
        <div className="form-grid">
          <label>
            <span>Artist *</span>
            <input name="artist" type="text" placeholder="Artist name" required />
          </label>
          <label>
            <span>Artist Spotify URL *</span>
            <input name="spotifyUrl" type="url" placeholder="https://open.spotify.com/artist/..." required />
          </label>
        </div>
        <button type="submit" className="button button-primary" disabled={isPending}>
          {isPending ? 'Sending…' : 'Request invitation'}
        </button>
      </form>
      {status !== 'idle' && message && (
        <p className={`waitlist-feedback waitlist-${status}`}>{message}</p>
      )}
    </div>
  )
}
