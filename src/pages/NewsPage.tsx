
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import CallToAction from "@/components/CallToAction";
import { ArrowRight, Search } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  category: "event" | "news" | "announcement";
}

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "event" | "news" | "announcement">("all");

  // Sample news data
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Reunião Mensal de Membros - Maio 2025",
      date: "12 de Maio, 2025",
      description: "Nossa próxima reunião mensal acontecerá no dia 15 de Maio, às 19h, na UDESC Ibirama. Todos os membros estão convidados a participar para discutirmos os próximos projetos e atividades.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "event"
    },
    {
      id: 2,
      title: "Novo Projeto de Sustentabilidade em Desenvolvimento",
      date: "5 de Maio, 2025",
      description: "A JCI Ibirama está desenvolvendo um novo projeto focado em sustentabilidade para implementação nas escolas da região. O projeto visa conscientizar estudantes sobre a importância da preservação ambiental.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "news"
    },
    {
      id: 3,
      title: "Workshop de Oratória - Inscrições Abertas",
      date: "28 de Abril, 2025",
      description: "Estão abertas as inscrições para o Workshop de Oratória que acontecerá no dia 10 de Maio. O evento é gratuito e aberto ao público, mas com vagas limitadas. Garanta já a sua!",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "announcement"
    },
    {
      id: 4,
      title: "JCI Ibirama Participa de Conferência Regional",
      date: "20 de Abril, 2025",
      description: "Membros da JCI Ibirama participaram da Conferência Regional Sul, realizada em Florianópolis. Durante o evento, foram discutidas estratégias para ampliar o impacto dos projetos locais.",
      image: "https://images.unsplash.com/photo-1560523159-4a9692d222f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "news"
    },
    {
      id: 5,
      title: "Feira de Carreiras 2025 - Save the Date",
      date: "15 de Abril, 2025",
      description: "A tradicional Feira de Carreiras da JCI Ibirama acontecerá nos dias 12 e 13 de Junho. O evento conecta estudantes e profissionais com empresas da região, oferecendo oportunidades de networking e desenvolvimento.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "event"
    },
    {
      id: 6,
      title: "Resultado da Campanha de Arrecadação de Alimentos",
      date: "10 de Abril, 2025",
      description: "A campanha de arrecadação de alimentos realizada pela JCI Ibirama arrecadou mais de 500kg de donativos, que foram destinados a famílias carentes da região. Agradecemos a todos que contribuíram!",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "news"
    },
    {
      id: 7,
      title: "Processo Seletivo para Novos Membros",
      date: "5 de Abril, 2025",
      description: "Estamos com inscrições abertas para novos membros interessados em fazer parte da JCI Ibirama. Se você tem entre 18 e 40 anos e quer desenvolver suas habilidades de liderança, venha conhecer nossa organização!",
      image: "https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "announcement"
    },
    {
      id: 8,
      title: "Workshop de Empreendedorismo Social",
      date: "1 de Abril, 2025",
      description: "No dia 20 de Abril, realizaremos um workshop sobre Empreendedorismo Social, com a participação de especialistas da área. O evento acontecerá na UDESC Ibirama, das 14h às 18h.",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      category: "event"
    }
  ];

  // Filter news based on search term and category
  const filteredNews = newsItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === "all") {
      return matchesSearch;
    }
    
    return matchesSearch && item.category === activeFilter;
  });

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "event":
        return "Evento";
      case "news":
        return "Notícia";
      case "announcement":
        return "Comunicado";
      default:
        return "Notícia";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "event":
        return "bg-jci-blue text-white";
      case "news":
        return "bg-green-600 text-white";
      case "announcement":
        return "bg-amber-500 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-jci-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Notícias e Eventos</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Fique por dentro das novidades, eventos e comunicados da JCI Ibirama.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="container-section">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                className="pl-10" 
                placeholder="Buscar notícias..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex space-x-2 w-full md:w-auto">
              <Button 
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className={activeFilter === "all" ? "bg-jci-blue hover:bg-jci-darkBlue" : ""}
              >
                Todos
              </Button>
              <Button 
                variant={activeFilter === "event" ? "default" : "outline"}
                onClick={() => setActiveFilter("event")}
                className={activeFilter === "event" ? "bg-jci-blue hover:bg-jci-darkBlue" : ""}
              >
                Eventos
              </Button>
              <Button 
                variant={activeFilter === "news" ? "default" : "outline"}
                onClick={() => setActiveFilter("news")}
                className={activeFilter === "news" ? "bg-jci-blue hover:bg-jci-darkBlue" : ""}
              >
                Notícias
              </Button>
              <Button 
                variant={activeFilter === "announcement" ? "default" : "outline"}
                onClick={() => setActiveFilter("announcement")}
                className={activeFilter === "announcement" ? "bg-jci-blue hover:bg-jci-darkBlue" : ""}
              >
                Comunicados
              </Button>
            </div>
          </div>
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredNews.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {getCategoryLabel(item.category)}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a 
                    href="#"
                    className="inline-flex items-center text-jci-blue font-medium hover:underline"
                    onClick={(e) => e.preventDefault()}
                  >
                    Leia mais <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">Nenhum resultado encontrado</h3>
            <p className="text-gray-600">Tente ajustar sua busca ou filtros para encontrar o que procura.</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Fique por dentro das novidades" 
        description="Associe-se à JCI Ibirama e receba em primeira mão informações sobre eventos, projetos e oportunidades." 
        buttonText="Associe-se" 
        buttonLink="/associe-se"
      />
    </>
  );
};

export default NewsPage;
