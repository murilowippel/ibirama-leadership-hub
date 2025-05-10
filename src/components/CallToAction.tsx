
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

const CallToAction = ({ title, description, buttonText, buttonLink, className = "" }: CallToActionProps) => {
  return (
    <section className={`bg-jci-blue py-16 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">{description}</p>
        <Button asChild className="bg-white text-jci-blue hover:bg-gray-100">
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
