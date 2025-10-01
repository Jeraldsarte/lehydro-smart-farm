import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechSpecs = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-primary">Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on robust IoT infrastructure for reliability and scalability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Hardware Components
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="font-medium">Microcontrollers</span>
                <div className="flex gap-2">
                  <Badge variant="secondary">Arduino Uno</Badge>
                  <Badge variant="secondary">ESP32</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="font-medium">Sensors</span>
                <Badge variant="outline">pH, Temperature, Humidity</Badge>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="font-medium">Monitoring</span>
                <Badge variant="outline">Water Level, Nutrient Concentration</Badge>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="font-medium">Actuators</span>
                <Badge variant="outline">Automated Misting System</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                Software Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="font-medium">Communication Protocol</span>
                <Badge>MQTT</Badge>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="font-medium">Web Interface</span>
                <Badge>Real-time Dashboard</Badge>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="font-medium">Mobile App</span>
                <Badge>iOS & Android Compatible</Badge>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="font-medium">Data Management</span>
                <Badge>Cloud-based Storage</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20 bg-gradient-to-br from-accent/50 to-background">
          <CardHeader>
            <CardTitle className="text-2xl">System Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Highly Functional</div>
                <p className="text-muted-foreground">Usability Evaluation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Efficient</div>
                <p className="text-muted-foreground">Resource Management</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Reliable</div>
                <p className="text-muted-foreground">24/7 Monitoring</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechSpecs;
