
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-8xl font-extrabold text-jci-blue mb-6">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Página Não Encontrada</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando parece não existir ou foi movida.
        </p>
        <Button asChild size="lg" className="bg-jci-blue hover:bg-jci-darkBlue">
          <Link to="/">Voltar à Página Inicial</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
