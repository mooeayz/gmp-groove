import { Calendar, Clock, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Availability = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Availability <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your orders with our regular delivery schedule
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Day-Old Chicks & Turkeys */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors animate-slide-in-left">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-bounce-subtle">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Day-Old Chicks & Turkeys</h3>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                    <span className="font-semibold text-primary">Every Monday</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                    <span className="font-semibold text-primary">Every Thursday</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Fresh arrivals twice weekly for optimal health
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Older Chicks */}
          <Card className="border-2 border-yellow/20 hover:border-yellow/40 transition-colors animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-yellow/10 rounded-full flex items-center justify-center animate-bounce-subtle">
                  <Clock className="w-8 h-8 text-yellow" />
                </div>
                <h3 className="text-xl font-bold">Older Chicks</h3>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow/10 rounded-full">
                    <span className="font-semibold text-yellow">Any Day</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on current stock availability
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Farm Produce */}
          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors animate-slide-in-right">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center animate-bounce-subtle">
                  <Package className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Farm Produce</h3>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                    <span className="font-semibold text-accent">Depends on Stock</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Fresh harvest available when in season
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <Card className="bg-muted/50 border-none">
            <CardContent className="py-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Important:</span> Day-old chicks are sold in packs of 51 (50 + 1 free). 
                Tomatoes are sold per basket. Other items available per bird or per unit. 
                Contact us for bulk orders or special requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
