import nodemailer from 'nodemailer'

const REQUIRED_FIELDS = ['name', 'contact', 'artist', 'spotifyUrl']

export async function POST(request) {
  try {
    const payload = await request.json()

    for (const field of REQUIRED_FIELDS) {
      if (!payload?.[field]) {
        return Response.json({ error: `Missing field: ${field}` }, { status: 400 })
      }
    }

    if (!process.env.FANBASE_SMTP_HOST || !process.env.FANBASE_SMTP_USER || !process.env.FANBASE_SMTP_PASS) {
      console.warn('Waitlist email not sent: SMTP environment variables are undefined.')
      return Response.json(
        {
          error:
            'Waitlist email service is not configured. Please set FANBASE_SMTP_HOST, FANBASE_SMTP_USER, and FANBASE_SMTP_PASS.',
        },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.FANBASE_SMTP_HOST,
      port: Number(process.env.FANBASE_SMTP_PORT || 465),
      secure: (process.env.FANBASE_SMTP_SECURE || 'true').toLowerCase() === 'true',
      auth: {
        user: process.env.FANBASE_SMTP_USER,
        pass: process.env.FANBASE_SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.FANBASE_SMTP_FROM || 'pr@peterruppert.com',
      to: process.env.FANBASE_WAITLIST_RECIPIENT || 'pr@peterruppert.com',
      subject: 'New waitlist request · The Fanbase Agency',
      text: formatTextEmail(payload),
      html: formatHtmlEmail(payload),
    })

    return Response.json({ ok: true })
  } catch (error) {
    console.error('Failed to send waitlist email', error)
    return Response.json({ error: 'Failed to submit waitlist form' }, { status: 500 })
  }
}

function formatTextEmail({ name, contact, artist, spotifyUrl }) {
  return [
    'New invite-only waitlist submission:',
    '',
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Artist / Project: ${artist}`,
    `Spotify URL: ${spotifyUrl}`,
    '',
    '— The Fanbase Agency',
  ].join('\n')
}

function formatHtmlEmail({ name, contact, artist, spotifyUrl }) {
  return `
    <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; color: #0a1a3d; background:#f5f7ff; padding:24px;">
      <h2 style="margin-top:0;color:#0a1a3d;">New waitlist submission</h2>
      <table style="background:#ffffff;border-radius:12px;padding:20px;border:1px solid #d4dcff;">
        <tbody>
          <tr>
            <td style="padding:8px 12px;font-weight:600;">Name</td>
            <td style="padding:8px 12px;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:600;">Contact</td>
            <td style="padding:8px 12px;">${escapeHtml(contact)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:600;">Artist / Project</td>
            <td style="padding:8px 12px;">${escapeHtml(artist)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:600;">Spotify URL</td>
            <td style="padding:8px 12px;"><a href="${escapeAttribute(spotifyUrl)}">${escapeHtml(spotifyUrl)}</a></td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top:18px;">Sent automatically from the invite-only waitlist form.</p>
    </div>
  `
}

const htmlEscapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;',
}

function escapeHtml(str = '') {
  return String(str).replace(/[&<>"']/g, (match) => htmlEscapeMap[match])
}

function escapeAttribute(str = '') {
  return escapeHtml(str).replace(/"/g, '&quot;')
}
