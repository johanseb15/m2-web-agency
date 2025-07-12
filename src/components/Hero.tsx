export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-darkBg"
      style={{
        backgroundImage:
          "radial-gradient(circle at top left, rgba(57,255,20,0.1), transparent 30%), radial-gradient(circle at bottom right, rgba(255,0,247,0.1), transparent 30%)",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-white">
        Build your website<br />
        <span className="text-neonGreen">with the power of AI</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-8">
        Quote your idea, preview your landing, and launch in minutes. M² brings automation, style, and intelligence to your online presence.
      </p>

      <a
        href="#portfolio"
        className="bg-neonGreen text-darkBg font-bold py-4 px-10 rounded-full text-lg hover:shadow-neonGreen transition-shadow duration-300"
      >
        Get Started
      </a>
    </section>
  );
}