import Image from 'next/image'
import WaitlistForm from './components/WaitlistForm'

const stats = [
  {
    value: '16% YoY',
    label: 'growth in direct-to-fan revenue',
    source: 'MIDiA Research, 2023',
  },
  {
    value: '80% ↑',
    label: 'superfans spend more than casual listeners',
    source: 'Luminate, 2023',
  },
  {
    value: '$1B+',
    label: 'paid directly to artists on Bandcamp since launch',
    source: 'Bandcamp, 2024',
  },
  {
    value: '3x Streams',
    label: 'superfans generate 300% more repeat plays',
    source: 'Chartmetric, 2024',
  },
]

const capabilities = [
  {
    title: 'Create viral moments',
    description:
      'Engineer fan-fueled moments that spark shareability and convert attention into measurable growth.',
    bullets: [
      'Narrative campaigns that mobilise superfans and collaborators',
      'Content seeding playbooks that amplify reach beyond the algorithm',
      'Surprise-and-delight tactics that keep your core community buzzing',
    ],
  },
  {
    title: 'Own your revenue flywheel',
    description:
      'Design memberships, drops, and experiences that keep direct-to-fan income recurring and predictable.',
    bullets: [
      'Membership tiers and VIP backrooms your top 5% happily pay for',
      'Limited drops with engineered scarcity and waitlists',
      'Retention sequences that turn one-off buyers into patrons',
    ],
  },
  {
    title: 'Audience intelligence & segmentation',
    description:
      'Know exactly who is primed to invest, attend, or advocate—and automate the right invite at the right time.',
    bullets: [
      'Zero-party data capture across every touchpoint',
      'Clarity on spend levels, location clusters, and superfans-in-the-making',
      'Automated nurture journeys that feel personal, not spammy',
    ],
  },
  {
    title: 'Direct messaging ecosystems',
    description:
      'Build high-converting email, SMS, and Discord flows that feel like conversations—not campaigns.',
    bullets: [
      'Onboarding sequences that introduce the world and convert new listeners',
      'Tour launch and release cadences mapped to fan behaviour',
      'Signals to alert your team when a fan is ready for a higher-ticket offer',
    ],
  },
  {
    title: 'Premium fan experiences',
    description:
      'Design IRL and digital touchpoints that justify premium pricing and deepen loyalty season after season.',
    bullets: [
      'Listening salons, pop-ups, and backstage rituals your A-list fans share',
      'Interactive livestreams with layered exclusives and community co-creation',
      'Post-event retention that keeps momentum after the lights go down',
    ],
  },
  {
    title: 'Insight-led growth sprints',
    description:
      'Work in focused sprints that map metrics to meaning so you can reinvest in what moves culture and revenue.',
    bullets: [
      '90-day growth dashboards with clear leading indicators',
      'Weekly experiments to test offers, bundles, and narratives',
      'Actionable retros so your team scales the wins and shelves the noise',
    ],
  },
]

const myths = [
  {
    title: 'Where artists get stuck',
    body:
      'Most teams fire off the same email blasts and merch drops, hoping something sticks. The result? Fatigued lists, stale offers, and superfans who feel ignored.',
    bullets: [
      'Emails centred on sales, not story or access',
      'One-size-fits-all merch with no emotional hook',
      'Data living in disconnected tools—no real signal on who is ready to buy or host a pop-up for you',
    ],
  },
  {
    title: 'Social media is a tool—not the destination',
    body:
      'Algorithms reward quick hits, not long-term relationships. A social-first strategy keeps you chasing virality while platforms take the data, the reach, and the revenue.',
    bullets: [
      'When you do not own the audience, you rent your future from someone else',
      'Direct-to-fan channels convert 3-5x higher because context and trust already exist',
      'Social becomes the top of funnel that feeds a thriving community you control',
    ],
  },
]

const process = [
  {
    phase: 'Phase 01',
    title: 'Fanbase Intelligence',
    copy:
      'We audit your existing lists, socials, merch, and offers to surface what is working, who your advocates are, and where the leaks live.',
  },
  {
    phase: 'Phase 02',
    title: 'Experience Design',
    copy:
      'Co-create campaigns, offers, and community rituals that make fans feel seen—and map them to measurable revenue objectives.',
  },
  {
    phase: 'Phase 03',
    title: 'Launch & Scale',
    copy:
      'Activate the ecosystem with creative, automation, and reporting. Then we iterate fast: amplify what converts and expand what delights.',
  },
]

const heroSignals = [
  'Direct-to-fan infrastructure live in under 90 days',
  'Retention and revenue metrics that satisfy finance and delight superfans',
  'Culture-led campaigns guided by real supporter data, not algorithms',
]

const CheckIcon = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5.75 8.689 2.56 5.5l-1.06 1.06L5.75 10.81 14.5 2.06 13.44 1l-7.69 7.689Z"
      fill="#63e3ff"
    />
  </svg>
)

