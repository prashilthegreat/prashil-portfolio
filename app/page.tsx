"use client";

import { useEffect, useState } from "react";

const skills = ["Endpoint support", "User support", "Device setup", "Account & access support", "Hardware troubleshooting", "Software troubleshooting", "Remote support", "Ticket management", "User onboarding", "Technical documentation", "Security awareness", "Clear communication"];

const tools = [
  { name: "Microsoft 365", mark: "M365", tone: "orange", use: "Productivity & user support", tasks: ["Resolve app and sign-in issues", "Support licences and access", "Help users work across Microsoft apps"] },
  { name: "Microsoft Entra", mark: "EN", tone: "blue", use: "Identity & access", tasks: ["Support user access", "Troubleshoot sign-ins", "Assist with groups and permissions"] },
  { name: "Microsoft Intune", mark: "IN", tone: "blue", use: "Device management", tasks: ["Support enrolled endpoints", "Check device compliance", "Assist with app and policy delivery"] },
  { name: "Exchange Online", mark: "EX", tone: "blue", use: "Email & mailbox support", tasks: ["Troubleshoot mail flow", "Support mailbox access", "Assist with shared mailboxes"] },
  { name: "Active Directory", mark: "AD", tone: "navy", use: "Users, groups & access", tasks: ["Support user accounts", "Assist with group membership", "Resolve access issues"] },
  { name: "PowerShell", mark: ">_", tone: "navy", use: "Administration & automation", tasks: ["Run administrative checks", "Automate repeatable tasks", "Gather troubleshooting details"] },
  { name: "ConnectWise", mark: "CW", tone: "blue", use: "Service desk & ticketing", tasks: ["Log and triage support tickets", "Document troubleshooting and outcomes", "Track requests through to resolution"] },
  { name: "3CX", mark: "3CX", tone: "navy", use: "Helpdesk communications", tasks: ["Handle helpdesk calls", "Support users remotely", "Keep users updated through resolution"] },
  { name: "Google Cloud", mark: "G", tone: "multi", use: "Cloud services", tasks: ["Support cloud-based services", "Check logs and resources", "Assist with access and integrations"] },
];

const communities = [
  { name: "Nhulunbuy", region: "East Arnhem", lat: -12.18043, lon: 136.77599 },
  { name: "Galiwin’ku (Elcho Island)", region: "East Arnhem", lat: -12.01038, lon: 135.58711 },
  { name: "Yirrkala", region: "East Arnhem", lat: -12.25392, lon: 136.88997 },
  { name: "Gunyangara (Ski Beach)", region: "East Arnhem", lat: -12.2178, lon: 136.70523 },
  { name: "Yurrwi (Milingimbi)", region: "East Arnhem", lat: -12.10003, lon: 134.91443 },
  { name: "Birritjimi", region: "East Arnhem", lat: -12.1881, lon: 136.7089 },
  { name: "Galupa", region: "East Arnhem", lat: -12.19245, lon: 136.68924 },
  { name: "Dhanaya", region: "East Arnhem", lat: -12.48, lon: 136.73 },
  { name: "Barunga", region: "Big Rivers", lat: -14.525, lon: 132.8648 },
  { name: "Bulman", region: "Big Rivers", lat: -13.66581, lon: 134.33602 },
  { name: "Jilkminggan", region: "Big Rivers", lat: -14.96674, lon: 133.29291 },
  { name: "Manyallaluk", region: "Big Rivers", lat: -14.26931, lon: 132.8317 },
  { name: "Mataranka", region: "Big Rivers", lat: -14.92788, lon: 133.06906 },
  { name: "Minyerri", region: "Big Rivers", lat: -15.22162, lon: 134.08189 },
  { name: "Ngukurr", region: "Big Rivers", lat: -14.73264, lon: 134.74329 },
  { name: "Urapunga (Rittarangu)", region: "Big Rivers", lat: -14.70985, lon: 134.56572 },
  { name: "Wugularr (Beswick)", region: "Big Rivers", lat: -14.55637, lon: 133.11604 },
  { name: "Katherine", region: "Katherine", lat: -14.46462, lon: 132.2636 },
  { name: "Binjari", region: "Katherine", lat: -14.54913, lon: 132.18595 },
  { name: "Jodetluk (Gorge Camp)", region: "Katherine", lat: -14.3597, lon: 132.43306 },
  { name: "Geyulkgan Ngurra (Walpiri Camp)", region: "Katherine", lat: -14.47361, lon: 132.2693 },
  { name: "Kalkarindji", region: "Victoria Daly", lat: -17.44704, lon: 130.83346 },
  { name: "Daguragu", region: "Victoria Daly", lat: -17.40043, lon: 130.80575 },
  { name: "Lajamanu", region: "Victoria Daly", lat: -18.33578, lon: 130.63592 },
  { name: "Timber Creek", region: "Victoria Daly", lat: -15.65621, lon: 130.48055 },
  { name: "Yarralin", region: "Victoria Daly", lat: -16.44782, lon: 130.88207 },
  { name: "Bulla", region: "Victoria Daly", lat: -15.76579, lon: 130.03977 },
  { name: "Amanbidji", region: "Victoria Daly", lat: -16.42894, lon: 129.61849 },
  { name: "Nitjpurru (Pigeon Hole)", region: "Victoria Daly", lat: -16.78411, lon: 131.22226 },
  { name: "Lingara", region: "Victoria Daly", lat: -16.48682, lon: 130.64312 },
];

