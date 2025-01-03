const Steps = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Design your website in
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            3 simple steps
          </h2>
          <p className="text-gray-400 text-center text-lg mb-16">
            From idea to live website within just a few minutes
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#141414]/50 p-8 rounded-2xl border border-[#282828] hover:border-[#E11D48]/20 transition-colors duration-300">
              <div className="mb-6">
                <div className="text-[#E11D48] w-12 h-12">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  </svg>
                </div>
                <div className="text-gray-400 text-sm font-medium mt-4">Step 1</div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Describe your vision</h3>
              <p className="text-gray-400 text-lg">
                Start by providing a basic prompt of the website you want to create. Our AI
                understands your ideas in any language.
              </p>
            </div>

            <div className="bg-[#141414]/50 p-8 rounded-2xl border border-[#282828] hover:border-[#E11D48]/20 transition-colors duration-300">
              <div className="mb-6">
                <div className="text-[#E11D48] w-12 h-12">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 16l4-4h-3V3h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V4.99h6V3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <div className="text-gray-400 text-sm font-medium mt-4">Step 2</div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Refine and Regenerate</h3>
              <p className="text-gray-400 text-lg">
                Your website is ready. Select a section to request changes, and it will update
                instantly.
              </p>
            </div>

            <div className="bg-[#141414]/50 p-8 rounded-2xl border border-[#282828] hover:border-[#E11D48]/20 transition-colors duration-300">
              <div className="mb-6">
                <div className="text-[#E11D48] w-12 h-12">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                </div>
                <div className="text-gray-400 text-sm font-medium mt-4">Step 3</div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Export your website</h3>
              <p className="text-gray-400 text-lg">
                Happy with your creation? Export your fully functional website and launch your
                online presence in minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps 