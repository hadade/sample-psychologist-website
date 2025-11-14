import { Brain } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-teal-600" />
            <span className="text-xl font-semibold text-gray-900">Psiholog Maria Ionescu</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Acasă
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Servicii
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Mărturii
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </button>
          </div>

          <button onClick={() => scrollToSection('contact')} className="hidden md:block px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
            Programare Consultație
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                Acasă
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                Servicii
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                Mărturii
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                Contact
              </button>
              <button onClick={() => scrollToSection('contact')} className="mx-4 px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
                Programare Consultație
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
