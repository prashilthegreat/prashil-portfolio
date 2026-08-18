"use client";

import { useEffect, useState } from "react";

const skills = ["Endpoint support", "User support", "Device setup", "Account & access support", "Hardware troubleshooting", "Software troubleshooting", "Remote support", "Ticket management", "User onboarding", "Technical documentation", "Security awareness", "Clear communication"];

const tools = [
  { name: "Microsoft 365", mark: "M365", tone: "orange", use: "Productivity & user support", tasks: ["Resolve app and sign-in issues", "Support licences and access", "Help users work across Microsoft apps"] },
  { name: "Microsoft Entra ID", mark: "ID", tone: "blue", use: "Identity & access", tasks: ["Support user access", "Troubleshoot sign-ins", "Assist with groups and permissions"] },
  { name: "Microsoft Intune", mark: "IN", tone: "blue", use: "Device management", tasks: ["Support enrolled endpoints", "Check device compliance", "Assist with app and policy delivery"] },
  { name: "Exchange Online", mark: "EX", tone: "blue", use: "Email & mailbox support", tasks: ["Troubleshoot mail flow", "Support mailbox access", "Assist with shared mailboxes"] },
  { name: "Active Directory", mark: "AD", tone: "navy", use: "Users, groups & access", tasks: ["Support user accounts", "Assist with group membership", "Resolve access issues"] },
  { name: "PowerShell", mark: ">_", tone: "navy", use: "Administration & automation", tasks: ["Run administrative checks", "Automate repeatable tasks", "Gather troubleshooting details"] },
  { name: "ConnectWise", mark: "CW", tone: "blue", use: "Service desk & ticketing", tasks: ["Log and triage support tickets", "Document troubleshooting and outcomes", "Track requests through to resolution"] },
  { name: "3CX", mark: "3CX", tone: "navy", use: "Helpdesk communications", tasks: ["Handle helpdesk calls", "Support users remotely", "Keep users updated through resolution"] },
  { name: "Google Cloud", mark: "G", tone: "multi", use: "Cloud services", tasks: ["Support cloud-based services", "Check logs and resources", "Assist with access and integrations"] },
];

const testimonials = [
  { quote: "Prompt work!", name: "Verified client", organisation: "Aboriginal housing organisation" },
  { quote: "Thanks for the impressive work, Prashil!", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "Quick response, efficient assistance, lovely staff.", name: "Verified client", organisation: "Remote community services organisation" },
  { quote: "Thank you for actioning my request to upgrade my computer.", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "Prashil does a great job for our team.", name: "Verified client", organisation: "Disability and health support organisation" },
  { quote: "The IT technician was so good at his work.", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "Fast and easy.", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "The support team always delivers prompt and professional service.", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "Prashil is always helpful.", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "The support team and Prashil were so friendly and helpful. Thank you.", name: "Verified client", organisation: "Aboriginal family legal service" },
  { quote: "Prashil’s work was good as always—prompt and quickly resolved.", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "Prashil was as efficient and helpful as ever.", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "Amazing help today and came on site to fix the issue straight away—everything was sorted within the hour. Absolutely tops!", name: "Verified client", organisation: "Aboriginal legal services organisation" },
  { quote: "Prashil was a great help, as he always is.", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "Prashil was prompt, friendly and efficient. Thanks.", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "Prashil is a legend tech. No task is too big or small for him to carry out—and always with a smile.", name: "Verified client", organisation: "Aboriginal legal services organisation" },
  { quote: "Prashil was a superstar this morning, acting very promptly and efficiently to get me out of a bind. Thank you so much.", name: "Verified client", organisation: "Community-controlled health service" },
  { quote: "Prashil is awesome.", name: "Verified client", organisation: "Disability and health support organisation" },
  { quote: "Thank you for the prompt service.", name: "Verified client", organisation: "Community-controlled health service" },
];

const testimonialsPerPage = 6;

