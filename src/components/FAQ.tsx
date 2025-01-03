import { useState } from 'react'

type FAQItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className="border-b border-gray-800">
    <button
      className="w-full py-6 flex justify-between items-center text-left"
      onClick={onClick}
    >
      <span className="text-lg font-semibold">{question}</span>
      <svg
        className={`w-6 h-6 transform transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-6' : 'max-h-0'
      }`}
    >
      <p className="text-gray-400">{answer}</p>
    </div>
  </div>
)

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs = [
    {
      question: "What is WebFlow?",
      answer: "WebFlow is an AI-powered website builder that helps you create stunning, professional websites in minutes. Simply describe your vision, and our AI will generate a complete website tailored to your needs."
    },
    {
      question: "How does WebFlow work?",
      answer: "WebFlow uses advanced AI to transform your text descriptions into fully-functional websites. Just type what you want, and our AI handles the design, layout, and content generation. You can then refine and customize every aspect until it's perfect."
    },
    {
      question: "Do I need coding skills to use WebFlow?",
      answer: "Not at all! WebFlow is designed to be completely code-free. Our AI understands natural language, so you can create and modify your website using simple text instructions."
    },
    {
      question: "How fast can I create a website with WebFlow?",
      answer: "You can have a professional website ready in minutes. Simply describe your vision, review the AI-generated design, make any desired adjustments, and your website is ready to launch."
    },
    {
      question: "Can I customize my landing page with WebFlow?",
      answer: "Absolutely! While our AI creates the initial design, you have full control to customize every aspect of your website. Use natural language to request changes, and see them implemented instantly."
    },
    {
      question: "Is WebFlow suitable for businesses of all sizes?",
      answer: "Yes! Whether you're a solo entrepreneur, small business, or large enterprise, WebFlow offers plans and features to match your needs. Our scalable platform grows with your business."
    }
  ]

  return (
    <section className="py-20 bg-transparent">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-[#CCFF00]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ 