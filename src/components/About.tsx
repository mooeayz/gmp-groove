import { Heart, Award, Users } from "lucide-react";
import aboutImage from "@/assets/about-farm.jpg";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={aboutImage} 
                alt="Modern poultry farm with happy farmers and chicken coops" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
          </div>
          
          {/* Right Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">GMP Farms</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At GMP Farms, we're dedicated to providing the highest quality poultry and farm produce. 
              With years of experience in modern agricultural practices, we ensure every chick, turkey, 
              and produce item meets the highest standards of health and quality.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to excellence means you can trust us for your farming and poultry needs. 
              From day-old chicks to fresh farm produce, we deliver quality that makes a difference.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Premium Quality</p>
                  <p className="text-sm text-muted-foreground">Best breeds</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Ethical Care</p>
                  <p className="text-sm text-muted-foreground">Raised right</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Trusted Partner</p>
                  <p className="text-sm text-muted-foreground">Always here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
