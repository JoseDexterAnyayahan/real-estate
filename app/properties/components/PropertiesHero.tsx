export default function PropertiesHero() {
  return (
    <div className="relative w-full h-48 sm:h-56 overflow-hidden">
      <img
        src="/images/hero/hero.jpg"
        alt="Properties"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

      <div className="absolute bottom-8 left-0 right-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-[9px] tracking-[0.4em] uppercase text-white/50 mb-1">
            MVP Properties
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-white font-light">
            All <span className="italic">Properties</span>
          </h1>
        </div>
      </div>
    </div>
  );
}