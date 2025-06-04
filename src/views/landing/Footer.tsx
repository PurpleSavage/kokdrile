import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const footerLinks = {
    producto: [
      { name: "Características", href: "#" },
      { name: "Precios", href: "#" },
      { name: "Galería", href: "#" },
      { name: "API", href: "#" },
    ],
    recursos: [
      { name: "Documentación", href: "#" },
      { name: "Tutoriales", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Comunidad", href: "#" },
    ],
    empresa: [
      { name: "Acerca de", href: "#" },
      { name: "Carreras", href: "#" },
      { name: "Prensa", href: "#" },
      { name: "Contacto", href: "#" },
    ],
    legal: [
      { name: "Privacidad", href: "#" },
      { name: "Términos", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Licencias", href: "#" },
    ],
  };

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Kokodrile</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforma tus ideas en imágenes profesionales con el poder de la
              inteligencia artificial. Diseñado para el futuro del marketing
              digital.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center 
               text-white hover:text-white transition-all duration-200"
                style={{ backgroundColor: "#1DA1F2" }} // Twitter azul
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center 
               text-white hover:text-white transition-all duration-200"
                style={{ backgroundColor: "#0077B5" }} // LinkedIn azul oscuro
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center 
               text-white hover:text-white transition-all duration-200"
                style={{ backgroundColor: "#E4405F" }} // Instagram rosa/rojo
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center 
               text-white hover:text-white transition-all duration-200"
                style={{ backgroundColor: "#FF0000" }} // YouTube rojo
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 Kokodrile. Todos los derechos reservados.
          </p>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span>Hecho con ❤️ para creadores</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Todos los sistemas operativos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
