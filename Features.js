function Features() {
    try {
        const features = [
            {
                title: "Modern Technology",
                description: "Built with cutting-edge technologies and frameworks for optimal performance",
                icon: "fa-microchip"
            },
            {
                title: "Responsive Design",
                description: "Perfect display on all devices and screen sizes, from mobile to desktop",
                icon: "fa-desktop"
            },
            {
                title: "Fast Performance",
                description: "Optimized for speed and efficient loading times across all platforms",
                icon: "fa-bolt"
            }
        ];

        return (
            <section data-name="features" id="features" className="py-12 sm:py-16 lg:py-20">
                <div className="responsive-container">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
                        <div data-name="features-content" className="animate-slide-left space-y-8 sm:space-y-12">
                            <h2 className="responsive-heading font-bold text-gradient">
                                Why Choose Us?
                            </h2>
                            <div className="space-y-8 sm:space-y-12">
                                {features.map((feature, index) => (
                                    <div 
                                        key={index} 
                                        data-name={`feature-item-${index}`} 
                                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-md gradient-bg text-white text-xl sm:text-2xl">
                                                <i className={`fas ${feature.icon}`}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
                                            <p className="text-gray-600 responsive-text-base">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div data-name="features-image" className="mt-10 lg:mt-0 animate-slide-right">
                            <img 
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                alt="Features illustration" 
                                className="rounded-lg shadow-custom responsive-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
        return null;
    }
}