const journeyChapters = [
  { period: "2016—2020", title: "Foundations in Nepal", summary: "Completed a Bachelor of Science in Computer Science and Information Technology at Tribhuvan University, building the foundation for a career in technology.", reflection: "This is where curiosity became discipline—and where I learned to understand systems before trying to improve them.", details: ["Computer science & IT", "Technical foundations", "Tribhuvan University"] },
  { period: "Dec 2020—Jan 2023", title: "Building digital products", summary: "Worked as an Application Developer at Parentiv across mobile, web, and administration products using modern cloud-backed technologies.", reflection: "Shipping real products taught me that technology succeeds when it is reliable, understandable, and built around the person using it.", details: ["Flutter & Dart", "Firebase & cloud functions", "Android, iOS & web"] },
  { period: "Completed 2024", title: "Studying in Australia", summary: "Moved to Australia in search of opportunity, made Darwin home, and completed a Master of Information Technology while continuing to work.", reflection: "Starting again in a new country demanded adaptability. Study gave me depth; working alongside it gave that knowledge purpose.", details: ["Software Engineering", "Cloud-testing research", "Charles Darwin University"] },
  { period: "Katherine → Darwin", title: "From crew to department leadership", summary: "Started at McDonald’s in Katherine and was promoted to Department Manager at a larger Darwin restaurant—all while studying.", reflection: "Progressing from crew to leadership taught me to stay calm under pressure, develop people, and take ownership when things get difficult.", details: ["Team leadership & training", "Restaurant operations", "Service recovery under pressure"] },
  { period: "Alongside my master’s", title: "Hospitality & community", summary: "Worked in bar operations at Katherine Country Club, strengthening customer service, teamwork, and community connection.", reflection: "Good service begins with reading the room, listening carefully, and making every person feel that their needs matter.", details: ["Customer service", "Bar operations", "Teamwork & communication"] },
  { period: "Feb 2026—Now", title: "My breakthrough into IT", summary: "Joining Emerge IT Solutions became the point where my education, development, leadership, and service experience came together in hands-on IT support.", reflection: "This chapter brings everything together: technical instinct, patient service, practical leadership, and a commitment to keeping people connected.", details: ["Users, endpoints & Microsoft 365", "Site visits & deployments", "Darwin & remote communities"] },
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
  const [selectedJourney, setSelectedJourney] = useState<number | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [themeToggleFloating, setThemeToggleFloating] = useState(false);
  const [testimonialPage, setTestimonialPage] = useState(1);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme-v2");
    if (savedTheme === "light" || savedTheme === "dark") {
      queueMicrotask(() => setTheme(savedTheme));
    }
  }, []);

  useEffect(() => {
    const updateTogglePosition = () => setThemeToggleFloating(window.scrollY > 40);
    updateTogglePosition();
    window.addEventListener("scroll", updateTogglePosition, { passive: true });
    return () => window.removeEventListener("scroll", updateTogglePosition);
  }, []);

  useEffect(() => {
    if (selectedJourney === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedJourney(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedJourney]);

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
  const selectedJourneyChapter = selectedJourney === null ? null : journeyChapters[selectedJourney];
  const resumeHref = theme === "dark" ? "/Prashil-Koirala-Resume.pdf" : "/Prashil-Koirala-Resume-Territory.pdf";

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
          <h1>Calm user support.<br /><em>Reliable endpoints.</em></h1>
          <p className="intro">I&apos;m Prashil Koirala — a user and endpoint support technician helping people stay productive across their devices, accounts, Microsoft 365 services, and everyday connectivity. I bring patient troubleshooting, clear communication, and dependable follow-through to every request.</p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">Explore my work <span>↘</span></a>
            <a className="button text" href={resumeHref} target="_blank" rel="noreferrer">View résumé ↗</a>
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
        <p className="proof-title"><span>Currently supporting</span></p>
        <div className="proof-inner"><div><strong>1,000+</strong><span>Users</span></div><div><strong>2,000+</strong><span>Endpoints</span></div><div><strong>30+</strong><span>Remote locations</span></div><p>Calm support. Clear communication.<br />Reliable outcomes.</p></div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading"><p className="kicker">Selected experience</p><h2>Technology in<br />service of <em>people.</em></h2></div>
        <div className="timeline">
          <article className="job featured">
            <div className="job-topline"><span>01 / CURRENT CHAPTER</span><span>FEB 2026 — NOW</span></div>
            <div className="job-content"><p className="company">Emerge IT</p><h3>User &amp; Endpoint<br />Support Technician</h3><p>Supporting users and endpoints across Darwin and remote East Arnhem Land communities with practical troubleshooting, clear communication, and a focus on keeping essential work moving.</p></div>
            <div className="job-tags" aria-label="Role focus"><span>Endpoint care</span><span>Microsoft 365</span><span>Remote support</span><span>Site deployments</span></div>
          </article>
          <article className="job">
            <div className="job-topline"><span>02</span><span>OCT 2021 — JAN 2023</span></div>
            <div className="job-content"><p className="company">Parentiv</p><h3>Scrum Master</h3><p>Led delivery ceremonies, Jira workflows and stakeholder communication while supporting onboarding, access and internal helpdesk needs.</p></div>
            <div className="job-tags" aria-label="Role focus"><span>Delivery</span><span>Leadership</span><span>Helpdesk</span></div>
          </article>
          <article className="job">
            <div className="job-topline"><span>03</span><span>DEC 2020 — OCT 2021</span></div>
            <div className="job-content"><p className="company">Parentiv</p><h3>Application Developer</h3><p>Built Android, iOS, web and administration experiences with Flutter and Dart, backed by Firebase and Google Cloud.</p></div>
            <div className="job-tags" aria-label="Role focus"><span>Flutter</span><span>Firebase</span><span>Product delivery</span></div>
          </article>
        </div>
      </section>

      <section className="section journey" id="journey">
        <div className="journey-inner">
          <div className="journey-heading">
            <div><p className="kicker">My journey</p><h2>From Nepal<br />to <em>Darwin.</em></h2></div>
            <p>I moved to Australia in search of opportunity—to deepen my education, grow through new challenges, and build a career where technology makes a practical difference for people.</p>
          </div>
          <div className="journey-chapters">
            {journeyChapters.map((chapter, index) => {
              return <button key={chapter.title} type="button" className="journey-card" onClick={() => setSelectedJourney(index)} aria-haspopup="dialog" aria-label={`Open story: ${chapter.title}`}>
                <span className="journey-face journey-front">
                  <span className="journey-meta"><b>{String(index + 1).padStart(2, "0")}</b><small>{chapter.period}</small></span>
                  <span><h3>{chapter.title}</h3><p>{chapter.summary}</p></span>
                  <em>Open chapter ↗</em>
                </span>
              </button>;
            })}
          </div>
          {selectedJourneyChapter && selectedJourney !== null && (
            <div className="journey-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedJourney(null); }}>
              <article className={`journey-story journey-story-${selectedJourney + 1}`} role="dialog" aria-modal="true" aria-labelledby="journey-story-title">
                <button className="journey-story-close" type="button" onClick={() => setSelectedJourney(null)} aria-label="Close journey chapter">×</button>
                <span className="journey-meta"><b>{String(selectedJourney + 1).padStart(2, "0")}</b><small>{selectedJourneyChapter.period}</small></span>
                <div className="journey-story-grid">
                  <div><span className="journey-story-label">My journey</span><h3 id="journey-story-title">{selectedJourneyChapter.title}</h3></div>
                  <div className="journey-story-body"><small>What this chapter built</small><p>{selectedJourneyChapter.reflection}</p><div className="journey-tags">{selectedJourneyChapter.details.map(detail => <span key={detail}>{detail}</span>)}</div></div>
                </div>
              </article>
            </div>
          )}
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
        <div className="credentials-inner"><div className="credential-count"><span>Verified learning</span><strong>64</strong><small>digital credentials</small></div>
        <div className="credential-copy">
          <p className="kicker">ACS + Skillsoft</p>
          <h2>Always learning.<br /><em>Always current.</em></h2>
          <p>My credential wallet reflects continuous development across technical support, modern IT, delivery, and professional effectiveness—issued through Skillsoft and the Australian Computer Society.</p>
          <div className="credential-topics"><span>CompTIA A+ hardware</span><span>Cybersecurity</span><span>Project management</span><span>Agile</span><span>Machine learning</span><span>Career development</span></div>
          <a className="button primary credential-link" href="https://acs-preview.digitalbadges.skillsoft.com/profile/prashilkoirala849784/wallet" target="_blank" rel="noreferrer">View verified badge wallet <span>↗</span></a>
        </div></div>
      </section>

      <section className="section about" id="about">
        <div className="about-inner"><div><p className="kicker">About me</p><h2>Technology works best<br />when people feel <em>supported.</em></h2></div>
        <div className="about-copy">
          <p>I bring together hands-on technical support, software development, and delivery leadership. My support work reaches users across Darwin and remote communities throughout East Arnhem Land, where dependable technology and clear communication make a meaningful difference.</p>
          <p>Based in Darwin, I hold a Master of Information Technology from Charles Darwin University and a Bachelor of Science in Computer Science and Information Technology from Tribhuvan University.</p>
          <p>I&apos;m at my best when I can listen carefully, make a technical problem feel manageable, and leave the person—and the system—in a better place than I found them.</p>
          <div className="about-values" aria-label="How I work"><span>Calm under pressure</span><span>Curious by default</span><span>Reliable follow-through</span></div>
          <div className="education"><div><span>2024</span><strong>Master of Information Technology</strong><small>Charles Darwin University</small></div><div><span>2021</span><strong>BSc Computer Science &amp; IT</strong><small>Tribhuvan University</small></div></div>
        </div></div>
      </section>

      <footer>
        <div className="footer-inner"><p className="kicker light">Have a role or project in mind?</p>
        <h2>Let&apos;s make technology<br /><em>feel effortless.</em></h2>
        <div className="footer-links">
          <a href="mailto:namikazeprashil@gmail.com" aria-label="Email Prashil"><span className="footer-link-icon" aria-hidden="true">✉</span><span className="footer-link-copy"><small>Write to me</small><strong>Email</strong></span><span className="footer-link-arrow" aria-hidden="true">↗</span></a>
          <a href="tel:+61457859515" aria-label="Call Prashil"><span className="footer-link-icon" aria-hidden="true">☎</span><span className="footer-link-copy"><small>Start a conversation</small><strong>Call</strong></span><span className="footer-link-arrow" aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/prashil-koirala-847777a0/" target="_blank" rel="noreferrer" aria-label="Visit Prashil's LinkedIn"><span className="footer-link-icon linkedin-icon" aria-hidden="true">in</span><span className="footer-link-copy"><small>Connect professionally</small><strong>LinkedIn</strong></span><span className="footer-link-arrow" aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-base"><span>Prashil Koirala · Darwin, Australia</span><a href="#top">Back to top ↑</a></div></div>
        <div className="footer-acknowledgement">
          <div className="footer-ack-inner"><p>I acknowledge the Larrakia people as the Traditional Custodians of Darwin, where I live and work, and pay my respects to Elders past and present. I also acknowledge the Traditional Custodians of the lands and waters across the East Arnhem Land communities I support.</p>
          <span>© 2026 Prashil Koirala</span></div>
        </div>
        <section className="support-areas" aria-label="Areas supported">
          <details>
            <summary>
              <span><small>Remote support footprint</small>Areas supported across the Territory</span>
              <strong>30 locations <i aria-hidden="true">+</i></strong>
            </summary>
            <div className="support-areas-grid">
              {["East Arnhem", "Big Rivers", "Katherine", "Victoria Daly"].map(region => <div key={region}>
                <h3>{region}</h3>
                <p>{communities.filter(community => community.region === region).map(community => community.name).join(" · ")}</p>
              </div>)}
            </div>
          </details>
        </section>
      </footer>
    </main>
  );
}
