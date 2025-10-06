import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  brand?: string;
  price: string;
  available: boolean;
  packSize?: string;
  description: string;
}

const dayOldChicks: Product[] = [
  {
    id: "1",
    name: "Cockerel Chicks",
    brand: "Chi",
    price: "₦25,000",
    available: true,
    packSize: "Pack of 51 (50 + 1 free)",
    description: "Healthy day-old cockerel chicks from Chi brand",
  },
  {
    id: "2",
    name: "Broiler Chicks",
    brand: "Agrited",
    price: "₦28,000",
    available: true,
    packSize: "Pack of 51 (50 + 1 free)",
    description: "Premium broiler chicks for fast growth",
  },
  {
    id: "3",
    name: "Boiler Chicks",
    brand: "Sayed",
    price: "₦27,500",
    available: false,
    packSize: "Pack of 51 (50 + 1 free)",
    description: "Quality boiler chicks from Sayed",
  },
  {
    id: "4",
    name: "Mixed Breed Chicks",
    brand: "Amo",
    price: "₦26,000",
    available: true,
    packSize: "Pack of 51 (50 + 1 free)",
    description: "Versatile mixed breed chicks",
  },
];

const turkeys: Product[] = [
  {
    id: "5",
    name: "Local Turkeys",
    price: "₦15,000",
    available: true,
    description: "Day-old local turkey breeds",
  },
  {
    id: "6",
    name: "Imported Turkeys",
    price: "₦22,000",
    available: true,
    description: "Premium imported turkey breeds",
  },
];

const otherBirds: Product[] = [
  {
    id: "7",
    name: "Ducks",
    price: "₦3,500",
    available: true,
    description: "Healthy day-old ducks",
  },
  {
    id: "8",
    name: "Geese",
    price: "₦4,000",
    available: false,
    description: "Day-old geese",
  },
];

const produce: Product[] = [
  {
    id: "9",
    name: "Fresh Tomatoes",
    price: "₦8,000",
    available: true,
    packSize: "Per basket",
    description: "Farm-fresh tomatoes, harvested daily",
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <CardHeader>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          {product.brand && (
            <Badge variant="secondary" className="font-normal">
              {product.brand}
            </Badge>
          )}
        </div>
        <Badge 
          variant={product.available ? "default" : "destructive"}
          className={product.available ? "bg-primary" : "bg-accent"}
        >
          {product.available ? "Available" : "Not Available"}
        </Badge>
      </div>
      <CardDescription>{product.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <p className="text-3xl font-bold text-primary">{product.price}</p>
        {product.packSize && (
          <p className="text-sm text-muted-foreground">{product.packSize}</p>
        )}
      </div>
    </CardContent>
    <CardFooter>
      <Button 
        className="w-full group-hover:scale-105 transition-transform" 
        disabled={!product.available}
      >
        <ShoppingCart className="w-4 h-4 mr-2" />
        {product.available ? "Add to Order" : "Out of Stock"}
      </Button>
    </CardFooter>
  </Card>
);

export const Products = () => {
  const [activeTab, setActiveTab] = useState("chicks");

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Available <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our selection of quality poultry and fresh produce
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto p-1 bg-card shadow-md">
            <TabsTrigger value="chicks" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              Day-Old Chicks
            </TabsTrigger>
            <TabsTrigger value="turkeys" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              Turkeys
            </TabsTrigger>
            <TabsTrigger value="birds" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              Ducks & Geese
            </TabsTrigger>
            <TabsTrigger value="produce" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              Farm Produce
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chicks" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dayOldChicks.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="turkeys" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {turkeys.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="birds" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherBirds.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="produce" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {produce.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
