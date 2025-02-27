function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Sarah Johnson",
                role: "CEO, TechCorp",
                content: "Working with this team has been an absolute pleasure. They delivered beyond our expectations.",
                image: "https://randomuser.me/api/portraits/women/1.jpg"
            },
            {
                name: "Mark Wilson",
                role: "Marketing Director",
                content: "The attention to detail and professional approach was exactly what we needed.",
                image: "https://randomuser.me/api/portraits/men/1.jpg"
            },
            {
                name: "Emily Brown",
                role: "Startup Founder",
                content: "Incredible results! Our online presence has improved significantly.",
                image: "https://randomuser.me/api/portraits/women/2.jpg"
            }
        ];

        return (
            <section data-name="testimonials" id="testimonials" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="testimonials-title" className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                            What Our Clients Say
                        </h2>
                        <p data-name="testimonials-subtitle" className="text-gray-600">
                            Don't just take our word for it
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                data-name={`testimonial-card-${index}`}
                                className="bg-white p-6 rounded-lg shadow-custom hover-scale animate-fade-in"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                        <p className="text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        reportError(error);
        return null;
    }
}
