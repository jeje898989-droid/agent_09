# Research Notes: The Development of AI (as of October 2026)

> Compiled 2026-10-04 from web search results. Figures marked *(secondary)* come from news or blog summaries rather than the primary report, and should be checked against the original before formal citation.

## 1. Capability: accelerating, not plateauing

- Stanford HAI **AI Index 2026**: AI capability is still accelerating. SWE-bench (software engineering) scores rose from about 60% to nearly 100% in one year.
- Industry produced over 90% of notable frontier models in 2025. Several models meet or exceed human baselines on PhD-level science questions, multimodal reasoning and competition mathematics.
- The U.S.–China performance gap has effectively closed; the lead changed hands several times since early 2025. As of March 2026 the top U.S. model led by only about 2.7%.
- Open-weight models are close behind closed frontier models (e.g., Zhipu AI's GLM-5.2, 753B parameters, MIT license, ~80% on GPQA Diamond) *(secondary)*.

## 2. From chatbots to agents

- The defining shift of 2026 is **agentic AI** moving from demos into production: models hold a goal across dozens of tool calls, recover from errors, replan and ask for help when needed.
- Frontier labs release competing models at a rapid pace (e.g., Anthropic and OpenAI released new frontier models on the same day, 5 Feb 2026) *(secondary)*.
- Common enterprise pattern: **model routing** — a cheap, fast model handles most agent steps and escalates hard reasoning to a frontier model.
- New risk: security and cost incidents from unmonitored agent actions calling model APIs without guardrails *(secondary)*.

## 3. Adoption and investment

- Organizational AI adoption reached **88%**; generative AI reached **53%** of the population faster than the PC or the internet did (AI Index 2026).
- Global corporate AI investment: **$581.7B**, up 130% year over year; generative AI investment alone ~**$170.9B**, nearly 5× (AI Index 2026).
- Big Tech infrastructure capex in 2026 is estimated at **$660–690B** (Amazon ~$200B, Alphabet $175–185B, Meta $115–135B, Microsoft $120B+, Oracle ~$50B) *(secondary — Futurum)*.
- PwC projects data-centre capex rising from ~$800B/year (2026) to $1.8T/year by 2050.
- AI data centres are straining supply chains, e.g., memory and electronic components *(secondary)*.

## 4. Energy and the environment

- IEA: data-centre electricity demand grew 17% in 2025, while AI-focused data centres grew about **50%**.
- IEA projection: data-centre consumption roughly doubles from **485 TWh (2025) to 950 TWh (2030)**; AI-focused data-centre consumption roughly triples.
- Power, grid capacity and cooling are becoming binding constraints on AI expansion.

## 5. Labour market

- No aggregate unemployment spike yet. Anthropic's March 2026 study ("Labor Market Impacts of AI: A New Measure and Early Evidence") found the unemployment gap between AI-exposed and less-exposed workers small and insignificant; IMF and Stanford analyses are consistent.
- Hiring slows in highly exposed occupations; postings for jobs heavy in structured, repetitive tasks fell ~13% after ChatGPT's launch (HBR, March 2026).
- AI skills appear in 2.5% of all U.S. job postings, up 55% year over year (AI Index 2026).
- PwC 2026 AI Jobs Barometer: the labour market is splitting into two paths and rewards human skills; AI-skill wage premiums are reported at up to ~62% *(secondary)*.
- S&P Global PMI survey: slightly negative net global employment effect (−5 points over the past 12 months).

## 6. Safety and governance

- Documented AI incidents rose from **233 to 362** year over year; only about half of U.S. middle and high schools have AI policies (AI Index 2026).
- Experts and the public differ by ~50 points on whether AI will help people do their jobs.
- **Korea's AI Basic Act** took full effect on **22 Jan 2026** — Asia's first comprehensive AI law and the world's second after the EU's. It defines "high-impact AI" (healthcare, energy, transport, hiring, credit scoring, biometrics) requiring risk assessment, monitoring and explanation. Fines have a one-year grace period except for serious harm.
- **EU AI Act**: in 2026 the EU postponed high-risk obligations from August 2026 to December 2027 *(secondary)*.
- U.S.: a June 2026 executive order targeted frontier AI models and AI-enabled cybersecurity *(secondary — Greenberg Traurig)*.

## 7. Korea's position

- National plan to secure **260,000 GPUs by 2030** (announced around APEC 2025, in partnership with NVIDIA); the first 10,000 are being distributed to universities, research institutes and companies.
- The government-led **sovereign foundation model** project advanced three consortia (LG AI Research, SK Telecom, Upstage) to the second round.
- Strategic goal: reduce dependence on foreign AI and build models reflecting Korean language and culture ("AI G3" ambition).

## 8. Key takeaways for the report

1. Capability keeps growing fast; agents are the new frontier.
2. Investment and compute are at record levels, but energy and supply chains are the bottlenecks.
3. Labour effects are so far seen in hiring patterns and skill premiums, not mass unemployment.
4. Safety, education and regulation lag capability; regulation is diverging (Korea enforcing, EU delaying).
5. Korea is pursuing sovereign AI through compute and home-grown models.

## Sources

- Stanford HAI, The 2026 AI Index Report — https://hai.stanford.edu/ai-index/2026-ai-index-report
- Stark Insider, Stanford's 2026 AI Index — https://www.starkinsider.com/2026/04/stanford-2026-ai-index-report.html
- Netguru, Latest AI developments 2026 — https://www.netguru.com/blog/latest-ai-developments-2026
- DEV Community, Frontier AI in 2026 — https://dev.to/arihantdeva/frontier-ai-in-2026-what-actually-changed-and-what-did-not-eek
- TeamAI, 2026 frontier model comparison — https://platform.teamai.com/blog/large-language-models-llms/the-2026-ai-frontier-model-war/
- Futurum, AI Capex 2026 — https://futurumgroup.com/insights/ai-capex-2026-the-690b-infrastructure-sprint/
- PwC, Global investment in AI infrastructure — https://www.pwc.com/gx/en/news-room/press-releases/2026/global-investment-in-ai-infrastructure.html
- Accuris, AI data centres and component supply — https://accuristech.com/blog/ai-data-center-electronic-component-supply/
- IEA, Energy and AI — https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary
- E&T, IEA warns AI data-centre electricity will triple by 2030 — https://eandt.theiet.org/2026/04/22/iea-warns-ai-data-centre-electricity-use-will-triple-2030
- S&P Global, AI impact on employment 2026 — https://www.spglobal.com/en/research-insights/special-reports/ai-impact-on-employment-2026
- HBR, How AI Is Changing the Labor Market — https://hbr.org/2026/03/research-how-ai-is-changing-the-labor-market
- PwC, 2026 Global AI Jobs Barometer — https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html
- IMF, New Jobs Creation in the AI Age — https://www.imf.org/-/media/files/publications/sdn/2026/english/sdnea2026001.pdf
- Stimson Center, South Korea's AI Basic Act — https://www.stimson.org/2026/south-koreas-ai-basic-act-seeking-balance-between-industry-innovation-and-social-risk/
- White & Case, AI Watch: South Korea — https://www.whitecase.com/insight-our-thinking/ai-watch-global-regulatory-tracker-south-korea
- Greenberg Traurig, Executive order on frontier AI — https://www.gtlaw.com/en/insights/2026/6/white-house-issues-executive-order-targeting-ai-enabled-cybersecurity
- NVIDIA Newsroom, South Korea AI infrastructure — https://nvidianews.nvidia.com/news/south-korea-ai-infrastructure
- Asia Business Outlook, 260,000 GPUs by 2030 — https://www.asiabusinessoutlook.com/news/south-korea-deploys-260000-nvidia-gpus-by-2030-nwid-11380.html
- The AI Insider, South Korea's AI G3 strategy — https://theaiinsider.tech/2026/09/29/south-koreas-ai-g3-strategy-decoded/
