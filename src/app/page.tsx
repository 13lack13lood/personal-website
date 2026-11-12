import type { CSSProperties } from "react";

/* Custom properties (--i, --a, --b, --d, --w) drive the layout and animation of the
   charts and diagrams in styles: this keeps TypeScript happy with them. */
const v = (o: Record<string, string>) => o as CSSProperties;

/* eslint-disable @next/next/no-img-element -- plain <img> on purpose: the CSS sizes the
   portrait and the page is static */
export default function Home() {
  return (
    <>
        <a className="skip" href="#main">Skip to content</a>

        <header className="nav" id="top">
          <div className="wrap nav-inner">
            <a className="wordmark" href="#top"><span>Harry<span className="wm-last"> Zhu</span></span></a>
            <nav className="nav-links" aria-label="Sections">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
              <span className="nav-ind"></span>
            </nav>
            <button className="theme" type="button" aria-pressed="false" aria-label="Light theme" title="Switch to light theme">
              <svg className="ti" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                <mask id="ti-bite">
                  <rect width="24" height="24" fill="#fff"/>
                  <circle className="ti-bite" cx="17.5" cy="6.5" r="6.4" fill="#000"/>
                </mask>
                <circle className="ti-core" cx="12" cy="12" r="7.6" fill="currentColor" mask="url(#ti-bite)"/>
                <path className="ti-rays" d="M12 1.6v2.3M12 20.1v2.3M1.6 12h2.3M20.1 12h2.3M4.65 4.65l1.62 1.62M17.73 17.73l1.62 1.62M4.65 19.35l1.62-1.62M17.73 6.27l1.62-1.62" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </header>

        <main id="main">
          <section className="hero" aria-labelledby="hello">
            <div className="wrap grid hero-grid">
              <h1 className="hello" id="hello"><span className="hello-line"><span className="w" style={v({"--i": "0"})}>Hi,</span> <span className="w" style={v({"--i": "1"})}>my</span> <span className="w" style={v({"--i": "2"})}>name</span></span> <span className="hello-line"><span className="w" style={v({"--i": "3"})}>is</span> <span className="w" style={v({"--i": "4"})}>Harry.</span></span></h1>
              <div className="hero-side">
                <p className="intro">University of Waterloo Data Science ’28</p>
                <ul className="links">
                  <li><a className="tl" href="/resume.pdf" target="_blank" rel="noopener noreferrer"><span>Resume</span><span className="sr"> (PDF, opens in a new tab)</span></a></li>
                  <li><a className="tl" href="https://github.com/13lack13lood" target="_blank" rel="noopener noreferrer"><span>GitHub</span><span className="sr"> (opens in a new tab)</span></a></li>
                  <li><a className="tl" href="https://www.linkedin.com/in/harryzhu409/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span className="sr"> (opens in a new tab)</span></a></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section about" id="about" aria-labelledby="about-h">
            <div className="wrap grid">
              <h2 className="rail-h" id="about-h">About</h2>
              <div className="about-body">
                <p className="lead">Most of my work comes down to making systems faster and more efficient.</p>
                <p>At Databricks I worked on real-time streaming for Delta Lake, and at AWS on low-latency routing in DynamoDB. On my own time I build vector search in Rust. This fall I’m in Seattle with Amazon Prime Air, building an LLM pipeline that turns drone safety requirements into verification code.</p>
                <p>I’m a data science student at the University of Waterloo, graduating in April&nbsp;2028. Away from a keyboard I play piano, powerlift, and play poker with friends.</p>
              </div>
              <figure className="portrait">
                <img src="/harry.jpg" width="667" height="1000" loading="lazy" decoding="async" alt="Harry Zhu in glasses and a black hoodie, smiling and looking off to one side." />
              </figure>
            </div>
          </section>

          <section className="section experience" id="experience" aria-labelledby="exp-h">
            <div className="wrap">
              <div className="grid sec-head">
                <h2 className="rail-h" id="exp-h">Experience</h2>
                <button className="expand-all" type="button" aria-expanded="false" aria-controls="more-primeair more-databricks more-aws" hidden>Expand all</button>
              </div>
              <ol className="jobs">
                <li className="job" id="job-primeair">
                  <p className="job-when"><time dateTime="2026-09">Sept&nbsp;2026</time>&nbsp;– <time dateTime="2026-12">Dec&nbsp;2026</time><span className="job-now">Current</span></p>
                  <div className="job-main">
                    <h3 className="job-co">Amazon Prime Air</h3>
                    <p className="job-role">Software Development Engineer</p>
                    <ul className="langs" aria-label="Languages">
                      <li>Python</li>
                      <li>C++</li>
                    </ul>
                    <p className="job-sum">I’m building an LLM agent pipeline that turns drone flight requirements into verification code that runs on flight logs. I’m also working with the Stanford and NASA researchers behind ARTEMIS on an approach that aims to take the human out of the loop.</p>
                    <button className="job-toggle" type="button" aria-expanded="true" aria-controls="more-primeair" hidden><span className="pm"></span>Details<span className="sr"> for Amazon Prime Air</span></button>
                    <div className="job-more" id="more-primeair">
                      <div>
                        <ul>
                          <li>Built an LLM agent pipeline that turns flight requirements into verification code run on drone flight logs, scaling translation to 2,000+ safety requirements.</li>
                          <li>Worked with the Stanford and NASA researchers behind <a className="il" href="https://www-cs.stanford.edu/people/trippel/pubs/mendoza_ICSE26.pdf" target="_blank" rel="noopener noreferrer">ARTEMIS (ICSE&nbsp;2026)<span className="sr"> (PDF, opens in a new tab)</span></a> on a modified approach that aims to take the human out of the loop, using a <span className="nw">test-case</span> oracle to eliminate ambiguities.</li>
                          <li>Extended the pipeline to generate C++ runtime monitors that are compiled into the drone’s flight software, and validated them in <span className="nw">hardware-in-the-loop</span> simulations.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="job-place">Seattle, WA</p>
                </li>
                <li className="job" id="job-databricks">
                  <p className="job-when"><time dateTime="2026-05">May&nbsp;2026</time>&nbsp;– <time dateTime="2026-08">Aug&nbsp;2026</time></p>
                  <div className="job-main">
                    <h3 className="job-co">Databricks</h3>
                    <p className="job-role">Software Engineer</p>
                    <ul className="langs" aria-label="Languages">
                      <li>Scala</li>
                      <li>Java</li>
                    </ul>
                    <p className="job-sum">I built Real-time mode support for Delta Lake, bringing sub-second Spark Structured Streaming to transactional Delta tables, beyond the message-queue sources it supported before. I also architected a distributed load-balancing and scheduling algorithm that spreads processing work evenly across Spark clusters.</p>
                    <button className="job-toggle" type="button" aria-expanded="true" aria-controls="more-databricks" hidden><span className="pm"></span>Details<span className="sr"> for Databricks</span></button>
                    <div className="job-more" id="more-databricks">
                      <div>
                        <ul>
                          <li>Developed Real-time mode support for Delta Lake, enabling low-latency Spark Structured Streaming over transactional Delta tables and expanding Real-time mode beyond traditional message-queue sources.</li>
                          <li>Reduced Delta streaming latency by 1,640&nbsp;ms (66%) at P50 and 2,790&nbsp;ms (41%) at P99 versus microbatch mode.</li>
                          <li>Decreased compute cost by up to 32% for fixed-throughput workloads versus microbatch mode, and reduced ZeroBus ingest latency, letting Delta Lake replace Kafka workloads at roughly 50% of the cost.</li>
                          <li>Architected a high-performance distributed load-balancing and scheduling algorithm that partitions processing work across Spark clusters and reduces load skew between workers.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="job-place">Mountain View, CA</p>
                </li>
                <li className="job" id="job-aws">
                  <p className="job-when"><time dateTime="2025-05">May&nbsp;2025</time>&nbsp;– <time dateTime="2025-12">Dec&nbsp;2025</time></p>
                  <div className="job-main">
                    <h3 className="job-co">Amazon Web Services</h3>
                    <p className="job-role">Software Development Engineer, DynamoDB</p>
                    <ul className="langs" aria-label="Languages">
                      <li>Rust</li>
                      <li>Java</li>
                    </ul>
                    <p className="job-sum">I worked on DynamoDB’s routing layer, designing an auto re-enablement system for a low-latency routing mechanism and extending it to more data-plane APIs. I also built a dynamic routing algorithm that sends traffic to the fastest target.</p>
                    <button className="job-toggle" type="button" aria-expanded="true" aria-controls="more-aws" hidden><span className="pm"></span>Details<span className="sr"> for Amazon Web Services</span></button>
                    <div className="job-more" id="more-aws">
                      <div>
                        <ul>
                          <li>Designed an auto re-enablement system for a low-latency routing mechanism in DynamoDB’s routing layer, increasing coverage from 73.5% to 90.8% across all regions.</li>
                          <li>Extended the mechanism to more data-plane APIs, delivering a 750&nbsp;μs (~38.3%) reduction at P50 and a 1,870&nbsp;μs (~15.8%) reduction at P99 across all regions.</li>
                          <li>Developed a dynamic routing algorithm that computes a moving average of observed network latencies to route traffic to the fastest target.</li>
                          <li>Redesigned a reverse-bias back-off algorithm that detects overloaded targets and redistributes traffic, supporting more Availability Zones and staying stable under high load.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="job-place">Seattle, WA</p>
                </li>
                <li className="job job-earlier">
                  <p className="job-when">Earlier</p>
                  <div className="job-main">
                    <div className="early">
                      <div className="early-head"><h3 className="job-co job-co-sm">TD Bank</h3><p className="early-place">Toronto, ON</p></div>
                      <p className="job-role">Software Developer, portfolio analytics team</p>
                    </div>
                    <div className="early">
                      <div className="early-head"><h3 className="job-co job-co-sm">BTNX</h3><p className="early-place">Toronto, ON</p></div>
                      <p className="job-role">Full-stack Developer</p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="section projects" id="projects" aria-labelledby="proj-h">
            <div className="wrap">
              <div className="grid sec-head">
                <h2 className="rail-h" id="proj-h">Projects</h2>
              </div>
              <ul className="feats">
                <li className="feat">
                  <h3 className="feat-name"><a href="https://github.com/13lack13lood/ColdIVF" target="_blank" rel="noopener noreferrer"><span className="u">ColdIVF</span><svg className="ext" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M5.5 3.5h7v7M12.5 3.5l-9 9"/></svg><span className="sr"> on GitHub (opens in a new tab)</span></a></h3>
                  <p className="feat-result">The fastest vector index for cold queries: at least 2.6× faster reads than faiss, DiskANN, LanceDB, Qdrant, usearch, AsterVec and SymphonyQG, with 3.4× less memory.</p>
                  <p className="feat-desc">A single-file IVF index in Rust with dual quantization (1-bit RaBitQ and 4-bit codes), batched async disk reads, SIMD scans, durable writes, and Python bindings.</p>
                  <div className="feat-meta"><ul className="langs" aria-label="Languages and technologies"><li>Rust</li><li>Python</li><li>NEON</li><li>AVX</li></ul><a className="repo" href="https://github.com/13lack13lood/ColdIVF" target="_blank" rel="noopener noreferrer"><svg className="gh" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="u">GitHub</span><svg className="ext" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M5.5 3.5h7v7M12.5 3.5l-9 9"/></svg><span className="sr"> repository for ColdIVF (opens in a new tab)</span></a></div>
                  <figure className="fig fig--cold">
                    <div className="chart" role="img" aria-label="Time per cold query: ColdIVF takes at most 1/2.6 of the time of the fastest of the seven compared indexes, so it reads at least 2.6 times faster. Memory: ColdIVF uses 3.4 times less.">
                      <p className="chart-title" aria-hidden="true">Time per cold query <span className="chart-note">shorter is faster</span></p>
                      <div className="rows" aria-hidden="true">
                        <div className="row row--lit row--fast" style={v({"--w": "0.3846"})}>
                          <span className="row-label">ColdIVF</span>
                          <span className="row-track"><span className="row-fill"></span><span className="row-end"></span></span>
                          <span className="row-value"><span className="nw">≥&nbsp;2.6×</span> faster</span>
                        </div>
                        <div className="row row--slow" style={v({"--w": "1"})}>
                          <span className="row-label">Fastest compared</span>
                          <span className="row-track"><span className="row-fill"></span><span className="row-end"></span></span>
                          <span className="row-value">1×</span>
                        </div>
                      </div>
                      <p className="chart-title" aria-hidden="true">Memory</p>
                      <div className="rows rows--cells" aria-hidden="true">
                        <div className="row row--lit">
                          <span className="row-label">ColdIVF</span>
                          <span className="cells"><i style={v({"--i": "0"})}></i><i style={v({"--i": "1"})}></i><i style={v({"--i": "2"})}></i><i style={v({"--i": "3"})}></i><i style={v({"--i": "4"})}></i><i style={v({"--i": "5"})}></i><i style={v({"--i": "6"})}></i><i style={v({"--i": "7"})}></i><i style={v({"--i": "8"})}></i><i style={v({"--i": "9"})}></i></span>
                          <span className="row-value">3.4× less</span>
                        </div>
                        <div className="row">
                          <span className="row-label">Compared</span>
                          <span className="cells"><i style={v({"--i": "0"})}></i><i style={v({"--i": "1"})}></i><i style={v({"--i": "2"})}></i><i style={v({"--i": "3"})}></i><i style={v({"--i": "4"})}></i><i style={v({"--i": "5"})}></i><i style={v({"--i": "6"})}></i><i style={v({"--i": "7"})}></i><i style={v({"--i": "8"})}></i><i style={v({"--i": "9"})}></i><i style={v({"--i": "10"})}></i><i style={v({"--i": "11"})}></i><i style={v({"--i": "12"})}></i><i style={v({"--i": "13"})}></i><i style={v({"--i": "14"})}></i><i style={v({"--i": "15"})}></i><i style={v({"--i": "16"})}></i><i style={v({"--i": "17"})}></i><i style={v({"--i": "18"})}></i><i style={v({"--i": "19"})}></i><i style={v({"--i": "20"})}></i><i style={v({"--i": "21"})}></i><i style={v({"--i": "22"})}></i><i style={v({"--i": "23"})}></i><i style={v({"--i": "24"})}></i><i style={v({"--i": "25"})}></i><i style={v({"--i": "26"})}></i><i style={v({"--i": "27"})}></i><i style={v({"--i": "28"})}></i><i style={v({"--i": "29"})}></i><i style={v({"--i": "30"})}></i><i style={v({"--i": "31"})}></i><i style={v({"--i": "32"})}></i><i style={v({"--i": "33"})}></i></span>
                          <span className="row-value">1×</span>
                        </div>
                      </div>
                    </div>
                    <div className="viz" aria-hidden="true"><svg className="vz" viewBox="0 0 300 168"><path className="vz-fill a-fade" style={v({"--d": "0.25s"})} d="M125.3 103.1L120.9 64.7L135.6 54.8L169.3 62.7L166.1 104.4Z"/><path className="vz-fill a-fade" style={v({"--d": "0.53s"})} d="M69.8 90L74.3 56.9L120.9 64.7L125.3 103.1L113.4 112.2Z"/><path className="vz-fill a-fade" style={v({"--d": "0.81s"})} d="M76.6 2L124.8 2L135.6 54.8L120.9 64.7L74.3 56.9L68.5 43.8Z"/><path className="vz-edge" d="M76.6 2L68.5 43.8M68.5 43.8L2 54.8M124.8 2L135.6 54.8M135.6 54.8L120.9 64.7M120.9 64.7L74.3 56.9M74.3 56.9L68.5 43.8M173.7 2L178.2 54.9M178.2 54.9L169.3 62.7M169.3 62.7L135.6 54.8M237.2 2L224 59.7M224 59.7L178.2 54.9M298 76.4L227.8 65.1M227.8 65.1L224 59.7M74.3 56.9L69.8 90M69.8 90L52.3 108.5M52.3 108.5L2 108.3M120.9 64.7L125.3 103.1M125.3 103.1L113.4 112.2M113.4 112.2L69.8 90M169.3 62.7L166.1 104.4M166.1 104.4L125.3 103.1M227.8 65.1L218.2 108.9M218.2 108.9L174.4 116M174.4 116L166.1 104.4M298 128.2L225.4 116.4M225.4 116.4L218.2 108.9M52.3 108.5L73.9 166M113.4 112.2L109.4 166M174.4 116L165.2 166M225.4 116.4L220.1 166"/><path className="vz-dot" d="M46 26.8h0M8.7 9.8h0M57.9 45.1h0M55.2 6.5h0M55.9 9.8h0M29 45.3h0M36.1 18.9h0M49.3 45.8h0M33.2 29.6h0M62.6 38.3h0M128.5 9.1h0M154.6 57.2h0M168 51.7h0M177.1 48.4h0M175.7 46.9h0M155.2 17h0M144.7 33.1h0M187.6 8.2h0M195.3 31.3h0M205.7 46.2h0M230.4 31.3h0M219.5 32.6h0M186.6 18.1h0M206.2 55.4h0M225.6 39.7h0M197.5 54.7h0M206.2 52.8h0M182.9 44.4h0M244.4 12.2h0M269 56.3h0M241.7 6.9h0M289.1 15.4h0M280.5 29.9h0M235.2 58h0M248.7 6.4h0M268.6 48.3h0M288.1 18.9h0M245.8 11.8h0M263.2 50h0M259.6 10.8h0M271.1 48.6h0M287 15.8h0M278.1 32h0M292.3 37.7h0M266.9 11.9h0M243.5 48.3h0M227.8 48.9h0M254.4 8.4h0M56.4 61.7h0M39.7 88.7h0M52.3 67.8h0M60.7 92.6h0M56.2 69.2h0M35.3 50.8h0M22.6 75.7h0M30.6 65.5h0M36.6 81.3h0M55.2 86.8h0M27.5 98.9h0M26.1 94.9h0M50.7 50.2h0M41.9 92.4h0M70.7 82.8h0M7.9 81.2h0M35.9 105h0M40.3 91.3h0M58.7 57h0M24.3 68.2h0M52.9 56.6h0M34.1 58.2h0M50 77.2h0M7.8 105h0M18.4 74.4h0M214.6 91.7h0M218.7 92.1h0M184.2 98.8h0M205.7 67h0M215 103h0M196 57.1h0M178.3 111.3h0M211.1 85.8h0M182.7 101.9h0M178.6 111.3h0M200.3 103.8h0M221.2 86.9h0M207.8 106.8h0M181.4 66.2h0M218.7 65.3h0M284.6 91.6h0M254.1 120.8h0M281.2 82.3h0M234 116.9h0M236.4 88.7h0M235.9 70.3h0M229.1 73.1h0M248.2 83.3h0M274.1 91.9h0M224.9 103.3h0M245.6 81.3h0M272.7 111.4h0M233.3 113.8h0M247.9 106.5h0M271.3 81.5h0M228.8 116.4h0M255.1 105.5h0M225.6 75.7h0M293.9 89.4h0M226.3 90.2h0M275.7 114.4h0M31.4 125.8h0M46.1 161.1h0M36.9 142.7h0M32.1 112.6h0M25.4 118.4h0M46.3 118.7h0M54.2 123.4h0M54.4 126.5h0M36.7 160.2h0M15.6 152.7h0M18.3 115.4h0M6.2 117.4h0M7.2 158.3h0M60.8 104.6h0M86.1 159.9h0M66.7 132.9h0M72.2 97.1h0M108.8 149.6h0M90.5 143.9h0M71.2 158.7h0M93.3 113.9h0M58.4 117.9h0M106.1 129.8h0M75.6 121.1h0M70.9 139.4h0M95.7 152.4h0M78.9 120.3h0M70.8 124.9h0M102 141h0M141 153.6h0M163.8 134.9h0M166.6 134.4h0M129.8 106.2h0M149.7 120.2h0M157.9 127.1h0M143.4 135.5h0M122.4 158h0M131.8 114.8h0M118.6 117.3h0M164.8 144.5h0M158.7 147.6h0M171.8 116h0M128.8 116.9h0M118.8 133.2h0M161.6 108.9h0M126.6 153.5h0M160.4 152.7h0M136.6 110.8h0M171.6 127.2h0M157.8 123.4h0M152.3 157.6h0M162 118.1h0M201.9 156.7h0M185.8 149.7h0M208.5 113.4h0M203.1 149.7h0M194.7 149.5h0M193 145h0M177.1 156.4h0M212.5 161.2h0M193.2 131.6h0M185.8 135.5h0M195.6 160.5h0M181.5 120.9h0M170.8 159.8h0M181.6 139.5h0M216.9 156.5h0M213.8 137.9h0M208.2 113.3h0M174.1 119.8h0M282.6 136.7h0M223.6 158.4h0M277.7 136h0M235.2 139.2h0M244.1 135.1h0M272.7 128.3h0M244.7 156.2h0M268.1 139.7h0M268 157.3h0M234.6 118.3h0M243.2 141.1h0M241.8 121.6h0M225.9 118.7h0M258.4 140.1h0M275.1 144.5h0M228.4 141h0M289.9 156h0M241.2 130.5h0"/><path className="vz-dot vz-dot-hi a-fade" style={v({"--d": "0.30s"})} d="M165.5 103h0M152 94.4h0M143.6 88h0M132.4 80.5h0M164.8 74.1h0M139.6 93.3h0M156.9 67.3h0M131.9 90.9h0M154.6 72.5h0M155.6 74.7h0M124.9 77.9h0"/><path className="vz-dot vz-dot-hi a-fade" style={v({"--d": "0.58s"})} d="M112.3 72.6h0M101.2 61.6h0M78.4 62.4h0M103.5 89.8h0M87.4 90h0M86.3 82.9h0M84.3 83.6h0M94.9 68.9h0M75.6 83.5h0M90.7 92h0M111.8 109.2h0"/><path className="vz-dot vz-dot-hi a-fade" style={v({"--d": "0.86s"})} d="M103 12.8h0M96 42.9h0M112.1 62.2h0M116.5 52.1h0M97.4 46.5h0M98.9 20.8h0M74.8 37.9h0M112.7 14.7h0M100.5 22.8h0M112.5 7.4h0M128.6 53h0"/><path className="vz-cent" d="M27.8 24.6h0M113.4 41.2h0M150.7 33.5h0M201.7 29.2h0M257.4 42h0M36.2 75.1h0M106.2 84.5h0M139.7 80.6h0M195.8 84.9h0M248.7 96.4h0M35.8 141.8h0M86.7 122.7h0M138.3 126.6h0M204.4 138.8h0M241.1 142.7h0"/><path className="vz-probe a-draw" style={v({"--d": "0.12s"})} pathLength="1" d="M128 80L139.7 80.6"/><path className="vz-probe a-draw" style={v({"--d": "0.40s"})} pathLength="1" d="M128 80L106.2 84.5"/><path className="vz-probe a-draw" style={v({"--d": "0.68s"})} pathLength="1" d="M128 80L113.4 41.2"/><circle className="vz-q-ring a-pop" style={v({"--d": "0.00s"})} cx="128" cy="80" r="6.5"/><circle className="vz-q" cx="128" cy="80" r="2.2"/></svg></div>
                    <figcaption className="fig-cap">Against faiss, DiskANN, LanceDB, Qdrant, usearch, AsterVec and SymphonyQG. One cell is the same amount of memory in both rows. The diagram shows a query reading only its nearest cells.</figcaption>
                  </figure>
                </li>
                <li className="feat">
                  <h3 className="feat-name"><a href="https://github.com/13lack13lood/SpecWave" target="_blank" rel="noopener noreferrer"><span className="u">SpecWave</span><svg className="ext" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M5.5 3.5h7v7M12.5 3.5l-9 9"/></svg><span className="sr"> on GitHub (opens in a new tab)</span></a></h3>
                  <p className="feat-result">Cuts search time after the embedding by 92% at P50 with no recall loss, benchmarked on 9 embedding models including BERT, NomicBERT, Qwen3, and arctic.</p>
                  <p className="feat-desc">A speculative search layer on ColdIVF’s fast batched cold reads: it predicts the final embedding from a middle transformer layer and issues those reads while the model is still running.</p>
                  <div className="feat-meta"><ul className="langs" aria-label="Languages and technologies"><li>Rust</li><li>Candle</li><li>Metal</li><li>Python</li></ul><a className="repo" href="https://github.com/13lack13lood/SpecWave" target="_blank" rel="noopener noreferrer"><svg className="gh" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="u">GitHub</span><svg className="ext" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M5.5 3.5h7v7M12.5 3.5l-9 9"/></svg><span className="sr"> repository for SpecWave (opens in a new tab)</span></a></div>
                  <figure className="fig fig--spec">
                    <div className="chart" role="img" aria-label="Timeline of one query. Without SpecWave, search starts after the embedding model finishes. With SpecWave, reads start at the middle layer while the model is still running, and search time after the embedding is 92% shorter at P50.">
                      <p className="chart-title" aria-hidden="true">One query, start to results</p>
                      <div className="lanes" aria-hidden="true">
                        <div className="lane">
                          <span className="row-label">Standard</span>
                          <span className="lane-track">
                            <span className="seg seg--model" style={v({"--a": "0", "--b": "0.5"})}><span className="seg-fill"></span><span className="seg-text"><span className="l-long">Embedding model</span><span className="l-short">Model</span></span></span>
                            <span className="seg seg--search" style={v({"--a": "0.5", "--b": "0.9"})}><span className="seg-fill"></span><span className="seg-text">Search</span></span>
                          </span>
                        </div>
                        <div className="lane lane--spec">
                          <span className="row-label">SpecWave</span>
                          <span className="lane-track">
                            <span className="seg seg--model" style={v({"--a": "0", "--b": "0.5"})}><span className="seg-fill"></span><span className="seg-text"><span className="l-long">Embedding model</span><span className="l-short">Model</span></span></span>
                            <span className="seg seg--search seg--lit" style={v({"--a": "0.5", "--b": "0.532"})}><span className="seg-fill"></span></span>
                            <span className="lane-done">−92% <span className="tag">P50</span></span>
                          </span>
                        </div>
                        <div className="lane lane--reads">
                          <span className="row-label"></span>
                          <span className="lane-track">
                            <span className="fork" style={v({"--a": "0.25"})}></span>
                            <span className="seg seg--reads" style={v({"--a": "0.25", "--b": "0.5"})}><span className="seg-fill"></span></span>
                            <span className="reads-text"><span className="l-long">Speculative reads from the middle layer</span><span className="l-short">Speculative reads</span></span>
                          </span>
                        </div>
                        <div className="lane lane--axis">
                          <span className="row-label"></span>
                          <span className="axis">
                            <span className="tick" style={v({"--a": "0"})}>Start</span>
                            <span className="tick" style={v({"--a": "0.25"})}><span className="l-long">Middle layer</span><span className="l-short">Middle</span></span>
                            <span className="tick" style={v({"--a": "0.5"})}><span className="l-long">Embedding ready</span><span className="l-short">Ready</span></span>
                          </span>
                        </div>
                        <span className="playhead"></span>
                      </div>
                    </div>
                    <div className="viz" aria-hidden="true"><svg className="vz" viewBox="0 0 300 168"><path className="vz-layer" d="M22 146H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.05s"})} d="M22 146H146"/><path className="vz-layer" d="M22 134.7H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.13s"})} d="M22 134.7H146"/><path className="vz-layer" d="M22 123.5H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.20s"})} d="M22 123.5H146"/><path className="vz-layer" d="M22 112.2H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.27s"})} d="M22 112.2H146"/><path className="vz-layer" d="M22 100.9H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.35s"})} d="M22 100.9H146"/><path className="vz-layer" d="M22 89.6H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.42s"})} d="M22 89.6H146"/><path className="vz-layer" d="M22 78.4H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.50s"})} d="M22 78.4H146"/><path className="vz-layer" d="M22 67.1H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.58s"})} d="M22 67.1H146"/><path className="vz-layer" d="M22 55.8H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.65s"})} d="M22 55.8H146"/><path className="vz-layer" d="M22 44.5H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.72s"})} d="M22 44.5H146"/><path className="vz-layer" d="M22 33.3H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.80s"})} d="M22 33.3H146"/><path className="vz-layer" d="M22 22H146"/><path className="vz-layer-on a-wave" style={v({"--d": "0.88s"})} d="M22 22H146"/><path className="vz-layer-hi" d="M22 89.6H146"/><path className="vz-fork a-draw" style={v({"--d": "0.48s"})} pathLength="1" d="M146 89.6C172 89.6 162 74 188 74"/><rect className="vz-block" x="196" y="26" width="11" height="11" rx="2"/><rect className="vz-block" x="212" y="26" width="11" height="11" rx="2"/><rect className="vz-block" x="228" y="26" width="11" height="11" rx="2"/><rect className="vz-block" x="244" y="26" width="11" height="11" rx="2"/><rect className="vz-block" x="260" y="26" width="11" height="11" rx="2"/><rect className="vz-block" x="196" y="42" width="11" height="11" rx="2"/><rect className="vz-block-on a-pop" style={v({"--d": "0.72s"})} x="212" y="42" width="11" height="11" rx="2"/><rect className="vz-block" x="228" y="42" width="11" height="11" rx="2"/><rect className="vz-block" x="244" y="42" width="11" height="11" rx="2"/><rect className="vz-block" x="260" y="42" width="11" height="11" rx="2"/><rect className="vz-block" x="196" y="58" width="11" height="11" rx="2"/><rect className="vz-block" x="212" y="58" width="11" height="11" rx="2"/><rect className="vz-block" x="228" y="58" width="11" height="11" rx="2"/><rect className="vz-block-on a-pop" style={v({"--d": "0.79s"})} x="244" y="58" width="11" height="11" rx="2"/><rect className="vz-block" x="260" y="58" width="11" height="11" rx="2"/><rect className="vz-block-on a-pop" style={v({"--d": "0.86s"})} x="196" y="74" width="11" height="11" rx="2"/><rect className="vz-block" x="212" y="74" width="11" height="11" rx="2"/><rect className="vz-block" x="228" y="74" width="11" height="11" rx="2"/><rect className="vz-block" x="244" y="74" width="11" height="11" rx="2"/><rect className="vz-block-on a-pop" style={v({"--d": "0.93s"})} x="260" y="74" width="11" height="11" rx="2"/><rect className="vz-block" x="196" y="90" width="11" height="11" rx="2"/><rect className="vz-block" x="212" y="90" width="11" height="11" rx="2"/><rect className="vz-block-on a-pop" style={v({"--d": "1.00s"})} x="228" y="90" width="11" height="11" rx="2"/><rect className="vz-block" x="244" y="90" width="11" height="11" rx="2"/><rect className="vz-block" x="260" y="90" width="11" height="11" rx="2"/><rect className="vz-block" x="196" y="106" width="11" height="11" rx="2"/><rect className="vz-block" x="212" y="106" width="11" height="11" rx="2"/><rect className="vz-block" x="228" y="106" width="11" height="11" rx="2"/><rect className="vz-block" x="244" y="106" width="11" height="11" rx="2"/><rect className="vz-block" x="260" y="106" width="11" height="11" rx="2"/><circle className="vz-emb a-pop" style={v({"--d": "1.02s"})} cx="154" cy="22" r="2.6"/><path className="vz-confirm a-draw" style={v({"--d": "1.08s"})} pathLength="1" d="M158 22C186 22 166 40 188 40"/></svg></div>
                    <figcaption className="fig-cap">Search after the embedding is drawn to scale (P50); model time is schematic. No recall loss across 9 models. The diagram shows reads issued from a middle layer while the rest of the model runs.</figcaption>
                  </figure>
                </li>
              </ul>
            </div>
          </section>
        </main>

        <footer className="section foot" aria-labelledby="contact-h">
          <div className="wrap grid">
            <h2 className="rail-h" id="contact-h">Contact</h2>
            <div className="foot-body">
              <a className="mail" href="mailto:h46zhu@uwaterloo.ca"><span className="u">h46zhu@uwaterloo.ca</span></a>
              <ul className="links">
                <li><a className="tl" href="/resume.pdf" target="_blank" rel="noopener noreferrer"><span>Resume</span><span className="sr"> (PDF, opens in a new tab)</span></a></li>
                <li><a className="tl" href="https://github.com/13lack13lood" target="_blank" rel="noopener noreferrer"><span>GitHub</span><span className="sr"> (opens in a new tab)</span></a></li>
                <li><a className="tl" href="https://www.linkedin.com/in/harryzhu409/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span className="sr"> (opens in a new tab)</span></a></li>
              </ul>
            </div>
          </div>
        </footer>
    </>
  );
}
