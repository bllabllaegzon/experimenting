export default function AboutPage() {
  return (
    <div className="px-16 pt-12">
      <div className="flex gap-8">
        {/* Left: about text */}
        <div className="w-[335px] shrink-0">
          <h2 className="text-[14px] font-normal uppercase tracking-widest text-gray-400 mb-6">
            About
          </h2>
          <p className="text-[14px] font-normal leading-relaxed mb-4">
            xilancia Test is a minimal blog built as a design experiment. It explores clean
            typography, whitespace, and a restrained colour palette — letting words and images
            breathe.
          </p>
          <p className="text-[14px] font-normal leading-relaxed mb-4">
            The site takes its visual language from a simple Figma mockup: a grey navigation bar,
            salmon-pink accent buttons, and a two-column reading layout that keeps the eye moving
            from text to image.
          </p>
          <p className="text-[14px] font-normal leading-relaxed">
            Built with React 19, Vite 6, and Tailwind CSS. Deployed on Vercel.
          </p>
        </div>

        {/* Right: image placeholder */}
        <div className="flex-1 bg-[#d9d9d9] h-[258px]" />
      </div>
    </div>
  )
}
