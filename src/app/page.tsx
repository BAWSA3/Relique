// src/app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary">
      <div className="text-center space-y-6">
        {/* Logo placeholder */}
        <div className="w-24 h-24 mx-auto bg-relique-purple rounded-relique-lg flex items-center justify-center">
          <span className="text-4xl font-bold text-white">R</span>
        </div>
        
        {/* Title */}
        <h1 className="text-display-lg font-bold text-text-primary">
          RELIQUE
        </h1>
        
        {/* Tagline */}
        <p className="tagline">
          Curated Trade
        </p>
        
        {/* Description */}
        <p className="text-text-secondary max-w-md mx-auto">
          The premier platform for TCG collectors and traders.
          Build your collection. Track your portfolio. Trade with confidence.
        </p>
        
        {/* CTA Button */}
        <button className="px-8 py-3 bg-relique-purple hover:bg-relique-purple-light text-white font-semibold rounded-relique-md transition-colors duration-200 shadow-relique-glow">
          Get Started
        </button>
      </div>
    </div>
  );
}
