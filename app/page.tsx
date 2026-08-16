const skills = ["Endpoint support", "Flutter", "Dart", "Firebase", "TypeScript", "Jira", "Google Cloud", "BigQuery", "CI/CD", "Stakeholder communication", "Agile delivery", "Technical troubleshooting"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Prashil Koirala, home">PK<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#credentials">Credentials</a><a href="#about">About</a>
          <a className="nav-cta" href="mailto:namikazeprashil@gmail.com">Let&apos;s talk</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Darwin, Australia · Available for opportunities</p>
          <h1>IT support instinct.<br /><em>Developer mindset.</em></h1>
          <p className="intro">I&apos;m Prashil Koirala — an endpoint support technician and application developer who turns technical friction into calm, reliable experiences.</p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">Explore my work <span>↘</span></a>
            <a className="button text" href="https://www.linkedin.com/in/prashil-koirala-847777a0/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <aside className="role-card" aria-label="Current role">
          <div className="card-index">01 / CURRENT</div>
          <div><p className="card-label">Now supporting</p><h2>Users &amp;<br />endpoints</h2></div>
          <div className="card-footer"><div><strong>Emerge IT</strong><span>02 Feb 2026 — Present</span></div><div className="signal" aria-hidden="true"><i /><i /><i /></div></div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div><strong>03</strong><span>Professional roles</span></div><div><strong>02</strong><span>Technology degrees</span></div><div><strong>03</strong><span>App platforms shipped</span></div><p>Support that understands the system.<br />Development that understands the user.</p>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading"><p className="kicker">Selected experience</p><h2>From the helpdesk<br />to the <em>codebase.</em></h2></div>
        <div className="timeline">
          <article className="job featured">
            <div className="job-meta"><span>2026 — NOW</span><span className="tag">CURRENT</span></div>
            <div className="job-content"><h3>User &amp; Endpoint<br />Support Technician</h3><p className="company">Emerge IT</p><p>Supporting people and their devices with practical troubleshooting, clear communication, and a focus on getting work moving again.</p></div>
            <div className="job-number">01</div>
          </article>
          <article className="job">
            <div className="job-meta"><span>2021 — 2023</span></div>
            <div className="job-content"><h3>Scrum Master</h3><p className="company">Parentiv, Inc.</p><p>Led daily ceremonies, Jira workflows, sprint delivery, stakeholder communication, staff onboarding, helpdesk support, and Slack development automation.</p></div>
            <div className="job-number">02</div>
          </article>
          <article className="job">
            <div className="job-meta"><span>2020 — 2021</span></div>
            <div className="job-content"><h3>Application Developer</h3><p className="company">Parentiv, Inc.</p><p>Built Android, iOS, web, and admin experiences with Flutter and Dart, backed by Firebase, Cloud Functions, Google Cloud, analytics, testing, and automated delivery.</p></div>
            <div className="job-number">03</div>
          </article>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="skills-intro"><p className="kicker light">Toolkit</p><h2>Broad enough to connect the dots.<br /><em>Focused enough to fix them.</em></h2></div>
        <div className="skill-cloud">{skills.map((skill, index) => <span key={skill} className={index % 4 === 0 ? "accent" : ""}>{skill}</span>)}</div>
        <div className="capabilities">
          <div><span>01</span><h3>Support</h3><p>User-first troubleshooting, endpoint care, onboarding, resource access, and calm communication.</p></div>
          <div><span>02</span><h3>Build</h3><p>Cross-platform applications, cloud services, integrations, testing, analytics, and delivery pipelines.</p></div>
          <div><span>03</span><h3>Lead</h3><p>Agile rituals, sprint coordination, stakeholder updates, issue ownership, and practical team enablement.</p></div>
        </div>
      </section>

      <section className="section credentials" id="credentials">
        <div className="credential-count"><span>Verified learning</span><strong>64</strong><small>digital credentials</small></div>
        <div className="credential-copy">
          <p className="kicker">ACS + Skillsoft</p>
          <h2>Always learning.<br /><em>Always current.</em></h2>
          <p>My credential wallet reflects continuous development across technical support, modern IT, delivery, and professional effectiveness—issued through Skillsoft and the Australian Computer Society.</p>
          <div className="credential-topics"><span>CompTIA A+ hardware</span><span>Cybersecurity</span><span>Project management</span><span>Agile</span><span>Machine learning</span><span>Career development</span></div>
          <a className="button primary credential-link" href="https://acs-preview.digitalbadges.skillsoft.com/profile/prashilkoirala849784/wallet" target="_blank" rel="noreferrer">View verified badge wallet <span>↗</span></a>
        </div>
      </section>

      <section className="section about" id="about">
        <div><p className="kicker">A little context</p><h2>Technology works best<br />when people feel <em>supported.</em></h2></div>
        <div className="about-copy">
          <p>I bring together hands-on technical support, software development, and delivery leadership. That mix helps me see the whole problem — from the person experiencing it to the system behind it.</p>
          <p>Based in Darwin, I hold a Master of Information Technology from Charles Darwin University and a Bachelor of Science in Computer Science and Information Technology from Tribhuvan University.</p>
          <div className="education"><div><span>2024</span><strong>Master of Information Technology</strong><small>Charles Darwin University</small></div><div><span>2021</span><strong>BSc Computer Science &amp; IT</strong><small>Tribhuvan University</small></div></div>
        </div>
      </section>

      <footer>
        <p className="kicker light">Have a role or project in mind?</p>
        <h2>Let&apos;s make technology<br /><em>feel effortless.</em></h2>
        <div className="footer-links"><a href="mailto:namikazeprashil@gmail.com">Email me ↗</a><a href="tel:+61457859515">Call me ↗</a><a href="https://www.linkedin.com/in/prashil-koirala-847777a0/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <div className="footer-base"><span>Prashil Koirala · Darwin, Australia</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
