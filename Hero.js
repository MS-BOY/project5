function Hero() {
    try {
        return (
            <section data-name="hero" id="home" className="min-h-screen flex items-center justify-center gradient-bg text-white">
                <div className="responsive-container">
                    <div className="text-center responsive-padding">
                        <h1 data-name="hero-title" className="responsive-heading font-bold mb-6 animate-fade-in">
                            Transform Your Digital Presence
                        </h1>
                        <p data-name="hero-subtitle" className="responsive-text-base mb-8 animate-slide-top max-w-2xl mx-auto">
                            Innovative solutions for modern businesses that scale with your needs and adapt to every screen size
                        </p>
                        <div data-name="hero-cta" className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-scale">
                            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover-scale w-full sm:w-auto">
                                Get Started
                            </button>
                            <button className="border-2 border-white px-8 py-3 rounded-full font-medium hover-scale w-full sm:w-auto">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
