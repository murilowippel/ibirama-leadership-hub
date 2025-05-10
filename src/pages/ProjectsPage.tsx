
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "@/components/SectionHeader";
import CallToAction from "@/components/CallToAction";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProject = {
    title: "Oratória nas Escolas",
    description: "O projeto Oratória nas Escolas visa desenvolver habilidades de comunicação em estudantes do ensino fundamental e médio, preparando-os para se expressarem com confiança em ambientes acadêmicos e profissionais.",
    longDescription: "O projeto Oratória nas Escolas é uma iniciativa da JCI Ibirama que tem como objetivo desenvolver habilidades essenciais de comunicação oral em estudantes de escolas públicas. Através de workshops práticos e lúdicos, os alunos aprendem técnicas de oratória, controle de ansiedade ao falar em público, estruturação de discursos e apresentações eficazes. O programa também estimula a confiança, criatividade e pensamento crítico, competências fundamentais para o sucesso acadêmico e profissional. O projeto é realizado em parceria com escolas da região, beneficiando centenas de estudantes anualmente.",
    image: "https://images.unsplash.com/photo-1544531586-5f102d92ff34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80",
    stats: [
      { number: "500+", label: "Estudantes Impactados" },
      { number: "10", label: "Escolas Parceiras" },
      { number: "25", label: "Workshops Realizados" }
    ]
  };

  const currentProjects = [
    {
      title: "Liderança Juvenil",
      description: "Programa de desenvolvimento de competências de liderança para jovens de 16 a 25 anos da região de Ibirama.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "development"
    },
    {
      title: "Empreendedorismo Social",
      description: "Incentivo e mentoria para jovens empreendedores que desejam criar negócios com impacto social positivo.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "business"
    },
    {
      title: "Sustentabilidade nas Escolas",
      description: "Projeto de educação ambiental que promove práticas sustentáveis e conscientização ecológica nas escolas da região.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "community"
    },
    {
      title: "Workshops Profissionalizantes",
      description: "Série de workshops gratuitos que oferecem capacitação profissional em diversas áreas para jovens da comunidade.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "development"
    },
    {
      title: "Feira de Carreiras",
      description: "Evento anual que conecta estudantes a profissionais e empresas, facilitando orientação vocacional e oportunidades de estágio.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "business"
    },
    {
      title: "Ação Social",
      description: "Iniciativas de apoio a comunidades carentes e grupos vulneráveis da região de Ibirama.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "community"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-jci-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossos Projetos</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Conheça as iniciativas que a JCI Ibirama desenvolve para impactar positivamente nossa comunidade.
          </p>
        </div>
      </section>

      {/* Featured Project: Oratória nas Escolas */}
      <section className="container-section">
        <SectionHeader 
          title="Projeto Destaque"
          subtitle="Conheça com mais detalhes nosso principal projeto de impacto na comunidade."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-jci-blue mb-4">{featuredProject.title}</h3>
            <p className="text-gray-600 mb-6">{featuredProject.longDescription}</p>
            
            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-4 text-center mt-8">
              {featuredProject.stats.map((stat, index) => (
                <div key={index} className="bg-jci-gray p-4 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-jci-blue">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src={featuredProject.image}
              alt={featuredProject.title}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Todos os Projetos"
            subtitle="Conheça as diversas iniciativas que desenvolvemos em diferentes áreas de atuação."
          />
          
          <Tabs defaultValue="all" className="mt-12">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 mb-8">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="development">Desenvolvimento</TabsTrigger>
              <TabsTrigger value="business">Negócios</TabsTrigger>
              <TabsTrigger value="community">Comunidade</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="development">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects
                  .filter(project => project.category === "development")
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="business">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects
                  .filter(project => project.category === "business")
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects
                  .filter(project => project.category === "community")
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Quer Contribuir com Nossos Projetos?" 
        description="Junte-se à JCI Ibirama e participe ativamente de nossas iniciativas de impacto social." 
        buttonText="Associe-se" 
        buttonLink="/associe-se"
      />
    </>
  );
};

export default ProjectsPage;
