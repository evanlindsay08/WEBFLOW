const Testimonials = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-[#CCFF00]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/>
            </svg>
          </div>
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm">(wish we had these)</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Testimonials</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl text-gray-200 mb-6">
                  "Thanks to WebFlow, I'll be funding 49 fewer startups this year. Turns out AI can build websites better than half the founders I meet."
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">
                    Startup बाबा
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">
                    Stand-up बाबा
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">
                    Movie बाबा
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 