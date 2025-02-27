function Navbar() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <nav data-name="navbar" className="fixed w-full z-50 glass-effect">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span data-name="logo" className="text-2xl font-bold text-gradient">LOGO</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a data-name="nav-home" href="#home" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover-scale">Home</a>
                                <a data-name="nav-services" href="#services" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover-scale">Services</a>
                                <a data-name="nav-features" href="#features" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover-scale">Features</a>
                                <a data-name="nav-testimonials" href="#testimonials" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover-scale">Testimonials</a>
                                <a data-name="nav-contact" href="#contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover-scale">Contact</a>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                data-name="mobile-menu-button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
                            >
                                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div data-name="mobile-menu" className="md:hidden animate-slide-top">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#home" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                            <a href="#services" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
                            <a href="#features" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
                            <a href="#testimonials" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
                            <a href="#contact" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
