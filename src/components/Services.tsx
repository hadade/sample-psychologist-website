import { Heart, Users, Shield, Sparkles, Brain, Leaf } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Terapie Individuală',
    description: 'Sesiuni personalizate unu-la-unu, adaptate nevoilor dumneavoastră unice, concentrând-se pe creștere personală și vindecare.',
    features: ['Planuri de tratament personalizate', 'Sesiuni confidențiale', 'Program flexibil']
  },
  {
    icon: Users,
    title: 'Consiliere de Cuplu',
    description: 'Întăriți relația voastră prin comunicare și înțelegere îmbunătățite.',
    features: ['Rezolvarea conflictelor', 'Abilități de comunicare', 'Construirea relației']
  },
  {
    icon: Shield,
    title: 'Gestionarea Anxietății și Stresului',
    description: 'Tehnici bazate pe dovezi pentru a vă ajuta să gestionați anxietatea și să reduceți stresul în viața zilnică.',
    features: ['Tehnici TCC', 'Strategii de adaptare', 'Antrenament în conștientizare']
  },
  {
    icon: Sparkles,
    title: 'Suport pentru Depresie',
    description: 'Îngrijire compassionată pentru a vă ajuta să navigați depresia și să redescoperiti bucuria.',
    features: ['Urmărire dispoziției', 'Activare comportamentală', 'Strategii de sprijin']
  },
  {
    icon: Brain,
    title: 'Terapie Traumă',
    description: 'Îngrijire sigură și sensibilă la traumă pentru a procesa experiențe dificile și a promova vindecarea.',
    features: ['Terapie EMDR', 'Procesare traumă', 'Mediu sigur']
  },
  {
    icon: Leaf,
    title: 'Conștientizare și Wellness',
    description: 'Învățați practici de conștientizare și strategii de wellness pentru sănătate mentală pe termen lung.',
    features: ['Ghidare meditație', 'Reducere stres', 'Coachetaj în stil de viață']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Servicii de Psihoterapie Cuprinzătoare
          </h2>
          <p className="text-lg text-gray-600">
            Ofer o gamă de servicii terapeutice bazate pe dovezi, concepute pentru a vă sprijini pe parcursul călătoriei de sănătate mentală.
            Fiecare abordare este personalizată pentru a satisface nevoile și obiectivele unice ale dumneavoastră.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                  <Icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Nu sunteți sigur(ă) care serviciu este potrivit pentru dumneavoastră?
          </h3>
          <p className="text-lg mb-8 text-teal-50 max-w-2xl mx-auto">
            Programați o consultație gratuită de 15 minute pentru a discuta nevoile dumneavoastră și a găsi cea mai bună abordare pentru călătoria dumneavoastră.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-teal-600 rounded-full hover:bg-gray-50 transition-all font-semibold hover:shadow-lg"
          >
            Programare Consultație Gratuită
          </button>
        </div>
      </div>
    </section>
  );
}