export default function Home() {
  const [flippedTools, setFlippedTools] = useState<Set<string>>(() => new Set());
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [themeToggleFloating, setThemeToggleFloating] = useState(false);
  const [testimonialPage, setTestimonialPage] = useState(1);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme-v2");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const updateTogglePosition = () => setThemeToggleFloating(window.scrollY > 40);
    updateTogglePosition();
    window.addEventListener("scroll", updateTogglePosition, { passive: true });
    return () => window.removeEventListener("scroll", updateTogglePosition);
  }, []);

  const toggleTheme = () => {
    setTheme(current => {
      const next = current === "light" ? "dark" : "light";
      window.localStorage.setItem("portfolio-theme-v2", next);
      return next;
    });
  };

  const toggleTool = (name: string) => {
    setFlippedTools(current => {
      const next = new Set(current);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const testimonialPageCount = Math.ceil(testimonials.length / testimonialsPerPage);
  const visibleTestimonials = testimonials.slice((testimonialPage - 1) * testimonialsPerPage, testimonialPage * testimonialsPerPage);

  const changeTestimonialPage = (page: number) => {
    setTestimonialPage(page);
  };

  return (
    <main className={`theme-${theme}`}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Prashil Koirala, home">
          <svg className="brand-mark" viewBox="0 0 64 44" role="img" aria-hidden="true">
            <path className="brand-frame" d="M15 4H7v36h8M49 4h8v36h-8" />
            <path className="brand-letters" d="M19 34V10h8c6 0 9 3 9 8s-3 8-9 8h-8M38 10v24M48 10 39 22l9 12" />
            <circle cx="7" cy="4" r="3" />
            <circle cx="57" cy="40" r="3" />
          </svg>
          <span className="brand-name">Prashil Koirala</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#satisfaction">Feedback</a><a href="#credentials">Credentials</a><a href="#about">About</a>
          <button className={`theme-toggle${themeToggleFloating ? " is-floating" : ""}`} type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "Emerge" : "Territory"} palette`} aria-pressed={theme === "dark"}>
            <span className="theme-icon" aria-hidden="true">{theme === "light" ? "◐" : "☀"}</span><span className="theme-label">{theme === "light" ? "Emerge" : "Territory"}</span>
          </button>
          <a className="nav-cta" href="mailto:namikazeprashil@gmail.com">Let&apos;s talk</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Darwin, Australia</p>
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
          <div className="card-footer"><div><strong>Managed IT services provider</strong><span>02 Feb 2026 — Present</span></div><div className="signal" aria-hidden="true"><i /><i /><i /></div></div>
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
            <div className="job-content"><h3>User &amp; Endpoint<br />Support Technician</h3><p className="company">Managed IT services provider</p><p>Supporting users and endpoints across Darwin and remote East Arnhem Land communities—including Nhulunbuy, Galiwinku, Gunbalanya, and Warruwi—with practical troubleshooting, clear communication, and a focus on keeping essential work moving.</p></div>
            <div className="job-number">01</div>
          </article>
          <article className="job">
            <div className="job-meta"><span>2021 — 2023</span></div>
            <div className="job-content"><h3>Scrum Master</h3><p className="company">Software technology company</p><p>Led daily ceremonies, Jira workflows, sprint delivery, stakeholder communication, staff onboarding, helpdesk support, and Slack development automation.</p></div>
            <div className="job-number">02</div>
          </article>
          <article className="job">
            <div className="job-meta"><span>2020 — 2021</span></div>
            <div className="job-content"><h3>Application Developer</h3><p className="company">Software technology company</p><p>Built Android, iOS, web, and admin experiences with Flutter and Dart, backed by Firebase, Cloud Functions, Google Cloud, analytics, testing, and automated delivery.</p></div>
            <div className="job-number">03</div>
          </article>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="skills-intro"><p className="kicker light">Toolkit</p><h2>Broad enough to connect the dots.<br /><em>Focused enough to fix them.</em></h2></div>
        <div className="skill-cloud">{skills.map((skill, index) => <span key={skill} className={index % 4 === 0 ? "accent" : ""}>{skill}</span>)}</div>
        <div className="capabilities">
          <div><span>01</span><h3>Diagnose</h3><p>Methodical troubleshooting across devices, software, accounts, connectivity, and everyday user issues.</p></div>
          <div><span>02</span><h3>Support</h3><p>Responsive endpoint care, onboarding, access assistance, remote guidance, and clear user communication.</p></div>
          <div><span>03</span><h3>Improve</h3><p>Accurate ticket notes, practical documentation, recurring-issue awareness, and dependable follow-through.</p></div>
        </div>
      </section>

      <section className="section tools-section" id="tools">
        <div className="tools-heading">
          <div><p className="kicker">Tools &amp; platforms</p><h2>Familiar tools.<br /><em>Practical outcomes.</em></h2></div>
          <p>A Microsoft-first toolkit for supporting users, managing endpoints, resolving access issues, and keeping workplace technology moving.</p>
        </div>
        <div className="tool-grid">
          {tools.map((tool, index) => {
            const isFlipped = flippedTools.has(tool.name);
            return (
              <button className={`tool-card${isFlipped ? " is-flipped" : ""}`} key={tool.name} type="button" aria-pressed={isFlipped} onClick={() => toggleTool(tool.name)}>
                <span className="tool-card-inner">
                  <span className="tool-face tool-front">
                    <span className="tool-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className={`tool-mark ${tool.tone}`} aria-hidden="true">{tool.mark}</span>
                    <span className="tool-copy"><strong>{tool.name}</strong><small>{tool.use}</small></span>
                    <span className="flip-hint">Click to explore ↗</span>
                  </span>
                  <span className="tool-face tool-back">
                    <span className="tool-index">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{tool.name}</strong>
                    <ul>{tool.tasks.map(task => <li key={task}>{task}</li>)}</ul>
                    <span className="flip-hint">Click to return ↩</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="section satisfaction" id="satisfaction">
        <div className="satisfaction-heading">
          <div><p className="kicker">Client satisfaction</p><h2>Support people<br /><em>remember.</em></h2></div>
          <div className="satisfaction-summary"><strong>{testimonials.length}</strong><p>positive customer reviews<br />presented anonymously</p></div>
        </div>
        <nav className="testimonial-pagination" aria-label="Client feedback pages">
          <button type="button" onClick={() => changeTestimonialPage(testimonialPage - 1)} disabled={testimonialPage === 1} aria-label="Previous feedback page">← <span>Previous</span></button>
          <div>
            {Array.from({ length: testimonialPageCount }, (_, index) => index + 1).map(page => (
              <button type="button" key={page} className={page === testimonialPage ? "active" : ""} onClick={() => changeTestimonialPage(page)} aria-label={`Feedback page ${page}`} aria-current={page === testimonialPage ? "page" : undefined}>{page}</button>
            ))}
          </div>
          <button type="button" onClick={() => changeTestimonialPage(testimonialPage + 1)} disabled={testimonialPage === testimonialPageCount} aria-label="Next feedback page"><span>Next</span> →</button>
        </nav>
        <div className="testimonial-grid" aria-live="polite" aria-label={`Client feedback page ${testimonialPage} of ${testimonialPageCount}`}>
          {visibleTestimonials.map((testimonial, index) => (
            <figure className="testimonial" key={`${testimonialPage}-${index}`}>
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption><strong>{testimonial.name}</strong><span>{testimonial.organisation}</span></figcaption>
            </figure>
          ))}
        </div>
        <p className="testimonial-note">Feedback collected through verified support reviews and anonymised to remove people, organisations, ticket details, and identifying references.</p>
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
        <div><p className="kicker">About me</p><h2>Technology works best<br />when people feel <em>supported.</em></h2></div>
        <div className="about-copy">
          <p>I bring together hands-on technical support, software development, and delivery leadership. My support work reaches users across Darwin and remote communities throughout East Arnhem Land, where dependable technology and clear communication make a meaningful difference.</p>
          <p>Based in Darwin, I hold a Master of Information Technology from Charles Darwin University and a Bachelor of Science in Computer Science and Information Technology from Tribhuvan University.</p>
          <p>I&apos;m at my best when I can listen carefully, make a technical problem feel manageable, and leave the person—and the system—in a better place than I found them.</p>
          <div className="about-values" aria-label="How I work"><span>Calm under pressure</span><span>Curious by default</span><span>Reliable follow-through</span></div>
          <div className="education"><div><span>2024</span><strong>Master of Information Technology</strong><small>Charles Darwin University</small></div><div><span>2021</span><strong>BSc Computer Science &amp; IT</strong><small>Tribhuvan University</small></div></div>
        </div>
      </section>

      <footer>
        <p className="kicker light">Have a role or project in mind?</p>
        <h2>Let&apos;s make technology<br /><em>feel effortless.</em></h2>
        <div className="footer-links">
          <a href="mailto:namikazeprashil@gmail.com" aria-label="Email Prashil"><span className="footer-link-icon" aria-hidden="true">✉</span><span className="footer-link-copy"><small>Write to me</small><strong>Email</strong></span><span className="footer-link-arrow" aria-hidden="true">↗</span></a>
          <a href="tel:+61457859515" aria-label="Call Prashil"><span className="footer-link-icon" aria-hidden="true">☎</span><span className="footer-link-copy"><small>Start a conversation</small><strong>Call</strong></span><span className="footer-link-arrow" aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/prashil-koirala-847777a0/" target="_blank" rel="noreferrer" aria-label="Visit Prashil's LinkedIn"><span className="footer-link-icon linkedin-icon" aria-hidden="true">in</span><span className="footer-link-copy"><small>Connect professionally</small><strong>LinkedIn</strong></span><span className="footer-link-arrow" aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-base"><span>Prashil Koirala · Darwin, Australia</span><a href="#top">Back to top ↑</a></div>
        <div className="footer-acknowledgement">
          <p>I acknowledge the Larrakia people as the Traditional Custodians of Darwin, where I live and work, and pay my respects to Elders past and present. I also acknowledge the Traditional Custodians of the lands and waters across the East Arnhem Land communities I support.</p>
          <span>© 2026 Prashil Koirala</span>
        </div>
      </footer>
    </main>
  );
}
