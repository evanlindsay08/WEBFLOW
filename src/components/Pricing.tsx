const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false 
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <div className={`bg-gray-900/50 p-8 rounded-2xl border ${isPopular ? 'border-[#CCFF00]' : 'border-gray-800'}`}>
    {isPopular && (
      <div className="mb-4">
        <span className="text-sm text-[#CCFF00]">Most popular</span>
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-6">{description}</p>
    <div className="mb-6">
      <span className="text-3xl font-bold">US${price}</span>
      <span className="text-gray-400 text-sm">/per month</span>
    </div>
    <button className="w-full py-3 mb-6 rounded-full bg-[#CCFF00] text-black font-semibold hover:bg-[#CCFF00]/90">
      Subscribe
    </button>
    <div className="space-y-4">
      <p className="text-sm text-gray-400">This includes:</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <svg className="w-5 h-5 mr-3 text-[#CCFF00]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const Pricing = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pricing that fits your vision
            </h2>
            <p className="text-gray-400">
              Unlock the power of AI-driven web design with plans<br />
              tailored for everyone, from startups to enterprises.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-900 rounded-full p-1">
              <button className="px-6 py-2 rounded-full bg-[#CCFF00] text-black">Monthly</button>
              <button className="px-6 py-2 rounded-full text-gray-400">Yearly</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="WebFlow Starter"
              price="49"
              description="Perfect for individuals and small projects"
              features={[
                "5 Projects",
                "Basic webpage generation",
                "Basic SEO tools",
                "1 Team member"
              ]}
            />
            <PricingCard
              title="WebFlow Business"
              price="99"
              description="Ideal for growing businesses"
              features={[
                "10 Projects",
                "Advanced web apps",
                "Code download",
                "Custom domain",
                "5 Team members"
              ]}
              isPopular
            />
            <PricingCard
              title="WebFlow Unlimited"
              price="199"
              description="For enterprises and large teams"
              features={[
                "25 Projects",
                "All project types",
                "White labeling",
                "Dedicated support",
                "Unlimited team members"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing 