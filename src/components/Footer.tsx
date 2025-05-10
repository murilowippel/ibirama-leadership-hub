
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jci-darkBlue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/lovable-uploads/affd7bc5-b805-4cd9-a5c1-fb403d50527f.png"
                alt="JCI Ibirama Logo"
                className="h-16"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Desenvolvendo jovens líderes e criando mudanças positivas na comunidade de Ibirama.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-jci-blue transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-jci-blue transition-colors">Sobre</Link></li>
              <li><Link to="/projetos" className="hover:text-jci-blue transition-colors">Projetos</Link></li>
              <li><Link to="/associe-se" className="hover:text-jci-blue transition-colors">Associe-se</Link></li>
              <li><Link to="/noticias" className="hover:text-jci-blue transition-colors">Notícias</Link></li>
              <li><Link to="/contato" className="hover:text-jci-blue transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-jci-blue" />
                <span>UDESC Ibirama, Ibirama - SC</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-jci-blue" />
                <a href="mailto:contato@jciibirama.org.br" className="hover:text-jci-blue transition-colors">contato@jciibirama.org.br</a>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-jci-blue" />
                <a href="tel:+5547999999999" className="hover:text-jci-blue transition-colors">(47) 99999-9999</a>
              </p>
            </div>

            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com/jcibirama" target="_blank" rel="noopener noreferrer" className="hover:text-jci-blue transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/jcibirama" target="_blank" rel="noopener noreferrer" className="hover:text-jci-blue transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/jcibirama" target="_blank" rel="noopener noreferrer" className="hover:text-jci-blue transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} JCI Ibirama. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