export default function HomePage() {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="site-header">
        <div className="content-width header-inner">
          <a className="brand" href="#top">
            <Image
              src="/logo-fanbase-agency.png"
              alt="The Fanbase Agency"
              width={180}
              height={96}
              priority
              className="brand-mark"
            />
          </a>
          <nav className="main-nav">
            <a href="#capabilities">Capabilities</a>
            <a href="#proof">Proof</a>
            <a href="#approach">Approach</a>
            <a href="#waitlist">Waitlist</a>
          </nav>
          <a className="button button-outline" href="#waitlist">
            Invite-only waitlist
          </a>
        </div>
      </header>
      <main>
        <section className="hero" id="top">
          <div className="hero-backdrop">
            <div className="glow glow-one" />
            <div className="glow glow-two" />
            <div className="grid-overlay" />
          </div>
          <div className="content-width hero-grid">
            <div className="hero-copy">
              <span className="tag">Direct-to-fan growth studio</span>
              <h1>
                Build the fanbase that funds your next era—
                <span>not just the next drop.</span>
              </h1>
              <p>
                Artists do not plateau because the art slows down. They stall when their fanbase is
                treated like a mailing list. We engineer ecosystems where superfans feel seen,
                social becomes a door—never the destination—and every release is fuel for recurring
                revenue.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#waitlist">
                  Request an invitation
                </a>
                <a className="button button-secondary" href="#proof">
                  See the impact
                </a>
              </div>
              <div className="hero-metrics">
                {heroSignals.map((signal) => (
                  <div className="hero-metric" key={signal}>
                    <span className="spark-icon">★</span>
                    <p>{signal}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-showcase">
              <div className="hero-card">
                <div className="hero-card-headline">
                  <Image
                    src="/logo-fanbase-agency.png"
                    alt="The Fanbase Agency"
                    width={260}
                    height={148}
                    className="hero-logo"
                  />
                  <h3>Fan relationships &gt; follower counts</h3>
                  <p>
                    We transform your listener data into a living growth platform—spanning messaging,
                    memberships, and experiences your artists can feel in the room.
                  </p>
                </div>
                <ul className="value-list">
                  <li>
                    <span className="icon-circle">
                      <CheckIcon />
                    </span>
                    <span>Blueprints for email, SMS, and community channels that feel human</span>
                  </li>
                  <li>
                    <span className="icon-circle">
                      <CheckIcon />
                    </span>
                    <span>Integrated tech stack so every supporter journey is tracked and optimised</span>
                  </li>
                  <li>
                    <span className="icon-circle">
                      <CheckIcon />
                    </span>
                    <span>Campaigns crafted to turn buzz into lifetime value</span>
                  </li>
                </ul>
              </div>
              <div className="hero-card secondary">
                <h4>What we unlock</h4>
                <div className="signal-grid">
                  {stats.map((stat) => (
                    <div className="signal" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                      <small>{stat.source}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proof">
          <div className="content-width">
            <div className="section-heading">
              <span className="tag">Why direct-to-fan wins</span>
              <h2>Make every touchpoint count—and keep the upside.</h2>
              <p>
                Fanbases are assets. When you own the data, the relationship, and the offer, you own
                the future. We combine culture, community, and conversion so your most passionate
                supporters stay close and spend often.
              </p>
            </div>
            <div className="stat-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                  <span>{stat.source}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities">
          <div className="content-width">
            <div className="section-heading">
              <span className="tag">What we build with you</span>
              <h2>From viral storytelling to recurring revenue systems.</h2>
              <p>
                We guide your team from insight to execution with programs that activate fans at
                every layer of loyalty.
              </p>
            </div>
            <div className="feature-grid">
              {capabilities.map((item) => (
                <div className="feature-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="content-width">
            <div className="section-heading">
              <span className="tag">Beyond the algorithm</span>
              <h2>Stop renting reach. Start owning relationships.</h2>
              <p>
                Social media is incredible for discovery—but discovery is not devotion. We help you
                convert fleeting scrolls into a community that shows up, shares loudly, and funds the
                art.
              </p>
            </div>
            <div className="myth-grid">
              {myths.map((myth) => (
                <div className="myth-card" key={myth.title}>
                  <h3>{myth.title}</h3>
                  <p>{myth.body}</p>
                  <ul>
                    {myth.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="proof">
              <h3>Proof that direct-to-fan is smarter revenue</h3>
              <p>
                Direct-to-fan income keeps accelerating: MIDiA reports 16% growth year over year,
                Bandcamp has paid artists more than $1B directly, and the Data &amp; Marketing
                Association cites a $36 return for every $1 invested in email. When you own the
                relationship, you own the margin—and the freedom to create on your terms.
              </p>
            </div>
          </div>
        </section>

        <section id="approach">
          <div className="content-width">
            <div className="section-heading">
              <span className="tag">How we work</span>
              <h2>Strategy, execution, and measurement in one motion.</h2>
              <p>
                You get a partner that obsesses over the craft, understands the data, and stays in
                the trenches with your team until the plan is humming.
              </p>
            </div>
            <div className="process-grid">
              {process.map((step) => (
                <div className="process-card" key={step.title}>
                  <strong>{step.phase}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="waitlist">
          <div className="content-width">
            <div className="cta-card waitlist-card">
              <div className="cta-copy">
                <h2>Access the invite-only roster.</h2>
                <p>
                  We onboard a limited number of artists each quarter to ensure every fanbase gets
                  bespoke attention. Share your details below and we will reach out if there is a fit
                  for the next cohort.
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="content-width footer-inner">
          <span>© {year} The Fanbase Agency. All rights reserved.</span>
          <span>Based in London · Working with artists globally.</span>
        </div>
      </footer>
    </>
  )
}
