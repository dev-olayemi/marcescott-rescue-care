interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

export default StatCard;
