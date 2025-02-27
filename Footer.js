function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div data-name="footer-about" className="animate-fade-in">
                            <h3 className="text-xl font-bold mb-4">About Us</h3>
                            <p className="text-gray-400">
                                We create digital solutions that help businesses grow and succeed in the modern world.
                            </p>
                        </div>
                        <div data-name="footer-links" className="animate-fade-in">
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-contact" className="animate-fade-in">
                            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-400">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    123 Business Street
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <i className="fas fa-phone mr-2"></i>
                                    (555) 123-4567
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <i className="fas fa-envelope mr-2"></i>
                                    info@example.com
                                </li>
                            </ul>
                        </div>
                        <div data-name="footer-social" className="animate-fade-in">
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white text-2xl hover-scale">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-2xl hover-scale">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-2xl hover-scale">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-2xl hover-scale">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
