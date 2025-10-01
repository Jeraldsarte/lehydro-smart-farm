import { Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sprout className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="font-bold text-lg">LeHydroSys</div>
              <div className="text-sm text-muted-foreground">Smart IoT Hydroponics</div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Bohol Island State University-Bilar
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} LeHydroSys. Advancing sustainable agriculture.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
