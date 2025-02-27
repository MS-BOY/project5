function App() {
    try {
        return (
            <div data-name="app" className="min-h-screen">
                <Navbar />
                <Hero />
                <Services />
                <Features />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
