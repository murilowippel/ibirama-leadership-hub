
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import CallToAction from "@/components/CallToAction";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const globalPresence = [
    { number: "5000+", label: "Organizações Locais" },
    { number: "120+", label: "Países" },
    { number: "150K+", label: "Membros Ativos" },
  ];

  const pillars = [
    {
      title: "Desenvolvimento Individual",
      description: "Oportunidades para crescimento pessoal e profissional através de treinamentos, workshops e experiências práticas."
    },
    {
      title: "Networking",
      description: "Conexões com jovens líderes e profissionais de diversas áreas, tanto localmente quanto globalmente."
    },
    {
      title: "Impacto Comunitário",
      description: "Desenvolvimento e implementação de projetos que geram mudanças positivas na comunidade local."
    },
    {
      title: "Negócios e Empreendedorismo",
      description: "Fomento ao espírito empreendedor e desenvolvimento de habilidades de negócios."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-jci-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre a JCI Ibirama</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Conheça nossa história, nossa missão e como fazemos parte de uma rede global de jovens líderes.
          </p>
        </div>
      </section>

      {/* About JCI Global */}
      <section className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">JCI Global</h2>
            <p className="text-gray-600 mb-4">
              A Junior Chamber International (JCI) é uma organização global sem fins lucrativos composta por jovens cidadãos ativos entre 18 e 40 anos. Fundada em 1915, a JCI está presente em mais de 120 países, com mais de 5.000 comunidades locais.
            </p>
            <p className="text-gray-600 mb-4">
              Nossa missão é proporcionar oportunidades de desenvolvimento que preparem os jovens para criar mudanças positivas. Acreditamos que para criar mudanças positivas duradouras em nossas comunidades, precisamos que jovens assumam a responsabilidade pelo seu futuro.
            </p>
            <p className="text-gray-600">
              Com a frase "Seja Melhor", a JCI inspira os jovens a se desenvolverem continuamente, buscando ser melhores em suas vidas profissionais, pessoais e na comunidade onde vivem.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80" 
              alt="JCI Global"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Global Presence Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          {globalPresence.map((item, index) => (
            <div key={index} className="bg-jci-gray p-8 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-jci-blue mb-2">{item.number}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* JCI Ibirama */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="JCI Ibirama"
            subtitle="Nossa organização local atua em Ibirama e região desde sua fundação, trabalhando para o desenvolvimento de jovens líderes e impacto na comunidade."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Nossa História</h3>
              <p className="text-gray-600 mb-4">
                A JCI Ibirama surgiu da união de jovens engajados e comprometidos com o desenvolvimento local. Formada por profissionais e estudantes que acreditam no potencial transformador da juventude, nossa organização tem trabalhado em diferentes projetos e iniciativas.
              </p>
              <p className="text-gray-600 mb-4">
                Desde o início, focamos em desenvolver lideranças juvenis e implementar projetos de impacto social, educacional e comunitário na cidade de Ibirama e região do Alto Vale do Itajaí.
              </p>
              <p className="text-gray-600">
                Com sede na UDESC Ibirama, nossa organização conecta jovens universitários, profissionais e empreendedores em uma rede que valoriza o networking, o desenvolvimento individual e o compromisso com a comunidade.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80" 
                alt="JCI Ibirama"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Four Areas */}
      <section className="container-section">
        <SectionHeader 
          title="Os Quatro Pilares da JCI"
          subtitle="Nossa atuação se baseia em quatro áreas fundamentais que orientam todas as nossas atividades e projetos."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-jci-blue mb-4">{pillar.title}</h3>
                <p className="text-gray-600 flex-grow">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Faça Parte da Nossa Rede" 
        description="Junte-se à JCI Ibirama e conecte-se a uma comunidade global de jovens líderes." 
        buttonText="Associe-se Hoje" 
        buttonLink="/associe-se"
      />
    </>
  );
};

export default AboutPage;
