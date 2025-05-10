
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
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  subject: z.string().min(2, {
    message: "Por favor, informe o assunto.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

const ContactPage = () => {
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
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log(values);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Responderemos em breve.",
      variant: "default",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-jci-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contato</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Entre em contato conosco para mais informações sobre a JCI Ibirama.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <SectionHeader 
              title="Informações de Contato"
              subtitle="Utilize um dos canais abaixo para entrar em contato com a JCI Ibirama."
              centered={false}
            />
            
            <div className="space-y-8 mt-8">
              {/* Address */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-jci-blue/10 text-jci-blue">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    UDESC Ibirama<br />
                    Rua Dr. Getúlio Vargas, 2822<br />
                    Bela Vista, Ibirama - SC, 89140-000
                  </p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-jci-blue/10 text-jci-blue">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium mb-1">E-mail</h3>
                  <a href="mailto:contato@jciibirama.org.br" className="text-gray-600 hover:text-jci-blue transition-colors">
                    contato@jciibirama.org.br
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-jci-blue/10 text-jci-blue">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium mb-1">Telefone</h3>
                  <a href="tel:+5547999999999" className="text-gray-600 hover:text-jci-blue transition-colors">
                    (47) 99999-9999
                  </a>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-lg font-medium mb-3">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com/jcibirama" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-jci-blue/10 text-jci-blue hover:bg-jci-blue hover:text-white transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="https://instagram.com/jcibirama" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-jci-blue/10 text-jci-blue hover:bg-jci-blue hover:text-white transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com/company/jcibirama" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-jci-blue/10 text-jci-blue hover:bg-jci-blue hover:text-white transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-12">
              <h3 className="text-lg font-medium mb-4">Nossa Localização</h3>
              <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.0097610262596!2d-49.52167752444952!3d-27.05910886592456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dfb7b605fa3737%3A0xe4ed313b75b5a9ab!2sUDESC%20-%20Centro%20de%20Educa%C3%A7%C3%A3o%20Superior%20do%20Alto%20Vale%20do%20Itaja%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1620049528305!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <SectionHeader 
              title="Envie uma Mensagem"
              subtitle="Preencha o formulário abaixo para entrar em contato conosco. Responderemos o mais breve possível."
              centered={false}
            />
            
            <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto*</FormLabel>
                        <FormControl>
                          <Input placeholder="Assunto da sua mensagem" {...field} />
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
                        <FormLabel>Mensagem*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Digite sua mensagem aqui..." 
                            className="min-h-[180px]"
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
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
