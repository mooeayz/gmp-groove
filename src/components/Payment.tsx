import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Lock, ShoppingBag } from "lucide-react";

export const Payment = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to <span className="text-primary">Order?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple and secure payment process for all your farm needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                  <ShoppingBag className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Select Products</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from our available products
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                  <CreditCard className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple payment options available
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                  <Lock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Safe Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Scheduled delivery to your location
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
            <CardContent className="py-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-bold">Start Your Order Today</h3>
                  <p className="text-muted-foreground">
                    Quality products with secure payment and reliable delivery
                  </p>
                </div>
                <Button variant="hero" size="lg" className="group whitespace-nowrap" asChild>
                  <a href="#products">
                    Start Shopping
                    <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Payment methods accepted: Bank Transfer, Cash on Delivery, Mobile Money
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
