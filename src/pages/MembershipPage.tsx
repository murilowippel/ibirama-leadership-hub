
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import SectionHeader from "@/components/SectionHeader";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  phone: z.string().min(10, {
    message: "Por favor, insira um número de telefone válido.",
  }),
  age: z.string().refine((val) => {
    const age = parseInt(val);
    return !isNaN(age) && age >= 18 && age <= 40;
  }, {
    message: "A idade deve estar entre 18 e 40 anos.",
  }),
  profession: z.string().min(2, {
    message: "Por favor, informe sua profissão.",
  }),
  message: z.string().optional(),
});

const MembershipPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      profession: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log(values);
    
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Entraremos em contato em breve.",
      variant: "default",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const benefits = [
    {
      title: "Desenvolvimento Pessoal",
      description: "Acesso a treinamentos, workshops e experiências práticas que desenvolvem habilidades de liderança, comunicação e gestão."
    },
    {
      title: "Networking Local e Global",
      description: "Conexão com uma rede de mais de 150.000 jovens líderes em mais de 120 países ao redor do mundo."
    },
    {
      title: "Impacto Social",
      description: "Oportunidade de criar e implementar projetos que geram mudanças positivas na sua comunidade."
    },
    {
      title: "Oportunidades Profissionais",
      description: "Desenvolvimento de habilidades valorizadas no mercado de trabalho e expansão da sua rede de contatos profissionais."
    },
    {
      title: "Experiência Internacional",
      description: "Possibilidade de participar de conferências e eventos internacionais da JCI ao redor do mundo."
    },
    {
      title: "Amizades Duradouras",
      description: "Construção de relacionamentos significativos com pessoas que compartilham valores e objetivos similares."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-jci-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Associe-se à JCI Ibirama</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Seja parte de uma rede global de jovens líderes e faça a diferença na sua comunidade.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container-section">
        <SectionHeader 
          title="Por Que Se Tornar um Membro?"
          subtitle="Descubra os benefícios de fazer parte da rede global da JCI e como isso pode impactar positivamente sua vida pessoal e profissional."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-jci-blue mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Process */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Como Se Tornar um Membro"
            subtitle="O processo para se tornar um membro da JCI Ibirama é simples e acessível para jovens entre 18 e 40 anos."
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-jci-blue text-white font-bold text-xl">1</div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">Preencha o Formulário</h3>
                  <p className="text-gray-600">
                    Complete o formulário de interesse abaixo com suas informações básicas para que possamos entrar em contato.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-jci-blue text-white font-bold text-xl">2</div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">Participe de uma Reunião</h3>
                  <p className="text-gray-600">
                    Após o contato inicial, você será convidado a participar de uma de nossas reuniões para conhecer melhor a organização.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-jci-blue text-white font-bold text-xl">3</div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">Formalize sua Associação</h3>
                  <p className="text-gray-600">
                    Após conhecer a JCI Ibirama, você pode formalizar sua associação através do pagamento da taxa anual e assinatura dos documentos necessários.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-jci-blue text-white font-bold text-xl">4</div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">Comece sua Jornada</h3>
                  <p className="text-gray-600">
                    Participe das atividades, projetos e treinamentos, e comece a desenvolver seu potencial de liderança na JCI Ibirama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container-section">
        <SectionHeader 
          title="Formulário de Interesse"
          subtitle="Preencha o formulário abaixo para manifestar seu interesse em se tornar um membro da JCI Ibirama. Entraremos em contato em breve."
        />
        
        <div className="max-w-2xl mx-auto mt-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo*</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail*</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu.email@exemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone*</FormLabel>
                      <FormControl>
                        <Input placeholder="(47) 99999-9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Idade* (18-40)</FormLabel>
                      <FormControl>
                        <Input type="number" min="18" max="40" placeholder="Sua idade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profissão*</FormLabel>
                    <FormControl>
                      <Input placeholder="Sua profissão ou área de atuação" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem (opcional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Conte-nos um pouco sobre você e seu interesse em se juntar à JCI Ibirama" 
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-jci-blue hover:bg-jci-darkBlue" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default MembershipPage;
