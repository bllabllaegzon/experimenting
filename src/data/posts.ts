export interface Post {
  id: number
  title: string
  date: string
  excerpt: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'On the origins of Lorem Ipsum',
    date: 'May 24, 2026',
    excerpt:
      `Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.`,
  },
  {
    id: 2,
    title: 'Why whitespace matters in design',
    date: 'May 18, 2026',
    excerpt:
      'Whitespace — or negative space — is the empty area between and around elements of a design. Far from being wasted space, it is a powerful design tool that guides the eye, creates hierarchy, and gives content room to breathe. Great typographers have long known this; great web designers are still learning it.',
  },
  {
    id: 3,
    title: 'A brief history of web typography',
    date: 'May 10, 2026',
    excerpt:
      'From early web-safe fonts like Arial and Times New Roman to the explosion of Google Fonts and variable fonts, web typography has undergone a quiet revolution. Today a designer can specify almost any typeface, any weight, and any optical size — all without asking the user to install anything.',
  },
  {
    id: 4,
    title: 'Building for reading: lessons from print',
    date: 'April 30, 2026',
    excerpt:
      'Print designers have spent centuries optimising for human reading comfort: line length, leading, typeface choice, contrast. Much of that wisdom transfers directly to the web, yet many sites still set text at 12px in a container that spans the full viewport. This post looks at what we can borrow from Gutenberg.',
  },
  {
    id: 5,
    title: 'Colour restraint: using one accent wisely',
    date: 'April 20, 2026',
    excerpt:
      'The most memorable brand identities often rely on a single, carefully chosen accent colour. Think of the salmon pink on the xilancia nav buttons — it draws the eye without fighting the content. This post explores techniques for making one colour do a lot of heavy lifting.',
  },
]
