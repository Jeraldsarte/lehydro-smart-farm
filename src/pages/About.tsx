import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="text-primary">LeHydroSys</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            IoT-Based Automated Lettuce Hydroponic Monitoring System
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-5xl space-y-12">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Hydroponics offers a soilless farming method that can boost sustainable agriculture, but manual monitoring is laborious and error-prone. LeHydroSys addresses these challenges by developing a comprehensive IoT-based system for automatic farm monitoring specifically targeting lettuce grown hydroponically at BISU-Bilar.
              </p>
            </CardContent>
          </Card>

          {/* System Components */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">System Components and Architecture</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                LeHydroSys uses multiple sensors to monitor pH, air and water temperature, humidity, water level, and total dissolved solids (TDS). Core hardware includes an Arduino Uno for data acquisition and control, and an ESP32 Wi-Fi module for data transmission using MQTT to a cloud server. Data is stored in a MySQL database and visualized on a mobile app that provides real-time and historical monitoring.
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Features and Functionalities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    Real-time environmental monitoring with alerts for abnormal conditions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    Automated climate control via a temperature-triggered misting system
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    Efficient nutrient solution management through sensor data-driven pump control
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    Remote system control and data visualization through a user-friendly Android app
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Development */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Development and Implementation</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                The development followed an IoT design methodology including sensor integration, embedded programming in Arduino IDE, mobile app development with Kotlin, and backend server using Node.js and MQTT. The prototype was installed and tested in the BISU hydroponic greenhouse, demonstrating reliable and continuous data monitoring.
              </p>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Results and Usability Evaluation</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                A study involving 27 respondents evaluated the system based on ISO/IEC 25010 standards. The system scored highly in performance efficiency (4.54/5) and functionality (4.48/5), confirming it is usable, efficient, and stable. Graphical visualizations of temperature, humidity, pH, water levels, and TDS are available for trend analysis and better farm management.
              </p>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Challenges and Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                The biggest challenges were network reliability and sensor calibration, addressed through redesigning network communication using MQTT and hardware adjustments. Future improvements include enhancing data validation, security, compatibility, and incorporating predictive analytics for proactive farming.
              </p>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-3xl">Conclusion</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                LeHydroSys successfully automates lettuce hydroponic farming through IoT, improving precision agriculture's efficiency and sustainability. It offers a practical model for educational institutions and small-scale farms aspiring to implement smart farming technologies, optimizing resource usage while reducing manual labor.
              </p>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
