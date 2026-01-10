import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <div className="card-sanctuary relative">
      <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
      <p className="text-foreground italic leading-relaxed mb-6 relative z-10">
        "{quote}"
      </p>
      <div>
        <div className="font-semibold text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
