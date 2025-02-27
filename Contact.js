function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });
        const [status, setStatus] = React.useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            setStatus('sending');
            
            // Simulate form submission
            setTimeout(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, 1500);
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <section data-name="contact" id="contact" className="py-12 sm:py-16 lg:py-20">
                <div className="responsive-container">
                    <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
                        <h2 data-name="contact-title" className="responsive-heading font-bold mb-4 text-gradient">
                            Get In Touch
                        </h2>
                        <p data-name="contact-subtitle" className="responsive-text-base text-gray-600">
                            Have a question or want to work together? We'd love to hear from you.
                        </p>
                    </div>
                    <div className="max-w-xl mx-auto">
                        <form data-name="contact-form" onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 animate-fade-in">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full gradient-bg text-white py-4 px-6 rounded-md hover-scale text-lg font-medium transition-all duration-200"
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                            {status === 'success' && (
                                <div className="text-green-600 text-center animate-fade-in p-4 bg-green-50 rounded-md">
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
