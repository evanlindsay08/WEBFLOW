import { useState } from 'react'

const Footer = () => {
  return (
    <div className="relative pt-16">
      {/* CTA Section with background text */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center justify-end flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-transparent" />
        
        {/* Top Separator */}
        <div className="relative w-full mb-8">
          <div className="w-full h-[1px] bg-gray-800" />
        </div>
        
        {/* Background Text */}
        <div className="relative w-full flex items-center justify-center pointer-events-none select-none overflow-hidden mb-16">
          <h2 className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-[#1A1A1A] tracking-tight leading-none whitespace-nowrap opacity-50">
            WEBFLOW
          </h2>
        </div>
      </section>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-[1px] bg-gray-800" />
      </div>
    </div>
  )
}

export default Footer 