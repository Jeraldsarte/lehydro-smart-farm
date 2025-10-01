import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Thermometer, Wifi, Smartphone, AlertCircle, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Smart pH & Nutrient Management",
    description: "Real-time monitoring of pH levels and nutrient concentration ensures optimal growing conditions for maximum yield.",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description: "Automated temperature and humidity regulation through intelligent misting systems maintains ideal growing environment.",
  },
  {
    icon: Wifi,
    title: "IoT Connectivity",
    description: "Arduino Uno and ESP32 microcontrollers communicate via MQTT protocol for seamless data transmission.",
  },
  {
    icon: Smartphone,
    title: "Remote Monitoring",
    description: "Access farm data anywhere through web and mobile applications for complete control on the go.",
  },
  {
    icon: AlertCircle,
    title: "Smart Alerts",
    description: "Receive instant notifications when parameters exceed thresholds, enabling quick response to critical situations.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description: "Comprehensive analytics and reporting help optimize farming practices and increase productivity.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Intelligent Features for <span className="text-primary">Modern Farming</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge IoT technology meets sustainable agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
