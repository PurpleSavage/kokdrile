import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const features = [
    {
      icon: "🎨",
      title: "IA Generativa Avanzada",
      description:
        "Crea imágenes profesionales desde simples descripciones de texto con nuestra IA de última generación.",
      highlight: "Más de 50 estilos disponibles",
    },
    {
      icon: "⚡",
      title: "Generación Instantánea",
      description:
        "Obtén resultados en segundos, no en horas. Perfecto para campañas que necesitan rapidez.",
      highlight: "Menos de 10 segundos",
    },
    {
      icon: "🎯",
      title: "Optimizado para Marketing",
      description:
        "Formatos específicos para cada plataforma: Instagram, Facebook, LinkedIn, Google Ads y más.",
      highlight: "15+ formatos incluidos",
    },
    {
      icon: "🔄",
      title: "Edición Inteligente",
      description:
        "Modifica elementos específicos sin regenerar toda la imagen. Control total sobre tu creatividad.",
      highlight: "Edición por capas",
    },
    {
      icon: "📊",
      title: "Analytics Integrado",
      description:
        "Rastrea el rendimiento de tus imágenes y optimiza basándote en datos reales.",
      highlight: "ROI medible",
    },
    {
      icon: "🤝",
      title: "Colaboración en Equipo",
      description:
        "Comparte proyectos, recibe feedback y mantén la consistencia de marca en todo tu equipo.",
      highlight: "Equipos ilimitados",
    },
  ];

function FeaturesSection() {
  
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            POTENCIA TU CREATIVIDAD
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Herramientas diseñadas específicamente para profesionales del
            marketing digital que buscan resultados excepcionales.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 hover:border-orange-500/30"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlight */}
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full">
                <span className="text-orange-400 text-sm font-medium">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="w-full flex items-center justify-center mt-16">
          <Link
            href="/auth"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all 
            duration-200 shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center max-w-60 gap-2"
          >
            Comenzar Gratis <FaArrowRight size={16} className="sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default FeaturesSection;
