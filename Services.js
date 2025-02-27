function Services() {
    try {
        const services = [
            {
                icon: "fa-laptop-code",
                title: "Web Development",
                description: "Custom websites built with the latest technologies"
            },
            {
                icon: "fa-mobile-alt",
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications"
            },
            {
                icon: "fa-chart-line",
                title: "Digital Marketing",
                description: "Strategic marketing solutions for growth"
            },
            {
                icon: "fa-paint-brush",
                title: "UI/UX Design",
                description: "Beautiful and intuitive user interfaces"
            }
        ];

        return (
            <section data-name="services" id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="responsive-container">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 data-name="services-title" className="responsive-heading font-bold mb-4 text-gradient">Our Services</h2>
                        <p data-name="services-subtitle" className="responsive-text-base text-gray-600 max-w-2xl mx-auto">
                            Comprehensive solutions for your business needs, delivered with expertise and precision
                        </p>
                    </div>
                    <div className="responsive-grid">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                data-name={`service-card-${index}`}
                                className="bg-white p-6 sm:p-8 rounded-lg shadow-custom hover-scale animate-fade-in"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="text-4xl sm:text-5xl text-gradient mb-4 sm:mb-6">
                                    <i className={`fas ${service.icon}`}></i>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">{service.title}</h3>
                                <p className="text-gray-600 responsive-text-base">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
        return null;
    }
}
