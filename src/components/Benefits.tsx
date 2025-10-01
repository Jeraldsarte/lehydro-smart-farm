import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Zap, BarChart3, Shield } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Conserves water and resources through precision agriculture and optimized nutrient delivery systems.",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Enhanced Productivity",
    description: "Automation reduces manual labor and increases crop yield through optimal growing conditions.",
    color: "text-secondary",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Real-time analytics and historical data enable informed decision-making and continuous improvement.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Reliable & Consistent",
    description: "Automated systems ensure consistent crop quality and reduce the risk of human error.",
    color: "text-secondary",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Transforming <span className="text-primary">Modern Agriculture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of sustainable and efficient farming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className={`h-7 w-7 ${benefit.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Revolutionizing Agriculture with IoT
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              LeHydroSys exemplifies how Internet of Things technology can transform traditional farming methods 
              into smart, automated systems that support sustainable practices and deliver measurable results. 
              By providing farmers with timely data, intelligent alerts, and comprehensive automation, 
              we're building the future of agriculture today.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Benefits;
