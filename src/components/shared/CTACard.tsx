import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface CTACardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
  variant?: "primary" | "secondary" | "accent";
}

const CTACard = ({ icon: Icon, title, description, linkText, linkTo, variant = "primary" }: CTACardProps) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  };

  return (
    <div className="card-sanctuary group hover:translate-y-[-4px]">
      <div className={`w-12 h-12 rounded-xl ${variants[variant]} flex items-center justify-center mb-4 transition-colors`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <Link 
        to={linkTo}
        className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
      >
        {linkText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default CTACard;
