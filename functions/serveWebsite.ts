Deno.serve(async (req) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Yellow Jumpsuit Consulting LLC — Atlassian Expert. Agile Leader. Problem Solver.</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Oswald:wght@700&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --yellow: #FFD600;
      --magenta: #E91E8C;
      --cyan: #00C9D4;
      --black: #111111;
      --white: #FFFFFF;
      --gray: #F5F5F5;
      --dark-gray: #333333;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; color: var(--black); background: var(--white); }

    /* NAV */
    nav {
      background: var(--black);
      padding: 16px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .nav-logo {
      font-family: 'Oswald', sans-serif;
      font-size: 1.3rem;
      color: var(--yellow);
      letter-spacing: 1px;
    }
    .nav-logo span { color: var(--magenta); }
    nav ul { list-style: none; display: flex; gap: 28px; }
    nav ul a { color: var(--white); text-decoration: none; font-size: 0.9rem; font-weight: 600; letter-spacing: 0.5px; transition: color 0.2s; }
    nav ul a:hover { color: var(--yellow); }

    /* HERO */
    .hero {
      background: var(--black);
      color: var(--white);
      padding: 80px 40px 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 60px;
      flex-wrap: wrap;
    }
    .hero-text { max-width: 520px; }
    .hero-eyebrow {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 3px;
      color: var(--yellow);
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .hero h1 {
      font-family: 'Oswald', sans-serif;
      font-size: 3.2rem;
      line-height: 1.1;
      margin-bottom: 20px;
    }
    .hero h1 span { color: var(--yellow); }
    .hero h1 em { color: var(--magenta); font-style: normal; }
    .hero-tagline {
      font-size: 1.15rem;
      color: var(--cyan);
      font-weight: 600;
      margin-bottom: 24px;
      line-height: 1.5;
    }
    .hero-sub {
      font-size: 1rem;
      color: #ccc;
      line-height: 1.7;
      margin-bottom: 36px;
    }
    .btn-primary {
      background: var(--yellow);
      color: var(--black);
      padding: 14px 32px;
      font-weight: 700;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: background 0.2s, transform 0.1s;
    }
    .btn-primary:hover { background: #f0c800; transform: translateY(-1px); }
    .hero-image { max-width: 420px; width: 100%; }
    .hero-image img { width: 100%; border-radius: 8px; }

    /* CREDENTIALS STRIP */
    .creds-strip {
      background: var(--yellow);
      padding: 18px 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      flex-wrap: wrap;
    }
    .cred-item {
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--black);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .cred-item .dot { width: 8px; height: 8px; background: var(--magenta); border-radius: 50%; }

    /* ABOUT */
    .about {
      padding: 80px 40px;
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      gap: 60px;
      align-items: center;
      flex-wrap: wrap;
    }
    .about-image { max-width: 420px; width: 100%; }
    .about-image img { width: 100%; border-radius: 8px; }
    .about-text { flex: 1; min-width: 280px; }
    .section-label {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--magenta);
      margin-bottom: 12px;
    }
    .about-text h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 2.2rem;
      margin-bottom: 20px;
      line-height: 1.2;
    }
    .about-text h2 span { color: var(--magenta); }
    .about-text p {
      font-size: 1rem;
      line-height: 1.8;
      color: var(--dark-gray);
      margin-bottom: 16px;
    }
    .about-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
    .tag {
      background: var(--black);
      color: var(--yellow);
      padding: 6px 14px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    /* SERVICES */
    .services {
      background: var(--gray);
      padding: 80px 40px;
    }
    .services-inner { max-width: 1100px; margin: 0 auto; }
    .services h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 2.4rem;
      text-align: center;
      margin-bottom: 8px;
    }
    .services h2 span { color: var(--magenta); }
    .services-sub {
      text-align: center;
      color: var(--dark-gray);
      font-size: 1rem;
      margin-bottom: 48px;
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }
    .service-card {
      background: var(--white);
      border-top: 4px solid var(--yellow);
      padding: 32px 28px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .service-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
    .service-icon { font-size: 2rem; margin-bottom: 16px; }
    .service-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; }
    .service-card p { font-size: 0.92rem; color: var(--dark-gray); line-height: 1.7; }
    .service-card ul { margin-top: 12px; padding-left: 18px; }
    .service-card ul li { font-size: 0.88rem; color: var(--dark-gray); line-height: 1.9; }

    /* TOOLS */
    .tools {
      background: var(--black);
      padding: 60px 40px;
    }
    .tools-inner { max-width: 900px; margin: 0 auto; text-align: center; }
    .tools h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 2rem;
      color: var(--white);
      margin-bottom: 8px;
    }
    .tools h2 span { color: var(--yellow); }
    .tools-sub { color: #aaa; font-size: 0.95rem; margin-bottom: 40px; }
    .tools-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
    }
    .tool-badge {
      background: #222;
      border: 1px solid #444;
      color: var(--white);
      padding: 10px 20px;
      font-size: 0.88rem;
      font-weight: 600;
      border-radius: 4px;
      transition: border-color 0.2s, color 0.2s;
    }
    .tool-badge:hover { border-color: var(--yellow); color: var(--yellow); }

    /* PROCESS */
    .process {
      padding: 80px 40px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .process h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 2.4rem;
      text-align: center;
      margin-bottom: 8px;
    }
    .process h2 span { color: var(--cyan); }
    .process-sub { text-align: center; color: var(--dark-gray); margin-bottom: 48px; }
    .process-steps {
      display: flex;
      gap: 0;
      flex-wrap: wrap;
      justify-content: center;
    }
    .process-step {
      flex: 1;
      min-width: 180px;
      max-width: 220px;
      text-align: center;
      padding: 24px 16px;
      position: relative;
    }
    .step-number {
      width: 56px;
      height: 56px;
      background: var(--yellow);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Oswald', sans-serif;
      font-size: 1.4rem;
      font-weight: 700;
      margin: 0 auto 16px;
    }
    .process-step h4 { font-weight: 700; margin-bottom: 8px; font-size: 1rem; }
    .process-step p { font-size: 0.88rem; color: var(--dark-gray); line-height: 1.6; }

    /* CONTACT */
    .contact {
      background: var(--gray);
      padding: 80px 40px;
    }
    .contact-inner {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
    }
    .contact h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 2.4rem;
      margin-bottom: 8px;
    }
    .contact h2 span { color: var(--magenta); }
    .contact-sub { color: var(--dark-gray); font-size: 1rem; margin-bottom: 40px; line-height: 1.6; }
    .contact-form { text-align: left; }
    .form-row { display: flex; gap: 16px; flex-wrap: wrap; }
    .form-group { flex: 1; min-width: 200px; margin-bottom: 20px; }
    .form-group label { display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 6px; letter-spacing: 0.5px; }
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 12px 14px;
      border: 2px solid #ddd;
      font-family: 'Inter', sans-serif;
      font-size: 0.95rem;
      transition: border-color 0.2s;
      background: white;
    }
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--yellow);
    }
    .form-group textarea { min-height: 120px; resize: vertical; }
    .form-submit { width: 100%; padding: 16px; background: var(--black); color: var(--yellow); font-family: 'Oswald', sans-serif; font-size: 1.1rem; font-weight: 700; letter-spacing: 2px; border: none; cursor: pointer; transition: background 0.2s; }
    .form-submit:hover { background: var(--magenta); color: var(--white); }
    .form-message { margin-top: 16px; padding: 14px; font-weight: 600; text-align: center; display: none; }
    .form-message.success { background: #d4edda; color: #155724; }
    .form-message.error { background: #f8d7da; color: #721c24; }

    /* FOOTER */
    footer {
      background: var(--black);
      color: #888;
      text-align: center;
      padding: 40px;
      font-size: 0.85rem;
    }
    footer .footer-logo {
      font-family: 'Oswald', sans-serif;
      font-size: 1.4rem;
      color: var(--yellow);
      margin-bottom: 8px;
    }
    footer .footer-logo span { color: var(--magenta); }
    footer p { margin-top: 8px; line-height: 1.8; }
    footer a { color: var(--cyan); text-decoration: none; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .hero { padding: 60px 24px 48px; gap: 40px; }
      .hero h1 { font-size: 2.4rem; }
      .about { padding: 60px 24px; }
      .services { padding: 60px 24px; }
      nav { padding: 16px 24px; }
      nav ul { gap: 16px; }
      .contact { padding: 60px 24px; }
    }

    /* AI SECTION */
    .ai-section {
      background: var(--black);
      padding: 80px 40px;
    }
    .ai-inner { max-width: 1100px; margin: 0 auto; }
    .ai-section h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 2.4rem;
      color: var(--white);
      text-align: center;
      margin-bottom: 8px;
    }
    .ai-section h2 span { color: var(--cyan); }
    .ai-sub { text-align: center; color: #aaa; font-size: 1rem; margin-bottom: 48px; max-width: 680px; margin-left: auto; margin-right: auto; }
    .ai-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
      margin-bottom: 48px;
    }
    .ai-card {
      background: #1a1a1a;
      border-left: 4px solid var(--cyan);
      padding: 28px 24px;
      transition: transform 0.2s;
    }
    .ai-card:hover { transform: translateY(-4px); }
    .ai-card-icon { font-size: 2rem; margin-bottom: 14px; }
    .ai-card h3 { color: var(--white); font-size: 1rem; font-weight: 700; margin-bottom: 10px; }
    .ai-card p { color: #bbb; font-size: 0.9rem; line-height: 1.7; }
    .ai-principles {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      justify-content: center;
      border-top: 1px solid #333;
      padding-top: 32px;
    }
    .principle {
      color: #ccc;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .principle strong { color: var(--cyan); }
    .principle-dot { width: 8px; height: 8px; background: var(--cyan); border-radius: 50%; flex-shrink: 0; }

    /* PORTFOLIO */
    .portfolio {
      background: var(--white);
      padding: 80px 40px;
    }
    .portfolio-inner { max-width: 1100px; margin: 0 auto; }
    .portfolio h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 2.4rem;
      text-align: center;
      margin-bottom: 8px;
    }
    .portfolio h2 span { color: var(--yellow); }
    .portfolio-sub { text-align: center; color: var(--dark-gray); font-size: 1rem; margin-bottom: 48px; }
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }
    .portfolio-card {
      border: 2px solid #eee;
      padding: 32px 28px;
      position: relative;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .portfolio-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
    .portfolio-card.coming-soon { opacity: 0.85; }
    .cs-badge {
      display: inline-block;
      background: var(--yellow);
      color: var(--black);
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 1.5px;
      padding: 4px 10px;
      margin-bottom: 16px;
    }
    .portfolio-card h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
    .portfolio-card p { font-size: 0.9rem; color: var(--dark-gray); line-height: 1.7; margin-bottom: 16px; }
    .portfolio-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .portfolio-tags span {
      background: var(--gray);
      color: var(--dark-gray);
      font-size: 0.75rem;
      font-weight: 700;
      padding: 4px 10px;
      letter-spacing: 0.5px;
    }

    /* LEAD MAGNET */
    .lead-magnet {
      background: var(--magenta);
      padding: 60px 40px;
    }
    .lead-magnet-inner {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 48px;
      flex-wrap: wrap;
    }
    .lm-text { flex: 1; min-width: 260px; }
    .lm-text h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 2rem;
      color: var(--white);
      margin-bottom: 12px;
    }
    .lm-text p { color: rgba(255,255,255,0.9); font-size: 1rem; line-height: 1.6; }
    .lm-text strong { color: var(--yellow); }
    .lm-form { display: flex; flex-direction: column; gap: 12px; min-width: 280px; flex: 1; }
    .lm-form input {
      padding: 14px 16px;
      font-size: 1rem;
      border: none;
      font-family: 'Inter', sans-serif;
      width: 100%;
    }
    .lm-form button {
      padding: 14px;
      background: var(--yellow);
      color: var(--black);
      font-family: 'Oswald', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 1px;
      border: none;
      cursor: pointer;
      transition: background 0.2s;
    }
    .lm-form button:hover { background: #f0c800; }
    .lm-message { font-size: 0.9rem; color: var(--white); font-weight: 600; display: none; }

  </style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">YELLOW <span>JUMPSUIT</span> CONSULTING</div>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#ai">AI Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>


<!-- AVAILABILITY BANNER -->
<div style="background: var(--cyan); color: var(--black); text-align:center; padding:12px 24px; font-weight:700; font-size:0.85rem; letter-spacing:0.3px;">
  Currently open to full-time / contract Atlassian Administrator roles — and available for short-term consulting projects on the side.
</div>

<!-- HERO -->
<section class="hero">
  <div class="hero-text">
    <div class="hero-eyebrow">✈ Side Consulting · Short-Term Projects · Startups &amp; Small Teams</div>
    <h1>WORK SMARTER.<br/><span>MORE DONE.</span><br/><em>LESS CHAOS.</em></h1>
    <div class="hero-tagline">Here to help you get MORE DONE with LESS CHAOS.</div>
    <p class="hero-sub">
      Helping startups and small teams work smarter through AI, automation, and modern work management. I specialize in Atlassian administration, practical AI adoption, and workflow automation — available for short-term, project-based engagements alongside my full-time work.
    </p>
    <a href="#contact" class="btn-primary">GET HELP NOW →</a>
  </div>
  <div class="hero-image">
    <img src="https://base44.app/api/apps/6a06b8ab87ba6d9137183d05/files/mp/public/6a06b8ab87ba6d9137183d05/341c43915_imessage_media_cdf2c160b193.jpg" alt="Wendy Grapentine - Yellow Jumpsuit Consulting" />
  </div>
</section>

<!-- CREDENTIALS STRIP -->
<div class="creds-strip">
  <div class="cred-item"><span class="dot"></span> Atlassian Community Champion</div>
  <div class="cred-item"><span class="dot"></span> Certified Scrum Master (PSM)</div>
  <div class="cred-item"><span class="dot"></span> 6+ Years Atlassian Admin</div>
  <div class="cred-item"><span class="dot"></span> Full Stack Developer</div>
  <div class="cred-item"><span class="dot"></span> AI & Rovo Integration</div>
  <div class="cred-item"><span class="dot"></span> Side Project · Limited Slots</div>
</div>


<!-- WHO THIS IS FOR -->
<section style="background: var(--gray); padding: 56px 40px; text-align:center;">
  <div style="max-width:720px; margin:0 auto;">
    <div class="section-label" style="text-align:center">Who This Is For</div>
    <h2 style="font-family:'Oswald', sans-serif; font-size:1.8rem; margin-bottom:16px;">Startups &amp; Small Teams Without an Atlassian Admin (Yet)</h2>
    <p style="color:var(--dark-gray); font-size:1rem; line-height:1.7; max-width:640px; margin:0 auto;">
      Yellow Jumpsuit Consulting is project-based, part-time work I do alongside my full-time Atlassian admin role — a handful of short-term engagements at a time. It's built for small businesses that need focused, temporary help getting Jira or Confluence in shape, not an ongoing hire or enterprise contract.
    </p>
  </div>
</section>

<!-- ABOUT -->
<section class="about" id="about">
  <div class="about-image">
    <img src="https://base44.app/api/apps/6a06b8ab87ba6d9137183d05/files/mp/public/6a06b8ab87ba6d9137183d05/9db69d120_imessage_media_4f2ae0503105.jpg" alt="Wendy Grapentine - Atlassian Expert" />
  </div>
  <div class="about-text">
    <div class="section-label">About Wendy</div>
    <h2>Focused Help.<br/><span>Part-Time</span> Hours.</h2>
    <p>
      Hi, I'm Wendy Grapentine — Scrum Master, Atlassian Administrator, former K-12 teacher, and recovering full-stack developer. Yellow Jumpsuit Consulting is my side project: short-term, project-based Atlassian help for startups and small businesses that don't have (or need) a full-time admin yet.
    </p>
    <p>
      My background as a teacher means I don't just set things up and leave — I explain everything clearly, train your team, and make sure they can run it independently. Because tools only work if people actually understand them.
    </p>
    <p>
      I'm an <strong>Atlassian Community Champion</strong>, a certified Professional Scrum Master, and I've been deep in Atlassian tools since 2020. I also help with general tech cleanup and practical AI assistance outside of Atlassian. I take on a limited number of engagements at a time alongside my full-time Atlassian admin work — so if you need a few focused weeks to get your space in shape, that's exactly the kind of project I'm here for.
    </p>
    <div class="about-tags">
      <span class="tag">Jira</span>
      <span class="tag">Confluence</span>
      <span class="tag">JSM</span>
      <span class="tag">Trello</span>
      <span class="tag">Rovo AI</span>
      <span class="tag">Scrum</span>
      <span class="tag">React / JS</span>
      <span class="tag">SharePoint</span>
      <span class="tag">Deskpro</span>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="services" id="services">
  <div class="services-inner">
    <div class="section-label" style="text-align:center">What I Do</div>
    <h2>Solutions Organized <span>Around Your Needs</span></h2>
    <p class="services-sub">Not a list of tools — a set of outcomes. Here's how I help.</p>
    <div class="services-grid">

      <div class="service-card" style="border-top:4px solid var(--yellow);">
        <div class="service-icon">📋</div>
        <h3>Optimize Work</h3>
        <p>Fix the foundation. Clean up and configure your Atlassian tools so they work for your team — not against them.</p>
        <ul>
          <li>Reduce Jira chaos</li>
          <li>Jira Service Management setup</li>
          <li>Confluence knowledge base</li>
          <li>Governance &amp; process improvement</li>
        </ul>
      </div>

      <div class="service-card" style="border-top:4px solid var(--magenta);">
        <div class="service-icon">🤖</div>
        <h3>Adopt AI</h3>
        <p>Introduce AI where it actually helps — practically, safely, without the hype. Your team starts using it, not just hearing about it.</p>
        <ul>
          <li>AI readiness workshops</li>
          <li>Practical tool selection &amp; setup</li>
          <li>Prompt engineering basics</li>
          <li>Atlassian Intelligence &amp; Rovo</li>
          <li>AI productivity coaching</li>
        </ul>
      </div>

      <div class="service-card" style="border-top:4px solid var(--cyan);">
        <div class="service-icon">⚙️</div>
        <h3>Automate Work</h3>
        <p>Find the manual work your team shouldn't be doing — then build the automations to eliminate it, in Jira, JSM, or beyond.</p>
        <ul>
          <li>Eliminate manual work with automation</li>
          <li>AI + business process integration</li>
          <li>Documentation systems</li>
          <li>General tech stack cleanup</li>
        </ul>
      </div>

      <div class="service-card" style="border-top:4px solid var(--dark-gray);">
        <div class="service-icon">🎓</div>
        <h3>Enable Your Team</h3>
        <p>Tools only work if people use them well. I train, coach, and document so your team stays self-sufficient after I'm gone.</p>
        <ul>
          <li>Get teams self-sufficient, fast</li>
          <li>AI adoption workshops</li>
          <li>Scrum &amp; Agile coaching</li>
          <li>Custom training materials</li>
        </ul>
      </div>

    </div>
  </div>
</section>
<!-- PACKAGES -->
<section style="background: var(--white); padding: 70px 40px;">
  <div style="max-width:1100px; margin:0 auto;">
    <div class="section-label" style="text-align:center">Named Engagements</div>
    <h2 style="font-family:'Oswald', sans-serif; font-size:2.2rem; text-align:center; margin-bottom:8px;">Packages, <span style="color:var(--cyan);">Not Guesswork</span></h2>
    <p style="text-align:center; color:var(--dark-gray); font-size:1rem; margin-bottom:48px;">Clear, bounded engagements built to fit around a full-time schedule — yours and mine.</p>
    <div class="services-grid">

      <div class="service-card" style="border-top-color: var(--cyan);">
        <div class="service-icon">🩺</div>
        <h3>Jira Health Check</h3>
        <p style="font-weight:700; color:var(--cyan); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px;">2-Hour Assessment</p>
        <p>A focused deep-dive into your Jira instance. Walk away with a prioritized list of fixes — quick wins and longer-term recommendations, ranked by impact.</p>
      </div>

      <div class="service-card" style="border-top-color: var(--cyan);">
        <div class="service-icon">🧭</div>
        <h3>Workflow Cleanup Sprint</h3>
        <p style="font-weight:700; color:var(--cyan); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px;">1–2 Week Project</p>
        <p>Reduce Jira chaos fast. I rebuild workflows, fields, and permissions around how your team actually works — not how the tool defaulted.</p>
      </div>

      <div class="service-card" style="border-top-color: var(--cyan);">
        <div class="service-icon">🚀</div>
        <h3>JSM Quick Start</h3>
        <p style="font-weight:700; color:var(--cyan); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px;">Days, Not Months</p>
        <p>Get your service desk live — portal, SLAs, request types, and intake — so customers get fast, organized support from day one.</p>
      </div>

      <div class="service-card" style="border-top-color: var(--cyan);">
        <div class="service-icon">⚡</div>
        <h3>Automation Audit</h3>
        <p style="font-weight:700; color:var(--cyan); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px;">Short-Term Project</p>
        <p>Find where manual work can disappear. I map out repetitive tasks across Jira, Confluence, and beyond, then build the automations to eliminate them.</p>
      </div>

    </div>
  </div>
</section>

<!-- APPROACH -->
<section style="background: var(--black); color: var(--white); padding: 70px 40px;">
  <div style="max-width:800px; margin:0 auto; text-align:center;">
    <div class="section-label" style="text-align:center; color:var(--yellow);">My Approach</div>
    <h2 style="font-family:'Oswald', sans-serif; font-size:2.2rem; margin-bottom:24px;">Technology is only <span style="color:var(--cyan);">part of the solution.</span></h2>
    <p style="font-size:1.05rem; line-height:1.8; color:#ddd;">
      My goal is to help organizations simplify work, reduce busywork, and give teams practical tools they can actually use. Whether that's optimizing Jira, introducing AI safely, or automating repetitive processes — I focus on solutions that improve the way people work, not just the technology they use.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#aaa; margin-top:16px;">
      My background as a teacher shapes everything I do. I don't just set things up and leave — I make sure your team understands why it works and can maintain it independently.
    </p>
  </div>
</section>

<!-- TOOLS -->
<section class="tools">
  <div class="tools-inner">
    <div class="section-label" style="color:#888; letter-spacing:3px; font-size:0.8rem; font-weight:700; text-transform:uppercase; margin-bottom:12px">Tools & Platforms</div>
    <h2>Expert in the <span>Tools You Use</span></h2>
    <p class="tools-sub">Deep hands-on experience across the full Atlassian ecosystem and beyond.</p>
    <div class="tools-list">
      <div class="tool-badge">Jira Software</div>
      <div class="tool-badge">Jira Service Management</div>
      <div class="tool-badge">Jira Product Discovery</div>
      <div class="tool-badge">Confluence</div>
      <div class="tool-badge">Trello</div>
      <div class="tool-badge">Bitbucket</div>
      <div class="tool-badge">Atlassian Rovo AI</div>
      <div class="tool-badge">SharePoint</div>
      <div class="tool-badge">Deskpro</div>
      <div class="tool-badge">React / JavaScript</div>
      <div class="tool-badge">MongoDB</div>
      <div class="tool-badge">Scrum / Agile</div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="process">
  <div class="section-label" style="text-align:center">How It Works</div>
  <h2>Simple Process.<br/><span>Real Results.</span></h2>
  <p class="process-sub">No long contracts. No confusion. Just clear help from someone who knows what they're doing.</p>
  <div class="process-steps">
    <div class="process-step">
      <div class="step-number">1</div>
      <h4>Connect</h4>
      <p>Fill out the form and tell me what's going on. Free 30-min discovery call.</p>
    </div>
    <div class="process-step">
      <div class="step-number">2</div>
      <h4>Diagnose</h4>
      <p>I audit your setup and map out exactly what needs to happen.</p>
    </div>
    <div class="process-step">
      <div class="step-number">3</div>
      <h4>Execute</h4>
      <p>I parachute in and get it done — clean, documented, tested.</p>
    </div>
    <div class="process-step">
      <div class="step-number">4</div>
      <h4>Train</h4>
      <p>Your team learns the new system so it sticks long after I'm gone.</p>
    </div>
    <div class="process-step">
      <div class="step-number">5</div>
      <h4>Improve</h4>
      <p>Continuous support available — I'm always just a message away.</p>
    </div>
  </div>
</section>


<!-- AI SERVICES -->
<section class="ai-section" id="ai">
  <div class="ai-inner">
    <div class="section-label" style="text-align:center; color: var(--cyan);">AI + Atlassian</div>
    <h2>Incorporating AI <span>Thoughtfully</span></h2>
    <p class="ai-sub">AI isn't magic — but applied with intention, it changes everything. I design systems where AI amplifies human work without replacing human judgment.</p>
    <div class="ai-grid">
      <div class="ai-card">
        <div class="ai-card-icon">&#x1F9E0;</div>
        <h3>Intelligent Workflow Design</h3>
        <p>I architect AI-powered workflows across Jira, JSM, and Jira Product Discovery — using agents, RAG (Retrieval-Augmented Generation), and MCP for intelligent request routing. The AI does the heavy lifting; your team stays in control.</p>
      </div>
      <div class="ai-card">
        <div class="ai-card-icon">&#x1F91D;</div>
        <h3>Human-in-the-Loop Approval Gates</h3>
        <p>Good AI design doesn't remove humans from decisions — it gets them to the right decision faster. I build approval gates that let AI handle triage, classification, and drafts while humans review and sign off on what matters.</p>
      </div>
      <div class="ai-card">
        <div class="ai-card-icon">&#x1F517;</div>
        <h3>Agent + MCP Integration</h3>
        <p>From Atlassian Rovo to custom AI agents, I connect your tools using Model Context Protocol (MCP) so your systems share context intelligently — no more copy-pasting between tools or lost tribal knowledge.</p>
      </div>
      <div class="ai-card">
        <div class="ai-card-icon">&#x1F4CA;</div>
        <h3>RAG-Powered Knowledge Systems</h3>
        <p>Turn your Confluence spaces and documentation into a living knowledge base that AI can actually query. Your team stops searching and starts asking — and gets real answers from your own content.</p>
      </div>
    </div>
    <div class="ai-principles">
      <div class="principle"><span class="principle-dot"></span><strong>Practical over flashy</strong> — AI that solves a real problem, not a demo</div>
      <div class="principle"><span class="principle-dot"></span><strong>Transparent by design</strong> — your team always knows what the AI is doing and why</div>
      <div class="principle"><span class="principle-dot"></span><strong>Incrementally adopted</strong> — we start small, prove value, then scale</div>
    </div>
  </div>
</section>

<!-- PORTFOLIO -->
<section class="portfolio" id="portfolio">
  <div class="portfolio-inner">
    <div class="section-label" style="text-align:center">Portfolio</div>
    <h2>Work That <span>Speaks for Itself</span></h2>
    <p class="portfolio-sub">Real projects, real results. Case studies and examples coming soon.</p>
    <div class="portfolio-grid">
      <div class="portfolio-card coming-soon">
        <div class="cs-badge">COMING SOON</div>
        <h3>JSM + AI Agent Integration</h3>
        <p>End-to-end service request routing using AI agents, MCP, and human approval gates built on Jira Service Management.</p>
        <div class="portfolio-tags"><span>JSM</span><span>AI Agents</span><span>MCP</span></div>
      </div>
      <div class="portfolio-card coming-soon">
        <div class="cs-badge">COMING SOON</div>
        <h3>Jira Product Discovery Workflow</h3>
        <p>AI-assisted idea scoring, prioritization, and roadmap automation connecting JPD to Jira Software delivery.</p>
        <div class="portfolio-tags"><span>JPD</span><span>RAG</span><span>Automation</span></div>
      </div>
      <div class="portfolio-card coming-soon">
        <div class="cs-badge">COMING SOON</div>
        <h3>Confluence RAG Knowledge Base</h3>
        <p>Transformed a siloed Confluence space into a queryable knowledge system with Rovo AI integration.</p>
        <div class="portfolio-tags"><span>Confluence</span><span>Rovo</span><span>RAG</span></div>
      </div>
    </div>
  </div>
</section>

<!-- LEAD MAGNET -->
<section class="lead-magnet">
  <div class="lead-magnet-inner">
    <div class="lm-text">
      <div class="section-label" style="color: var(--yellow);">Free Resource</div>
      <h2>Not Sure Where to Start?</h2>
      <p>Download my free guide: <strong>"5 Signs Your Atlassian Setup Is Holding You Back"</strong> — and what to do about each one.</p>
    </div>
    <form class="lm-form" id="leadMagnetForm">
      <input type="email" id="lmEmail" placeholder="your@email.com" required />
      <button type="submit">SEND ME THE GUIDE</button>
      <div class="lm-message" id="lmMessage"></div>
    </form>
  </div>
</section>

<!-- CONTACT -->
<section class="contact" id="contact">
  <div class="contact-inner">
    <div class="section-label">Get In Touch</div>
    <h2>Ready to Get <span>More Done?</span></h2>
    <p class="contact-sub">
      Tell me what's going on with your Atlassian tools and I'll get back to you within 24 hours. First conversation is always free.
    </p>
    <form class="contact-form" id="contactForm">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Your Name *</label>
          <input type="text" id="name" name="name" placeholder="Jane Smith" required />
        </div>
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" placeholder="jane@company.com" required />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="company">Company</label>
          <input type="text" id="company" name="company" placeholder="Acme Corp" />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="(555) 555-5555" />
        </div>
      </div>
      <div class="form-group">
        <label for="project_type">What do you need help with?</label>
        <select id="project_type" name="project_type">
          <option value="">Select a service...</option>
          <option value="Jira Setup/Cleanup">Jira Setup / Cleanup</option>
          <option value="Confluence Setup/Cleanup">Confluence Setup / Cleanup</option>
          <option value="Jira Service Management">Jira Service Management</option>
          <option value="Trello">Trello</option>
          <option value="Bitbucket">Bitbucket</option>
          <option value="SharePoint">SharePoint</option>
          <option value="Deskpro">Deskpro</option>
          <option value="Training/Workshop">Training / Workshop</option>
          <option value="AI/Rovo Integration">AI / Rovo Integration</option>
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>
      <div class="form-group">
        <label for="message">Tell me about your situation *</label>
        <textarea id="message" name="message" placeholder="What tools are you using? What's broken or overwhelming? What does success look like?" required></textarea>
      </div>
      <button type="submit" class="form-submit">SEND MESSAGE — LET'S TALK →</button>
      <div class="form-message" id="formMessage"></div>
    </form>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">YELLOW <span>JUMPSUIT</span> CONSULTING LLC</div>
  <p>Atlassian Expert · Scrum Master · Problem Solver</p>
  <p style="margin-top:16px; font-size:0.8rem;">© 2026 Yellow Jumpsuit Consulting LLC. All rights reserved.</p>
</footer>

<script>
  document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('.form-submit');
    const msg = document.getElementById('formMessage');
    btn.textContent = 'SENDING...';
    btn.disabled = true;

    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      company: document.getElementById('company').value,
      phone: document.getElementById('phone').value,
      project_type: document.getElementById('project_type').value,
      message: document.getElementById('message').value,
    };

    try {
      const res = await fetch('https://iggy-37183d05.base44.app/functions/submitContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        msg.textContent = '🎉 Message sent! Wendy will be in touch within 24 hours.';
        msg.className = 'form-message success';
        msg.style.display = 'block';
        this.reset();
      } else {
        throw new Error(result.error || 'Something went wrong.');
      }
    } catch (err) {
      msg.textContent = '❌ ' + err.message;
      msg.className = 'form-message error';
      msg.style.display = 'block';
    }

    btn.textContent = 'SEND MESSAGE — LET\\'S TALK →';
    btn.disabled = false;
  });

  // Lead Magnet Form
  document.getElementById('leadMagnetForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const msg = document.getElementById('lmMessage');
    const email = document.getElementById('lmEmail').value;
    btn.textContent = 'SENDING...';
    btn.disabled = true;
    // For now, just show a thank-you message (guide delivery coming soon)
    setTimeout(() => {
      msg.textContent = 'Thanks! The guide will be on its way shortly.';
      msg.style.display = 'block';
      btn.textContent = 'SEND ME THE GUIDE';
      btn.disabled = false;
      document.getElementById('lmEmail').value = '';
    }, 800);
  });

</script>

</body>
</html>

`;
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});