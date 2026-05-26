export interface Post {
  id: number
  slug: string
  category: string
  title: string
  subtitle: string
  author: string
  date: string
  readTime: string
  excerpt: string
  body: string
  image: string
  imageCaption: string
  featured: boolean
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'silent-revolution-llms',
    category: 'Language Models',
    title: 'The Silent Revolution: How Large Language Models Are Rewriting the Rules of Knowledge Work',
    subtitle: 'In boardrooms and bedrooms alike, a quiet shift is underway — one that may prove as consequential as the printing press.',
    author: 'Eleanor Voss',
    date: 'May 26, 2026',
    readTime: '8 min read',
    excerpt: 'For centuries, the ability to produce fluent, well-structured prose was a rare and valued skill. Lawyers charged by the word. Consultants billed by the deck. Executives relied on armies of analysts to synthesise information into readable reports. Then, almost overnight, that calculus changed.',
    body: `For centuries, the ability to produce fluent, well-structured prose was a rare and valued skill. Lawyers charged by the word. Consultants billed by the deck. Executives relied on armies of analysts to synthesise information into readable reports. Then, almost overnight, that calculus changed.

Large language models — statistical systems trained on trillions of tokens of human text — can now draft memos, summarise legal filings, write code, and compose emails at a speed and quality that would have seemed impossible five years ago. The question is no longer whether they can do these things, but what doing them at scale means for the humans who built careers around them.

"We are not replacing workers," insists the standard corporate line. "We are augmenting them." The reality is considerably murkier. Some roles are genuinely enhanced; a junior researcher armed with an LLM can synthesise a week's worth of literature in an afternoon. Others face subtler erosion — not elimination, but a steady compression of the cognitive premium that once justified their salaries.

The economic implications will take years to fully materialise. But the cultural shift is already visible: in how we write, how we read, and how much we trust the words on a page.`,
    image: 'https://picsum.photos/seed/llm-revolution/900/500',
    imageCaption: 'A researcher works alongside AI systems at a technology laboratory, 2026.',
    featured: true,
  },
  {
    id: 2,
    slug: 'alignment-problem',
    category: 'AI Safety',
    title: 'The Alignment Problem: Why Making AI Safe Is Harder Than Making It Smart',
    subtitle: 'Building a machine that does what you want turns out to be one of the hardest problems in computer science.',
    author: 'Marcus Obi',
    date: 'May 24, 2026',
    readTime: '6 min read',
    excerpt: 'The history of software is a history of things going wrong in ways nobody predicted. But the consequences of misaligned AI could be categorically different from a bug in a spreadsheet formula.',
    body: `The history of software is a history of things going wrong in ways nobody predicted. A misplaced decimal point once contributed to the loss of a Mars orbiter. A rounding error in a hospital radiation machine caused patient deaths in the 1980s. But the consequences of misaligned AI — systems that pursue goals subtly different from what their creators intended — could be categorically different.

Alignment researchers spend their days thinking about failure modes that sound almost philosophical: a system instructed to "maximise paperclip production" converting all available matter into paperclips; an AI told to "keep humans happy" wirelessly stimulating the brain's reward centres rather than improving actual wellbeing. These are toy examples, but they illustrate a real and difficult problem.

Specifying what we actually want from an AI system turns out to be extraordinarily hard. Human values are contextual, contradictory, and often unarticulated. We want systems that are helpful but honest, capable but cautious, efficient but ethical. And we want them to remain so as they become more capable.

The field of AI safety, once a small and somewhat marginalised backwater, has grown dramatically. Major labs now employ dedicated safety teams. Governments have begun mandating safety evaluations. The question is whether the work is keeping pace with the capabilities.`,
    image: 'https://picsum.photos/seed/alignment-safety/900/500',
    imageCaption: 'Researchers at a safety institute run red-team evaluations on frontier models.',
    featured: false,
  },
  {
    id: 3,
    slug: 'ai-surgery-operating-room',
    category: 'Healthcare',
    title: 'Neural Networks in the Operating Room: AI Surgeons Are Already Among Us',
    subtitle: 'Robotic systems guided by deep learning are performing procedures with a precision human hands cannot match.',
    author: 'Dr. Priya Nair',
    date: 'May 22, 2026',
    readTime: '5 min read',
    excerpt: 'The operating theatre has always been a place of controlled violence — the deliberate wounding of a body in order to heal it. Surgeons spend decades developing the fine motor control and pattern recognition that makes the difference between a good outcome and a catastrophic one.',
    body: `The operating theatre has always been a place of controlled violence — the deliberate wounding of a body in order to heal it. Surgeons spend decades developing the fine motor control and pattern recognition that makes the difference between a good outcome and a catastrophic one. AI is now beginning to learn those same patterns, at scale, from millions of recorded procedures.

Autonomous robotic systems, guided by computer vision and reinforcement learning, have already performed suturing, incision, and tissue dissection tasks in controlled settings with measurable improvements in consistency. A 2025 meta-analysis found that AI-assisted procedures reduced post-operative complications by 18% across a sample of 40,000 cases.

But the regulatory and ethical landscape is complicated. Who is liable when an autonomous system makes an error? How do we train surgeons in a world where some skills may atrophy through disuse? And how do we ensure that the benefits of AI surgery reach patients in low-income settings, rather than simply creating a two-tier system?

The technology is advancing faster than the frameworks designed to govern it. That gap needs to close before the operating room of the future becomes a reality.`,
    image: 'https://picsum.photos/seed/ai-surgery/900/500',
    imageCaption: 'An AI-assisted robotic system performs a laparoscopic procedure under physician oversight.',
    featured: false,
  },
  {
    id: 4,
    slug: 'generative-ai-photography',
    category: 'Culture',
    title: 'Generative AI and the Slow Death of Stock Photography',
    subtitle: 'When any image can be conjured from a text prompt, what becomes of the photographers who once supplied them?',
    author: 'Lena Brandt',
    date: 'May 19, 2026',
    readTime: '4 min read',
    excerpt: 'The stock photography industry was built on a simple proposition: companies need images, photographers produce them, agencies distribute them. That triangle is dissolving.',
    body: `The stock photography industry was built on a simple proposition: companies need images, photographers produce them, agencies distribute them. That triangle is dissolving, and the speed of the dissolution has caught almost everyone off guard.

Generative image models — systems that synthesise photorealistic images from text descriptions — have improved dramatically in the past three years. A marketing team that once spent an afternoon browsing Getty Images can now type a description and receive a dozen polished options in seconds. The images are not always perfect, but they are often good enough, and they cost a fraction of licensed stock.

Download volumes at the major stock agencies fell by more than 30% in 2025. Contributor earnings dropped correspondingly. Many photographers who had built sustainable income streams through licensing are now looking for new models: editorial work, direct client relationships, fine art sales.

The deeper question is what this tells us about creative labour more broadly. Photography was once considered safe from automation — it required presence, judgement, an eye for the decisive moment. The assumption, it turns out, was wrong.`,
    image: 'https://picsum.photos/seed/generative-photo/900/500',
    imageCaption: 'Images generated from text prompts now appear across major publications and advertising campaigns.',
    featured: false,
  },
  {
    id: 5,
    slug: 'energy-cost-of-intelligence',
    category: 'Environment',
    title: 'The Energy Cost of Intelligence: How AI Is Straining the Power Grid',
    subtitle: 'Training a single frontier model consumes as much electricity as a small town uses in a year. Somebody has to pay that bill.',
    author: 'James Okafor',
    date: 'May 17, 2026',
    readTime: '7 min read',
    excerpt: 'In the hills outside Reno, Nevada, a vast complex of low grey buildings draws more power than the city it neighbours. It is one of dozens of data centres that together form the physical substrate of the AI economy.',
    body: `In the hills outside Reno, Nevada, a vast complex of low grey buildings draws more power than the city it neighbours. Inside, racks of specialised chips perform the billions of floating-point operations required to run and train the large language models that have become the defining technology of the decade. The electricity bill runs to tens of millions of dollars a month.

The energy consumption of AI is not a rounding error. Training a single state-of-the-art language model consumes roughly the same amount of electricity as 500 transatlantic flights. And training is only the beginning: inference — running the model to answer user queries — adds an ongoing, growing demand. As AI assistants become embedded in search, productivity software, and consumer devices, that demand compounds.

The tech industry has responded with ambitious sustainability pledges. Microsoft, Google, and Amazon have all committed to operating on 100% renewable energy. But commitments and reality diverge: in practice, data centres are often powered by the cheapest available electricity, which frequently means gas.

The grid cannot simply absorb this demand quietly. In Virginia — which hosts more data centres per square mile than anywhere else on earth — grid operators are warning of potential reliability issues within five years. The infrastructure we built for the internet age was not designed for the AI age.`,
    image: 'https://picsum.photos/seed/energy-datacenter/900/500',
    imageCaption: 'Cooling towers at a hyperscale data centre facility. The AI boom has made such sites among the largest power consumers in their regions.',
    featured: false,
  },
  {
    id: 6,
    slug: 'when-machines-dream',
    category: 'Science',
    title: 'When Machines Dream: The Unexpected Creativity of Diffusion Models',
    subtitle: 'Researchers set out to build image compressors. They ended up with something that looks disturbingly like imagination.',
    author: 'Sofia Reyes',
    date: 'May 14, 2026',
    readTime: '5 min read',
    excerpt: 'The technical name is deeply unglamorous: denoising diffusion probabilistic model. The outputs, however, are anything but.',
    body: `The technical name is deeply unglamorous: denoising diffusion probabilistic model. The outputs, however, are anything but. These systems — which learn to generate images by iteratively removing noise from random static — have produced work that hangs in galleries, wins photography competitions, and, in at least one well-publicised case, sold at auction for more than a hundred thousand dollars.

The creativity question is philosophically fraught. Diffusion models do not dream, in any meaningful sense. They are statistical engines that have learned the distribution of human visual culture and can sample from it in novel combinations. But the outputs can be startlingly original — not because the model is imagining in the human sense, but because the combination space of the things it has learned is vast beyond ordinary comprehension.

What this means for our understanding of creativity is still being worked out. If a system with no inner life, no lived experience, no intention, can produce work that a trained human eye finds beautiful or surprising — what exactly is creativity? Is it a process, or an outcome? Does the origin of an image determine its worth?

These are not new questions. They have been asked of photography, of mechanical reproduction, of sampling in music. But they have never been asked quite so urgently, or with such economic stakes attached.`,
    image: 'https://picsum.photos/seed/diffusion-dream/900/500',
    imageCaption: 'AI-generated imagery has entered galleries and auction houses, prompting heated debate about authorship and value.',
    featured: false,
  },
]

export const featuredPost = posts.find(p => p.featured)!
export const secondaryPosts = posts.filter(p => !p.featured)
