import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-2 rounded-full">
                Psihoterapeut Licențiat
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Călătoria Dumneavoastră către
              <span className="text-teal-600"> Bunăstare Mentală</span> Începe Aici
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Bine ați venit în spațiul sigur și plin de compasiune unde vindecarea se întâmplă. Cu peste 15 ani de experiență,
                îmi ajut clienții să navigheze prin provocările vieții prin terapie bazată pe dovezi, adaptată nevoilor dumneavoastră unice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Programați o Consultație</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-teal-600 hover:text-teal-600 transition-all"
              >
                Află Mai Multe
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-teal-600">15+</div>
                <div className="text-sm text-gray-600">Ani de Experiență</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Pacienți Ajutați</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">98%</div>
                <div className="text-sm text-gray-600">Rata de Satisfacție</div>
              </div>
            </div>
          </div>

          <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-8">
            <div className="aspect-[4/5] bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/7176027/pexels-photo-7176027.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sesiune terapie"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Accept Noi Pacienți</div>
                  <div className="text-sm text-gray-600">Programări serale și în weekend disponibile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
