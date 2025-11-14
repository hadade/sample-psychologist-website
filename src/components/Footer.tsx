import { Brain, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const anulCurent = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-teal-500" />
              <span className="text-xl font-semibold text-white">Psiholog Maria Ionescu</span>
            </div>
            <p className="text-sm text-gray-400">
              Psihoterapeut licențiat oferind îngrijire compassionată și bazată pe dovezi pentru persoane care caută bunăstare mentală.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigare Rapidă</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-teal-500 transition-colors">Acasă</a></li>
              <li><a href="#services" className="hover:text-teal-500 transition-colors">Servicii</a></li>
              <li><a href="#testimonials" className="hover:text-teal-500 transition-colors">Mărturii</a></li>
              <li><a href="#blog" className="hover:text-teal-500 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-teal-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-teal-500 transition-colors cursor-pointer">Terapie Individuală</li>
              <li className="hover:text-teal-500 transition-colors cursor-pointer">Consiliere de Cuplu</li>
              <li className="hover:text-teal-500 transition-colors cursor-pointer">Tratament Anxietate</li>
              <li className="hover:text-teal-500 transition-colors cursor-pointer">Suport Depresie</li>
              <li className="hover:text-teal-500 transition-colors cursor-pointer">Terapie Traumă</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Informații Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>Strada Sănătății nr. 123<br />Etaj 2<br />București, Sector 1, 010101</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span>0712 345 678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span>contact@psiholog.ro</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {anulCurent} Psiholog Maria Ionescu. Toate drepturile rezervate.</p>
          <p className="mt-2 text-gray-500">Psihoterapeut Licențiat | Licență #PSI-12345</p>
        </div>
      </div>
    </footer>
  );
}
