const StarryBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 min-h-[300vh]">
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="stars-container absolute inset-0 overflow-hidden min-h-[300vh]">
        {[...Array(400)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 300}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 1.5}px`,
              height: `${1 + Math.random() * 1.5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${25 + Math.random() * 20}s`,
              opacity: Math.random() * 0.7 + 0.5
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default StarryBackground 