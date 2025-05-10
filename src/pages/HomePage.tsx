
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import SectionHeader from "@/components/SectionHeader";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Missão",
      description: "Proporcionar oportunidades de desenvolvimento que preparem os jovens para criar mudanças positivas na comunidade de Ibirama."
    },
    {
      title: "Visão",
      description: "Ser a principal rede de jovens cidadãos ativos de Ibirama, promovendo desenvolvimento e criando mudanças positivas."
    },
    {
      title: "Valores",
      description: "Liderança, responsabilidade social, empreendedorismo, solidariedade, networking e desenvolvimento contínuo."
    }
  ];

  const recentProjects = [
    {
      title: "Oratória nas Escolas",
      description: "Projeto que desenvolve habilidades de comunicação e expressão em jovens estudantes de escolas públicas.",
      image: "https://images.unsplash.com/photo-1544531586-5f102d92ff34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      link: "/projetos"
    },
    {
      title: "Liderança Juvenil",
      description: "Programa de desenvolvimento de competências de liderança para jovens da região.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      link: "/projetos"
    },
    {
      title: "Ação Social",
      description: "Iniciativas de impacto social para apoiar comunidades carentes da região de Ibirama.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      link: "/projetos"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center md:text-left">
          <div className="max-w-2xl md:ml-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Jovens Líderes Transformando Ibirama
            </h1>
            <p className="text-xl text-white mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              JCI Ibirama é uma organização sem fins lucrativos dedicada ao desenvolvimento de jovens líderes e à criação de mudanças positivas na nossa comunidade.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-jci-blue hover:bg-jci-darkBlue">
                <Link to="/sobre">Conheça a JCI</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-jci-blue border-white">
                <Link to="/associe-se">Associe-se</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="container-section">
        <SectionHeader 
          title="Quem Somos"
          subtitle="A JCI Ibirama é uma organização local que faz parte da rede global da Junior Chamber International, formada por jovens cidadãos ativos que compartilham a crença de que para criar mudanças positivas, precisamos assumir a responsabilidade pelo mundo ao nosso redor."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Nossos Projetos"
            subtitle="Conheça algumas das iniciativas desenvolvidas pela JCI Ibirama para impactar positivamente nossa comunidade."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {recentProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link 
                    to={project.link}
                    className="inline-flex items-center text-jci-blue font-medium hover:underline"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-jci-blue text-jci-blue hover:bg-jci-blue hover:text-white">
              <Link to="/projetos">Ver todos os projetos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News & Events Preview */}
      <section className="container-section">
        <SectionHeader 
          title="Últimas Notícias"
          subtitle="Fique por dentro dos eventos e novidades da JCI Ibirama."
        />
        
        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="overflow-hidden">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80"
                alt="Reunião de Membros" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="text-sm text-gray-500 mb-2">12 de Maio, 2025</div>
              <h3 className="text-xl font-bold mb-2">Reunião Mensal de Membros</h3>
              <p className="text-gray-600 mb-4">
                Nossa próxima reunião mensal acontecerá no dia 15 de Maio, às 19h, na UDESC Ibirama. Todos os membros estão convidados a participar.
              </p>
              <Link 
                to="/noticias"
                className="inline-flex items-center text-jci-blue font-medium hover:underline"
              >
                Leia mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80"
                alt="Novo Projeto" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="text-sm text-gray-500 mb-2">5 de Maio, 2025</div>
              <h3 className="text-xl font-bold mb-2">Novo Projeto em Desenvolvimento</h3>
              <p className="text-gray-600 mb-4">
                A JCI Ibirama está desenvolvendo um novo projeto focado em sustentabilidade para implementação nas escolas da região.
              </p>
              <Link 
                to="/noticias"
                className="inline-flex items-center text-jci-blue font-medium hover:underline"
              >
                Leia mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-jci-blue text-jci-blue hover:bg-jci-blue hover:text-white">
            <Link to="/noticias">Ver todas as notícias</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action - Join Us */}
      <CallToAction 
        title="Junte-se à JCI Ibirama" 
        description="Seja parte de uma rede global de jovens líderes e faça a diferença na sua comunidade." 
        buttonText="Associe-se" 
        buttonLink="/associe-se"
      />
    </>
  );
};

export default HomePage;
